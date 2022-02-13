import React from "react";


export default function Box(props) {
    const { movie } = props;
    return (
        <div class="resultCard">
            <figure className="image is-48x48">
                <img
                    src={`https://images.justwatch.com/poster/${movie.poster.replace(/[^0-9]/g, "")}/s592`}
                    alt={movie.title}
                />
            </figure>
            <a class="bolder" href="../entertainment"><h4 class="bolder">{movie.title}</h4></a>

        </div>
    );
}