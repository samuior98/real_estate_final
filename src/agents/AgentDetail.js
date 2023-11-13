import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { useParams } from 'react-router-dom';
import House from "../houses/House";
import Agent from "./Agent";
import man from '../images/man.png';

export function withRouter(Children){
    return(props) => {
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
 //funzione che va a wrappare la classe e gli da a disposizione i parametri dell'url

class AgentDetail extends React.Component {

    componentDidMount() {
        $.getJSON("/agents/" + this.props.match.params.id, (data) =>
            this.setState({loaded:true, agent:data, error:false}))
            /* .fail(() => this.setState({loaded:true, error:true}));*/
            .fail((response) => {
                let printError = response.status + " - " + response.responseText;
                this.setState({loaded:true, error:printError})
            });
    }

    constructor(props) {
        super(props);
        this.state = {loaded:false, error:false};
    }

    
    render() {
        if(!this.state.loaded)
            return (<div></div>);
        
        if(this.state.loaded && this.state.error)
            return (<div className="text-center">{this.state.error}</div>);

        return(
            <div style={{marginLeft:60}}>
                <Agent agent={this.state.agent} noModifica={true}/>

                <br/><br/>

                <div className="row">
                    <div className="row-md-10 offset-md-10">
                        <a class="btn btn-primary " href="/" role="button">Add new House</a>
                    </div>
                </div>
                
                <br/><br/>

                <div className="row">
                    <h5>Homes he manages</h5>
                    {this.state.agent.houses.map(house => <House house={house}/>)}
                </div>
            </div>
        );
    }
}

export default withRouter(AgentDetail);