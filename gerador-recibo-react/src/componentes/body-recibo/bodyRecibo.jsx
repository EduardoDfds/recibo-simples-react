import React from "react";
import ConteudoRecibo from "../conteudo-recibo/conteudoRecibo";
import "./bodyRecibo.css";

class BodyRecibo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        <div className="bodyRecibo">
            <div>
                <ConteudoRecibo/>
                <h3>Recibo Simples</h3>
            </div>
        </div> );
    }
}
 
export default BodyRecibo;