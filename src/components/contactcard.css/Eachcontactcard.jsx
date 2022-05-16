import { useState } from "react";
import "./contactcard.css"

function Eachcontactcard(props)
{

    let [popup,setpopup] = useState(false)
    console.log(props)
    let {e} =props; 
    

    
    function changeEach()
    {
        props.click()
        props.setsingleobj(e)
    }
    
    return (<><div onClick={()=>{changeEach()}} className="each_contact" >
    <div><img src={e.image} alt="" /></div>
    <div className="contact_name_email">
        <h2>{e.name}</h2>
        <p>{e.email}</p>
        
    </div>
</div>

</>)
}
export default Eachcontactcard