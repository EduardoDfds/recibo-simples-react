import React from "react";
import "./conteudoRecibo.css"

class ConteudoRecibo extends React.Component {
    constructor(props) {
        const now = new Date;
        const day = String(now.getDate()).padStart(2,'0');
        const month = String(now.getMonth()+1).padStart(2,'0');
        const year = now.getFullYear();

        const dataAtual = `${day}/${month}/${year}`;

        super(props);
        this.state = {nomePagador:"", docPagador:"", valor:"",referente:"",cidade:"",nomeEmissor:"",
        docEmissor:"", telefone:"", data: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        let nomePagador = this.state.nomePagador;
        let docPagador = this.state.docPagador;
        let valor = parseFloat(this.state.valor);
        let referente = this.state.referente;
        let cidade  = this.state.cidade;
        let nomeEmissor = this.state.nomeEmissor
        let docEmissor = this.state.docEmissor;
        let telefone = this.state.telefone;
        let data = this.state.data;

        this.setState({nomePagador:nomePagador, docPagador:docPagador, valor:valor,referente:referente,cidade:cidade,nomeEmissor:nomeEmissor,
        docEmissor:docEmissor, telefone:telefone, data:data})

        alert(nomePagador);
    }

    render() { 
        return ( 
            <div className="conteudoRecibo">
                <form onSubmit={this.handleSubmit}>
                    <label className="nomePagador">
                        <p>Nome Pagador:</p> 
                        <input type="text" name="nomePagador" onChange={this.handleChange} value={this.state.nomePagador}/>
                    </label>
                    <br /><br />
                    <label className="docPagador">
                        <p>CPF/CNPJ (opcional):</p>
                        <input type="text" name="docPagador" onChange={this.handleChange} value={this.state.docPagador}/>
                        <p className="somenteNumeros">Somente numeros</p>
                    </label>
                    <label className="valor">
                        <p>Valor:</p>
                        <input type="text" name="valor" onChange={this.handleChange} value={this.state.valor}/>
                    </label>
                    <br /><br />
                    <label className="referente">
                        <p>Pagamento referente a:</p> 
                        <input type="text" name="referente" onChange={this.handleChange} value={this.state.referente}/>
                    </label>
                    <br /><br />
                    <div className="columDiv">
                    <label className="cidade">
                        <p>Cidade:</p>
                        <input type="text" name="cidade" onChange={this.handleChange} value={this.state.cidade}/>
                    </label>
                    <label className="data">
                        <p>Cidade:</p>
                        <input type="date" name="data" onChange={this.handleChange} value={this.state.data}/>
                    </label>
                    </div>
                    <br />
                    <div className="columDiv">
                    <label className="nomdEmissor">
                        <p>Nome Emissor:</p>
                        <input type="text" name="nomdEmissor" onChange={this.handleChange} value={this.state.nomeEmissor}/>
                    </label>
                    <label className="docEmissor">
                        <p>CPF/CNPJ:</p>
                        <input type="text" name="docEmissor" onChange={this.handleChange} value={this.state.docEmissor}/>
                    </label>
                    <p className="somenteNumeros2">Somente numeros</p>
                    </div>
                    <label className="telefone">
                        <p>Telefone:</p>
                        <input type="text" name="telefone" onChange={this.handleChange} value={this.state.telefone}/>
                    </label>
                    <div className="formaPagamento">
                        <p>Forma de Pagamento:</p>
                        <label class="radio">
                            <input type="radio" name="pagamento" value="Dinheiro"/>
                            Dinheiro
                        </label>
                        <label class="radio">
                            <input type="radio" name="pagamento" onChange={this.handleChange} value="pix"/>
                            Pix
                        </label>
                        <label class="radio">
                            <input type="radio" name="pagamento" onChange={this.handleChange} value="cheque"/>
                            Cheque
                        </label>
                        <label class="radio">
                            <input type="radio" name="pagamento" onChange={this.handleChange} value="trasferencia"/>
                            Trâsferencia/Depósito
                        </label>
                        <label class="radio">
                            <input type="radio" name="pagamento" onChange={this.handleChange} value="cartao"/>
                            Cartão crédito/Débito
                        </label>
                        <br />
                        <label className="duasVias">
                            <p>Duas vias?</p>
                            <input type="checkbox"/>
                            Sim
                        </label>
                    </div>
                    <br />
                    <label>
                        <p>
                            <input type="hidden" name="gerarRecibo"/>
                            <button type="submit" class="submit">
                            <span>Gerar Recibo</span>
                    </button>
                        </p>
                    </label>
                </form>
            </div>
         );
    }
}
 
export default ConteudoRecibo;