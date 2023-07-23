import {useRef, useState} from "react";
import axios from "axios";

const Insert=()=>{

    const prodname=useRef(``);
    const prodcomp=useRef(``);
    const price=useRef(``);
    const rating=useRef(``);
    const comments=useRef(``);
    
    const [prodobj,setProdobj]=useState({}); 

    const insertdata=()=>{
        axios.post("http://localhost:2030/insert",{"prodname":prodname.current.value,
                                                   "prodcomp":prodcomp.current.value,
                                                   "price":price.current.value,
                                                   "rating":rating.current.value,
                                                   "comments":comments.current.value,}).then((posRes)=>{
            
                                                    
            console.log(posRes);
            const {data}=posRes;
            setProdobj(data);
        },(errRes)=>{
            console.log(errRes);
        })
    }

    return(
            <>
                {/* <div class="form-group mt-3">
                    <label>sid</label>
                    <input type="number"></input>
                </div> */}
                <div className="container mt-5 " style={{width:400,height:470,border:"1px solid grey"}}>
                 <br></br>   <label>product name</label><br></br>
                
                <input type={"text"} ref={prodname}></input>

                <br></br><br></br><label>product company name</label><br></br>
                <input type={"text"} ref={prodcomp}></input>

                <br></br><br></br><label>product price</label><br></br>
                <input type={"number"} ref={price}></input>

                <br></br><br></br><label>product rating</label><br></br>
                <input type={"number"} ref={rating}></input>

                <br></br><br></br><label>product comments</label><br></br>
                <input type={"text"} ref={comments}></input>
                <br></br><br></br>
                <button onClick={insertdata} className="btn btn-info">insert</button>
                </div> 
                <br></br><br></br>
                {
                    Object.keys(prodobj).length==0?(<div ></div>):(<div>{JSON.stringify(prodobj)}</div>)
                }
            </>
    )
};
export default Insert;