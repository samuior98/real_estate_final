import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

class House extends React.Component {

    constructor(props) {
        super(props);
        this.state= props.house;
    }

    handleChange = (e) => {
        let newState= this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var settings = {
            "url": "/houses/" + this.state.id,
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(this.state)
        };
          
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        this.setState({wantToModify:false});
    }


    create = (e) => {
        let toCreate= this.state;
        toCreate.agent_id= this.props.agent_id;

        var settings = {
            "url": "/houses/",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(toCreate)
        };
          
        $.ajax(settings)
            .done(function (response) {
                window.location.replace("/houses");
            })
            .fail(() => this.setState({error:true}));        
    }



    delete = (e) => {
        //richiesta di delete al backend e notificare il padre
        var settings = {
            "url": "/houses/" + this.state.id,
            "method": "DELETE",
            "timeout": 0,
        };
          
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
        
        this.props.notifyDelete(this.state.id);
        //metodo che gli arrivera come prop dal padre (AllHouses)
    }


    render() {
            {/*     MIOOO (dentro il return)
            <div className="col">
                <Link to={"/houses/" + this.state.id}>
                    <div className="card" style={{width: "16rem", margin:60, marginBottom:40, marginTop:20, backgroundColor:"#fdd835", alignItems:"center"}}>
                        <img src={this.state.img_url} className="card-img-top img-thumbnail"  alt="immagine casa" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.houseType}</h5>
                            <p className="card-text text-center">
                                <img src={location} width="17" height="17" alt=""/> {this.state.city}, {this.state.address} <br/><br/>
                                Managing agent id: {this.state.agent_id}
                            </p>
                        </div>

                        <a class="btn btn-danger" href={"/delete/" + this.state.id} role="button">DELETE</a>
                    </div>
                </Link>
            </div>
            */}

        if(this.state.wantToModify || this.props.wantToCreate)
            return(
                <div className="card" style={{width: "18rem"}}>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.error ?  <h3 style={{color:"red"}}>PROBLEMA CASA, non è valida</h3> :""}
                        <input type="text" name="imgUrl" value={this.state.img_url} placeholder="immagine" onChange={this.handleChange} />
                                <div className="card-body">
                                    <h5 className="card-title">
                                    <input type="text" name="address" value={this.state.address} placeholder="indirizzo" onChange={this.handleChange} />, 
                                    <input type="text" name="city" value= {this.state.city}  placeholder="città" onChange={this.handleChange} />
                                    </h5>
                                    <p className="card-text">
                                        <textarea name="description" value= {this.state.description}  placeholder="descrizione" onChange={this.handleChange} />
                                    </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Tipo: <input type="text" name="type" value={this.state.type}  placeholder="tipo" onChange={this.handleChange} /> </li>
                                        <li className="list-group-item">Metri quadrati:<input type="number" name="area" value={this.state.area}  placeholder="area" onChange={this.handleChange} /></li>
                                        <li className="list-group-item">Prezzo al m^2: <input type="number" name="smp" value={this.state.smp}  placeholder="prezzo al metro quadro" onChange={this.handleChange} /></li>
                                    </ul>
                                {this.state.wantToModify ? <input type="submit" value="Salva cambiamenti" />: <input type="button" value="Crea nuova casa" onClick={this.create}/>}
                                </div>
                    </form>
                </div>
        );


        return(
            <div className="col" style={{marginLeft:30, marginRight:30, marginBottom:100}}>
                <div className="card" style={{width: "18rem"}}>
                    <input type="button" value="modifica" onClick={() => this.setState({wantToModify:true})} /><br/>
                    {/*this.props.noModifica ? "" :  <span><input type="button" value="modifica" onClick={() => this.setState({wantToModify:true})} /><br/></span>*/}
                    
                    <input type="button" value="elimina" onClick={this.delete}/> <br/>

                    <img className="card-img-top" src={this.state.img_url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.address}, {this.state.city}</h5>
                        <p className="card-text">
                            {this.state.description}
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Tipo: {this.state.type}</li>
                            <li className="list-group-item">Metri quadrati: {this.state.area}</li>
                            <li className="list-group-item">Prezzo al m^2: {this.state.smp}</li>
                            <li className="list-group-item">Prezzo Totale: {this.state.totalPrice} €</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default House;