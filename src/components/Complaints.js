import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Complaints = () => {
    
   const [name, setName] = useState('');
    const [date, setDate] = useState('');
    
     const [block, setBlock] = useState('');
     const [room_no, setRoomno] = useState('');
     const [issuetype, setIssue] = useState('');
   const [complaint, setcomplaint] = useState('');
    



    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const comp = {name,date,block,room_no,issuetype,complaint};
        setIsPending(true);

        fetch('http://localhost:8000/comps',{
            method: 'Post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comp),
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/viewcomplaint');
        })

    }  

    return (  
        <div className="complaint">
            <h2>Complaint</h2>
            <form onSubmit={handleSubmit}>
                <label>Student Name</label>
                <input 
                type="text"  
                required
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />

                <label>Date Of Complaint</label>
                <input 
                type="text"  
                required
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
                />


                <label>Room Number</label>
                <input 
                type="text"  
                required
                value = {room_no}
                onChange = {(e) => setRoomno(e.target.value)}
                />
                 
                <label>Block No:</label>
                <select
                    value = {block}
                    onChange = {(e) => setBlock(e.target.value)}
                >
                    <option value="Block A">Block A</option>
                    <option value="Block E">Block E</option>
                    
                </select>

                <label>Issue Type:</label>
                <select
                    value = {issuetype}
                    onChange = {(e) => setIssue(e.target.value)}
                >
                    <option value="Door">Door</option>
                    <option value="Electrical appliances">Electrical appliances</option>
                    <option value="Cleanliness">Cleanliness</option>
                    
                </select>

                 <label>Issue</label>
                <textarea  
                required
                value = {complaint}
                onChange = {(e) => setcomplaint(e.target.value)}
                />
                {!isPending && <button>Add Complaint</button>}
                {isPending && <button disabled>Adding Complaint....</button>}
                
            </form>
        </div>
    );
}
 
export default Complaints;

