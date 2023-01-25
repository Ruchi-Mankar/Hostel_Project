import {Link} from 'react-router-dom';
const ComplaintList = ({comps, title}) => {
    // const blogs = props.blog;
    // const title = props.title;
    
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {comps.map((comp)=>(
                <div className="blog-preview" key = {comp.id}>
                    <Link to = {`/comps/${comp.id}`}>
                    <h2>{comp.name}</h2>
                    <p> {comp.room_no}</p>
                    <p>{comp.block}</p>
                    <p>{comp.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ComplaintList;