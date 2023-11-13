import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./homepage/Navbar";
import Homepage from "./homepage/Homepage"
import AllHouses from './houses/AllHouses';
import AllAgents from './agents/AllAgents';
import AgentDetail from './agents/AgentDetail';
import HouseDetail from './houses/HouseDetail';
import NewHouse from './houses/NewHouse';
import NewAgent from './agents/NewAgent';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <BrowserRouter> 
                <Routes>
                  <Route path="/" element={<Navbar />}>
                    <Route index element={<Homepage />}/>
                    <Route path="/agents" element={<AllAgents />}/>
                    <Route path="/houses" element={<AllHouses />}/>
                    <Route path="/agents/:id" element={<AgentDetail />}/>
                    {/* :id corrisponde a {id} */}
                    
                    <Route path="/houses/:id" element={<HouseDetail />}/>
                    
                    <Route path='/newHouse' element={<NewHouse />}/>
                    <Route path='/newAgent' element={<NewAgent />}/>
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
        );
    }
}

export default App;