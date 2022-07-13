import React from "react";
import "./footer.css";


class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className="footer">
            <p className="assinatura">desenvolvido por: Eduardo Dias.</p>
        </div> );
    }
}
 
export default Footer;