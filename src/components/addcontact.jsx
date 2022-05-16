import { useState } from "react";
import Showcontact from "./showcontact";

function ADDcontact()
{
     let [array_of_contact,setarrayof_contact]= useState([])
       let [contact,setcontact] = useState({});


       const changehandle = (target)=>{

         let {name,value} = target;
            
         setcontact({...contact,[name]:value})

       }
       const submitcontact=()=>{
           
       
           setarrayof_contact([...array_of_contact,contact]);
           
       }

       const Delete=(value)=>{
          
        console.log(value,"vaaaa")
        array_of_contact.splice(value,1);
        setarrayof_contact([...array_of_contact])
       }


    return (<div>
        <input type="text" name="name" placeholder="enter contact name" onChange={(e)=>{changehandle(e.target)}}/>
        <input type="text" name="number" placeholder="enter contact number"onChange={(e)=>{changehandle(e.target)}} />
        <button onClick={submitcontact}>add</button>
        {/* {array_of_contact.map((e,index)=>{return (<Showcontact id={index} data = {e} Delete={Delete} />)})} */}
        
    </div>) 
}

export default ADDcontact