import React from "react";
import MovieSource from "./api/MovieSource";
import './stylesheet/style.css';
const reactStringReplace = require('react-string-replace')

export default class Item extends React.Component {
    state = {
        item: []
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');

        MovieSource.get('/movie?id=' + id).then(res => {
            const item = res.data;
            this.setState({ item })
        })
    }

    render() {
        return (
            <div>
                <figure className="results">
                    <p>{reactStringReplace(this.state.item.poster, /(\d+)/g, (match, i) =>
                        <img key={i} src={`https://images.justwatch.com/poster/${match}/s592`}
                            alt={this.state.item.title}></img>
                    )}</p>
                    <h1>{this.state.item.title}</h1>

                </figure>

                <br></br>

                <figure className="results">
                    <h3>Can be streamed at</h3>

                </figure>

                <br></br>

                <figure className="resultsText">
                    <h4>Release Year :{this.state.item.original_release_year}</h4>
                    <h4>Description: {this.state.item.short_description}</h4>
                </figure>
            </div>
        )
    }
}