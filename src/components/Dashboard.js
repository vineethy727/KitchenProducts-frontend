import {Route,Routes,NavLink } from "react-router-dom";
import axios from "axios";
import Delete from "./Delete";
import Getall from "./Getall";
import Getbyid from "./Getbyid";
import Insert from "./Insert";
import Update from "./Update";


const Dashboard=()=>{

    return(
        <>
            <h1 style={{marginLeft:50,marginTop:25,color:"darkblue",textAlign:"center"}}>KitchenProducts</h1>
           <div className="container mt-3 " style={{marginRight:100,backgroundColor:"lightblue",textAlign:"center", height:"5vh"}}>
            <NavLink to="/Insert" style={{marginRight:100, }} >Insert</NavLink>
            <NavLink to="/getall" style={{marginRight:100}} >AllProducts</NavLink>
            <NavLink to="/getone" style={{marginRight:100}} >SingleProducts</NavLink>
            <NavLink to="/delete" style={{marginRight:100}} >delete</NavLink>
            <NavLink to="/update" style={{marginRight:100}} >update</NavLink>
           </div>

            <Routes>
                <Route path="Insert" element={<Insert></Insert>}></Route>
                <Route path="getall" element={<Getall></Getall>}></Route>
                <Route path="getone" element={<Getbyid></Getbyid>}></Route>
                <Route path="delete" element={<Delete></Delete>}></Route>
                <Route path="update" element={<Update></Update>}></Route>
            </Routes>
        </>

      
    )

};
export default Dashboard;