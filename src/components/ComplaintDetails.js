import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ComplaintDetails = () => {
    const { id } = useParams();
    const { data: comp, error, isPending } = useFetch('http://localhost:8000/comps/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/comps/' + comp.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/viewcomplaint');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {comp && (
                <article>
                    <h2>Name: {comp.name}</h2>
                    <p>Block No: {comp.block}</p>
                    <p>Room No: {comp.room_no}</p>
                    <p>Issue Type: {comp.issuetype}</p>
                    <p>Complaint Details: {comp.complaint}</p>
                    <p>Date of Complaint: {comp.date}</p>
                    <button onClick={handleClick}>Resolved</button>
                </article>
            )}
        </div>
    );
}

export default ComplaintDetails;