import { useRef,useState } from "react";
import axios from "axios";

const Update=()=>{

    const prodid=useRef(``);
    const prodname=useRef(``);
    const prodcomp=useRef(``);
    const price=useRef();
    const rating=useRef();
    const comments=useRef(``);

    const [res,setRes]=useState({});

    const updateinfo=()=>{
        axios.put(`http://localhost:2030/update/${prodid.current.value}`,{"prodname":prodname.current.value,
                                                                          "prodcomp":prodcomp.current.value,
                                                                          "price":price.current.value,
                                                                          "rating":rating.current.value,
                                                                          "comments":comments.current.value}).then((posRes)=>{
           
        const {data}=posRes;
        setRes(data)
        console.log(data);

        },(errRes)=>{
            console.log(errRes);
        })
    }

    return(
        <>
            <div className="container mt-3 " style={{width:400,height:100, border:"1px solid grey"}}>
                <label>enter product id</label><br></br><br></br>
                <input type={"number"} ref={prodid}></input>
            </div>
            <div className="container mt-2 " style={{width:400,height:500, border:"1px solid grey"}}>
                <label>Please enter the details you want to change</label><br></br><br></br>
                
                <label>enter product name</label><br></br>
                <input type={"text"} ref={prodname}></input><br></br><br></br>

                <label>enter product company name</label><br></br>
                <input type={"text"} ref={prodcomp}></input><br></br><br></br>

                <label>enter product price</label><br></br>
                <input type={"number"} ref={price}></input><br></br><br></br>

                <label>enter product rating</label><br></br>
                <input type={"number"} ref={rating}></input><br></br><br></br>

                <label>enter product comments</label><br></br>
                <input type={"text"} ref={comments}></input><br></br><br></br>

                <button onClick={updateinfo} className="btn btn-info">update</button>
            </div>   
            <div className="container mt-2">
                
            </div>   
            {
                Object.keys(res).length==0?(<div ></div>):(<div>{JSON.stringify(res)}</div>)
            } 
        </>
    )
};
export default Update;
