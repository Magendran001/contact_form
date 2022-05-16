import "./contactcard.css"
function Popupcontact({singleobj})

{
    console.log(singleobj,"singleobj")
    return (<div className="popup_contact">
     
     <div>
         <img src={singleobj.image} alt="maggi" />
     </div>
     <div>
         <p>{singleobj.name}</p>
         <p>{singleobj.email}</p>
         <p>{singleobj.mbl_number}</p>
     </div>

    </div>)
}
export default Popupcontact