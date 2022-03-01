import './App.css';

var style = {
    backgroundColor: "#4D4847",
    borderTop: "0px solid #1C3738",
    textAlign: "center",
    padding: "25px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "8%",
    width: "100%",
};

function Footer() {
    return (
        <div style={style}>
            <strong>
                <h4 style={{ color: '#F4FFF8' }}> Chad Coders™ </h4>
                <p style={{ color: '#F4FFF8' }}>
                    <a href="https://www.linkedin.com/in/ahmed-yasser-7b6a351b1/">
                        <img className="img" src={require("./LinkedIn.png")} alt="LinkedIn"></img></a>
                </p>
            </strong>
        </div>

    );
}

export default Footer;
