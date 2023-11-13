import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import man from '../images/man.png';
import $ from 'jquery';

class Agent extends React.Component {

    constructor(props) {
        super(props);
        this.state= props.agent;
    }

    handleChange = (e) => {
        let newState= this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var settings = {
            "url": "/agents/" + this.state.id,
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

        var settings = {
            "url": "/agents/",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(toCreate)
        };
          
        $.ajax(settings)
            .done(function (response) {
                window.location.replace("/agents");
            })
            .fail(() => this.setState({error:true}));        
    }

    delete = (e) => {
        var settings = {
            "url": "/agents/" + this.state.id,
            "method": "DELETE",
            "timeout": 0,
        };
          
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
        
        this.props.notifyDelete(this.state.id);
    }


    render() {
        if(this.state.wantToModify || this.props.wantToCreate)
            return(
                <div className="card" style={{width: "18rem"}}>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.error ?  <h3 style={{color:"red"}}>PROBLEMA AGENTE, non è valido</h3> : ""}
                        <input type="text" name="img_url" value={this.state.img_url} placeholder="immagine" onChange={this.handleChange} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <input type="text" name="name" value={this.state.name} placeholder="name" onChange={this.handleChange} />, 
                                    <input type="text" name="surname" value= {this.state.surname}  placeholder="surname" onChange={this.handleChange} />
                                    <input type="text" name="salary" value= {this.state.salary}  placeholder="salary" onChange={this.handleChange} />
                                </h5>

                                {this.state.wantToModify ? <input type="submit" value="Salva cambiamenti" />: <input type="button" value="Crea nuova agente" onClick={this.create}/>}
                            </div>
                    </form>
                </div>
            );

        return(
            <div className="col" >
                <div className="card" style={{width: "20rem", height:"auto", margin:25}}>
                    <input type="button" value="modifica" onClick={() => this.setState({wantToModify:true})} /><br/>
                    <input type="button" value="elimina" onClick={this.delete}/> <br/>

                    <div className="card-body">
                        <Link to={"/agents/" + this.state.id}>
                            <img src={man} alt="m" class="card-img-top  rounded-circle" style={{width:70, height:70}}/>
                            <h5 style={{display:'inline'}}>{this.state.name} {this.state.surname}</h5>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Agent;