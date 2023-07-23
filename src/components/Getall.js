import {useEffect,useState} from "react";
import axios from "axios";

const Getall=()=>{

    const [arr,setArr]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2030/getall").then((posRes)=>{
        
        const {data}=posRes;
        setArr(data);

        },(negRes)=>{
            console.log("negative response",negRes);
        })
    },[]);
    return(
        <>
            {
                arr.length==0?(<div className="spinner-border text-primary"  style={{position:"absolute", 
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
                            arr.map((element,index)=>{
                               return(
                                <tbody>
                                    <tr key={element.prodid}>
                                        <td>{element.prodid}</td>
                                        <td>{element.prodname}</td>
                                        <td>{element.prodcomp}</td>
                                        <td>{element.price}</td>
                                        <td>{element.rating}</td>
                                        <td>{element.comments}</td>
                                     </tr>
                                </tbody>
                               )
                            })
                        }
                    </table>
                </div>)
            }
        </>
    )
};
export default Getall;
