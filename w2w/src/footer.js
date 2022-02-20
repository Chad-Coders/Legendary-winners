import React from "react";

var style = {
    backgroundColor: "#1C3738",
    borderTop: "0px solid #1C3738",
    textAlign: "center",
    padding: "35px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "65px",
    width: "100%",
};

function Footer() {
    return (
        <div style={style}>
     <strong>   
         <h4 style={{ color: '#F4FFF8' }}> Chad Coders™</h4>
        <p style={{ color: '#F4FFF8' }}> Any kind of feedback or faced an issue ? 
            Please feel free to contact us at anytime | 
            Email : ahmedtaalab95@hotmail.com
        </p>
        </strong>    
    </div>
    );
}

export default Footer;
