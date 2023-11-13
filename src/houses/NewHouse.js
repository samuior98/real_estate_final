import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import House from "./House";
import $ from 'jquery';
import HouseDetail from "./HouseDetail";

class NewHouse extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            house: {
                "city": "",
                "address": "",
                "type": "",
                "smp": "",
                "area": "",
                "img_url": "",
                "description": ""
            },
            agent_id:""
        };
    }


    render() {
        return(
            <div>
                <input type="number" name="agent_id" placeholder="agent id" onChange={(e) => this.setState({agent_id:e.target.value})}/>
                <House agent_id={this.state.agent_id} house={this.state.house} wantToCreate={true}/>
            </div>
        );
    }
}

export default NewHouse;