import { useRef,useState } from "react";
import axios from "axios";

const Delete=()=>{

    const prodid=useRef();

    const [res,setRes]=useState();

    const deletebyid=()=>{
        axios.delete(`http://localhost:2030/delete/${prodid.current.value}`).then((posRes)=>{

            const {data}=posRes;
            setRes(data);
            console.log(data);
            console.log("prodicr deleted");
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(

        <>
            <div className="container mt-5 " style={{width:400,height:150,border:"1px solid grey"}}>
                <label>enter product id </label><br></br><br></br>
                <input type={"number"} ref={prodid} ></input><br></br><br></br>
                <button onClick={deletebyid} className=" btn btn-info">delete</button>
            </div>
            <div className="container mt-5">
               
            </div>
           
        </>
    )
};
export default Delete;