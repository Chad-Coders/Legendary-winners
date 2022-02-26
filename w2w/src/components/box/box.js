

export default function Box(props) {
    const { movie } = props;
    return (
        <a class="bolder" href={"../entertainment/?id=" + movie.id}>
            <div class="resultCard">
                <figure className="image is-48x48">
                    <img
                        className="poster"
                        src={`https://images.justwatch.com/poster/${movie.poster.replace(/[^0-9]/g, "")}/s592`}
                        alt={movie.title}
                    />
                </figure>
                <h4 class="bolder">{movie.title}</h4>
            </div>
        </a>
    );
}