
import { useState } from 'react';
import './App.css';
import ADDcontact from './components/addcontact';
import Showcontact from './components/showcontact';
import Contactcard from './components/contactcard.css/contactcard';

function App() {
  let [curentdata,setcurrentdata] = useState(false);
     
   

  return (
    <div className="App">
      
     

        <button onClick={()=>{setcurrentdata(!curentdata)}}>Card Contact</button>
        {/* <button onClick={()=>{setcurrentdata("addcontact")}}>Add contact</button> */}
         
           {curentdata?<Contactcard/>:""}
    </div>
  );
}

export default App;
