import { useState } from "react";
import api from '../backend.js';
import swal from 'sweetalert';


const UpdateEvent = () => {
    const [topic, setTopic] = useState('');
    const [link_details,setLink] = useState('');
    const [note,setNote] = useState('');
    const handleUpdate = async()=>{
        let form = new FormData();
        const img = document.querySelector('#image').files[0];
        if(topic === '' || link_details === '' || note === '' || img === undefined){
            swal("Event Details","Input fields are empty","info");
            return;
        }
        form.append('topic',topic);
        form.append('link_details',link_details);
        form.append('note',note);
        form.append('image',img)
        await api.post('/api/addevents',form);
        swal("Event Details","Successfully Updated!","success");
        setNote('');
        setTopic('');
        setLink('');
        document.querySelector("#image").value = null;

        // for(let val of form.values()){
        //     console.log(val);
        // }
    }
    return ( 
        <div className="update-event">
            <h2>Update Event</h2>
            <form autoComplete="off" onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" onChange={(e)=>{setTopic(e.target.value);}} name="topic" id="topic" placeholder="Topic" value={topic} />
                <input type="text" onChange={(e)=>{setLink(e.target.value);}} name="link_details" id="link_details" placeholder="Link details" value={link_details} />
                <input type="text" onChange={(e)=>{setNote(e.target.value);}} name="note" id="note" value={note} placeholder="Details" />
                <input type="file" name="image" id="image" accept=".jpg,.jpeg,.png" />
                <input type="submit" onClick={handleUpdate} value="update" />
            </form>
        </div>
     );
}
 
export default UpdateEvent;