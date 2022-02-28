import React from "react";
import MovieSource from "./api/MovieSource";

export default class Item extends React.Component {
    state = {
        item: []
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');

        MovieSource.get('/show?id=' + id).then(res => {
            const item = res.data;
            this.setState({ item })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.item.title}</h1>
            </div>
        )
    }
}