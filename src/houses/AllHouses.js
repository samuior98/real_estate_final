import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import House from "./House";
import { Link } from 'react-router-dom';

class AllHouses extends React.Component {

    componentDidMount() {
        $.getJSON("/houses", (data) => this.setState({loaded:true, houses:data, housesToShow:data}));
    }

    constructor(props) {
        super(props);
        this.state= {loaded:false};
    }


    deleteHouse = (id) => {
        //rimuove dal suo stato la casa con id id
        //aggiorna lo stato
        for(let house of this.state.houses) {
            if(house.flicker==undefined || house.flicker==null)
               house.flicker = true;
            else
               house.flicker = !house.flicker;
        }
    
        let newHousesToShow = this.state.houses.filter(house => house.id !== id);
        this.setState({housesToShow:newHousesToShow});
    }


    searchByCity = (e) => {
        let city= e.target.value.toLowerCase();
        
        for(let house of this.state.houses) {
            if(house.flicker == undefined || house.flicker == null)
                house.flicker= true;
            else
                house.flicker= !house.flicker;
        }

        let newHousesToShow= this.state.houses.filter(house => house.city.toLowerCase().includes(city));
        this.setState({housesToShow:newHousesToShow});
    }


    render() {
        if(!this.state.loaded)
            return (<div></div>);

        return (
            <div className="col">
                <div className="col-md-4 offset-md-4 mt-3">
                        <input className="form-control mr-sm-2 mb-2" type="text" placeholder="Search by city" onChange={this.searchByCity}/>
                        {/*<button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchByCity}>Search</button>*/}
                </div>

                <div className="col-md-4 offset-md-11 mt-1">
                    <Link to="/newHouse">New House</Link>
                    {/*<input type="button" value="Add new house" onClick={this.newHouse}/>*/}
                </div>

                <br/><br/>

                <div className="row">
                    {this.state.housesToShow.map(house => <House key={house.flicker} house= {house} notifyDelete={this.deleteHouse}/>)}
                </div>
            </div>
        )
    }
}

export default AllHouses;