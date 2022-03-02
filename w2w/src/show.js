import React from "react";
import MovieSource from "./api/MovieSource";
import './stylesheet/style.css';
const reactStringReplace = require('react-string-replace')

export default class Item extends React.Component {
    state = {
        item: [],
        offers: [],
        seasons: [],
        scoring: [],
        credits: []
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');

        MovieSource.get('/show?id=' + id).then(res => {
            const item = res.data;
            this.setState({ item })
            this.setState({ offers: item.offers })
            this.setState({ seasons: item.seasons })
            this.setState({ scoring: item.scoring })
            this.setState({ credits: item.credits })
        })
    }

    render() {
        console.log("Offers:")
        console.log(this.state.seasons)
        //TMDB AND IMDB SCORE VARIABLES, EXTRACTIONS
        var tmdbscore, imdbscore, imdbvotes;
        for (let index = 0; index < this.state.scoring.length; index++) {
            const element = this.state.scoring[index];
            if (element.provider_type === "tmdb:score") {
                tmdbscore = element.value;
            }
            if (element.provider_type === "imdb:score") {
                imdbscore = element.value;
            }
            if (element.provider_type === "imdb:votes") {
                imdbvotes = element.value;
            }
        }
        return (
            <div>
                <figure className="results">
                    <h6>{reactStringReplace(this.state.item.poster, /(\d+)/g, (match, i) =>
                        <img key={i} src={`https://images.justwatch.com/poster/${match}/s592`}
                            alt={this.state.item.title}></img>

                    )}</h6>
                    <h1>{this.state.item.title}</h1>

                </figure>


                <figure className="results">
                    <h3>Can be streamed at</h3>
                    <figure className="provBox">
                        {this.state.offers.map(function (prov, i) {
                            if (prov.monetization_type === 'flatrate') {
                                if (prov.package_short_name === 'hbo') {
                                    return <div class="boxDiv">
                                        <p key={i} class="provBox2">
                                            <a href={prov.urls.standard_web}><img src={require(`./img/hbm.png`)} alt='hbm'>
                                            </img>
                                            </a>
                                            <div class="presType">
                                                {prov.presentation_type}
                                            </div>
                                        </p>
                                    </div>
                                } else {
                                    return <div class="boxDiv">
                                        <p key={i} class="provBox2">

                                            <a href={prov.urls.standard_web}><img src={require(`./img/${prov.package_short_name}.png`)} alt={prov.package_short_name}>
                                            </img>
                                            </a>
                                            <div class="presType">
                                                {prov.presentation_type}
                                            </div>
                                        </p>
                                    </div>
                                }
                            } else {
                                return <div></div>
                            }

                        })}
                    </figure>
                    <h3>Can be bought at</h3>
                    <figure className="provBox">
                        {this.state.offers.map(function (prov, i) {
                            if (prov.monetization_type === 'buy') {
                                return <div class="boxDiv">
                                    <p key={i} class="provBox2">
                                        <a href={prov.urls.standard_web}><img src={require(`./img/${prov.package_short_name}.png`)} alt={prov.package_short_name}>
                                        </img>
                                        </a>
                                        <div class="presType">
                                            {prov.presentation_type}
                                        </div>
                                    </p>
                                </div>
                            } else {
                                return <div></div>
                            }
                        })}
                    </figure>
                    <h3>Can be rented at</h3>
                    <figure className="provBox">
                        {this.state.offers.map(function (prov, i) {
                            if (prov.monetization_type === 'rent') {
                                return <div class="boxDiv">
                                    <p key={i} class="provBox2">
                                        <a href={prov.urls.standard_web}><img src={require(`./img/${prov.package_short_name}.png`)} alt={prov.package_short_name}>
                                        </img>
                                        </a>
                                        <div class="presType">
                                            {prov.presentation_type}
                                        </div>
                                    </p>
                                </div>
                            } else {
                                return <div></div>
                            }
                        })}
                    </figure>
                </figure>


                <figure className="results">
                    <h3>Seasons</h3>
                    <div className="provBox3">
                        {this.state.seasons.map(function (prov, i) {
                            return <div key={i}>
                                <h5>
                                    {prov.title}
                                </h5>
                            </div>
                        })}
                    </div>
                </figure>

                <figure className="resultsText">
                    <h3>IMDB rating: {imdbscore} ({imdbvotes}) &emsp; &emsp; TMDB rating: {tmdbscore}  </h3>
                    <h4>Release Year :{this.state.item.original_release_year}</h4>
                    <h4>Average episode length  :{this.state.item.runtime} min.</h4>
                    <h4>Description: {this.state.item.short_description}</h4>
                </figure>

                <figure className="resultsText">
                    <div className="provBox4">
                        <h3>Credits</h3>
                        <h3 className="cred1"> Character Name</h3>
                        <h3 className="cred2"> starring</h3>
                        <h3 className="cred3"> Actor</h3>
                        {this.state.credits.map(function (act, i) {
                            return <div key={i}>
                                <h4 className="cred1">{act.character_name}</h4>
                                <div className="cred2">starring</div>
                                <h4 className="cred3">{act.name}</h4>
                            </div>
                        })}
                    </div>
                </figure>
            </div>
        )
    }
}