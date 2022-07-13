import React from "react";


class ConteudoRecibo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nomePagador:"", docPagador:"", valor:0,referente:"",cidade:"",nomeEmissor:"",cpfEmissor:"", telefone:""}
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    render() { 
        return ( 
            <div className="conteudoRecibo">
                <form action="">
                    <label className="nomePagador">
                        Nome Pagador: <br />
                        <input type="text" name="nomePagador" onChange={this.handleChange} value={this.state.nomePagador}/>
                    </label>
                </form>
            </div>
         );
    }
}
 
export default ConteudoRecibo;