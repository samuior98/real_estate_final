import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Agent from "./Agent";
import { Link } from "react-router-dom";

class AllAgents extends React.Component {

    componentDidMount() {
        $.getJSON("/agents", (data) => this.setState({loaded:true, agents:data, agentsToShow:data}));
    }

    constructor(props) {
        super(props);
        this.state= {loaded:false};
    }

    deleteAgent = (id) => {
        for(let agent of this.state.agents) {
            if(agent.flicker==undefined || agent.flicker==null)
                agent.flicker = true;
            else
                agent.flicker = !agent.flicker;
        }

        let newAgentsToShow = this.state.agents.filter(agent => agent.id !== id);
        this.setState({agentsToShow:newAgentsToShow});
    }

    render() {
        if(!this.state.loaded)
            return (<div></div>);

        return (
            <div>
                <div className="col-md-4 offset-md-11 mt-1">
                    <Link to="/newAgent">New Agent</Link>
                </div>

                <br/>

                <div className="row">
                    {this.state.agents.map(agent => <Agent key={agent.flicker} agent= {agent} notifyDelete={this.deleteAgent}/>)}
                </div>
            </div>
        )
    }
}

export default AllAgents;