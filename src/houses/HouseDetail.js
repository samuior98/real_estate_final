import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { useParams } from 'react-router-dom';
import Agent from '../agents/Agent';
import House from "./House";

export function withRouter(Children){
    return(props) => {
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class HouseDetail extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        $.getJSON("/houses/"+id, (data) => this.setState({loaded:true,house:data,error:false}))
        .fail((response) => {
            let stampaErrore = response.status + " " + response.responseText;
            this.setState({loaded:true, error:stampaErrore})
        } );
    }

    constructor(props) {
        super(props);
        this.state = {loaded:false, error:false};
    }


    render() {
        {/* MIOOOOOOOOO
        if(!this.state.loaded)
            return (<div></div>);
        
        if(this.state.loaded && this.state.error)
            return (<div className="text-center">{this.state.error}</div>);

        if(this.state.wantToModify || this.props.wantToCreate)
            return(
                <div style={{marginLeft:60}}>
                    <Agent agent={this.state.house.agente}/>
                    
                    <div className="row">
                        <input type="text" name="img_url" placeholder="img_url" onChange={this.handleChange}/>
                        <img src={this.state.house.img_url} class="rounded float-left" style={{width:1200, height:640}} alt="..."/>

                        <div class="card" style={{width: "18rem"}}>
                            <form onSubmit={this.handleSubmit}>
                                {this.state.error ? <h3>HOUSE NOT VALID</h3> : ""}
                                <div class="card-body">
                                    <input type="text" name="city" value={this.state.city} placeholder="city" onChange={this.handleChange}/>
                                    <input type="text" name="address" value={this.state.address} placeholder="address" onChange={this.handleChange}/>
                                    <input type="text" name="type" placeholder="type" onChange={this.handleChange}/> <br/>
                                    <img src={measurement} width="20" height="20" style={{marginBottom:8, marginRight:8}} alt=""/> <input type="number" name="area" placeholder="area" onChange={this.handleChange}/> &#13217; <br/> 
                                    <img src={info} width="21" height="21" style={{marginRight:8}} alt=""/> <textarea name="description" value="description" placeholder="description" onChange={this.handleChange}/> <br/><br/>
                                    <input type="number" name="smp" placeholder="smp" onChange={this.handleChange}/>
                                    <img src={euro} width="17" height="17" style={{marginRight:8}} alt=""/> {this.state.house.smp * this.state.house.area} &euro;
                                </div>

                                {this.state.wantToModify ? <input type="submit" value="save changes"/> : <input type="button" value="add new house" onClick={this.create}/>}
                            </form>
                        </div>
                    </div>
                </div>
            );

        return(
            <div style={{marginLeft:60}}>
                <Agent agent={this.state.house.agente}/>
                
                <div className="row">
                    <img src={this.state.house.img_url} class="rounded float-left" style={{width:1200, height:640}} alt="..."/>

                    <div class="card" style={{width: "18rem", marginTop:70, marginBottom:70}}>
                        <div class="card-body">
                            <h4> {this.state.house.city} - {this.state.house.address}</h4>
                            <h5> {this.state.house.type}</h5> <br/>
                            <img src={measurement} width="20" height="20" style={{marginBottom:8, marginRight:8}} alt=""/> {this.state.house.area} &#13217; <br/> 
                            <img src={info} width="21" height="21" style={{marginRight:8}} alt=""/> {this.state.house.description} <br/><br/>
                            <img src={euro} width="17" height="17" style={{marginRight:8}} alt=""/> {this.state.house.smp * this.state.house.area} &euro;
                        </div>

                        <input type="button" value="Edit detail" onClick={() => this.setState({wantToModify:true})}/>
                    </div>
                </div>
            </div>
        );
        */}


        
        if(!this.state.loaded)
            return (<div></div>);

        if(this.state.loaded && this.state.error)
            return (<div>{this.state.error}</div>);


        return(
            <div>
                <Agent agent={this.state.house.agent} />
                <House house={this.state.house} noModifica={true} />
            </div>
        );
    }
}

export default withRouter(HouseDetail);