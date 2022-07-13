import React from "react";
import "./header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
         <div className="header">
            <h1 className="titleHead">Gerador de recibo simples</h1>
        </div> );
    }
}
 
export default Header;