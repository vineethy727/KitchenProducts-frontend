import { useRef,useState } from "react";
import axios from "axios";

const Getbyid=()=>{

    const prodid=useRef();

    const [arr,setArr]=useState({});

    const getone=()=>{
        axios.get(`http://localhost:2030/get/${prodid.current.value}`).then((posRes)=>{

            const {data}=posRes;
            setArr(data);
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(

        <>
            <div className="container mt-5 " style={{width:400,height:200,border:"1px solid grey"}}>
                <br></br><label>enter product id </label><br></br><br></br>
                <input type={"number"} ref={prodid} className="form-group"></input><br></br><br></br>
                <button onClick={getone} className=" btn btn-info">get</button>
            </div>
            {
                Object.keys(arr).length==0?(<div className="spinner-border text-primary"  style={{position:"absolute", 
                                                                                     top:"50%",
                                                                                     left:"50%"}}></div>):(<div className="container mt-5">
                    <table className="table table-info table-striped table-hover ">
                        <thead>
                             <tr>
                                <th>product id</th>
                                <th>product name</th>
                                <th>prodcut compname</th>
                                <th>price</th>
                                <th>rating</th>
                                <th>comments</th>
                            </tr>
                        </thead>
                        {
                            <tbody>
                                <tr >
                                    <td>{arr.prodid}</td>
                                    <td>{arr.prodname}</td>
                                    <td>{arr.prodcomp}</td>
                                    <td>{arr.price}</td>
                                    <td>{arr.rating}</td>
                                    <td>{arr.comments}</td>
                                    </tr>
                            </tbody>    
                        }
                    </table>
                </div>)
            }
        </>
    )
};
export default Getbyid;