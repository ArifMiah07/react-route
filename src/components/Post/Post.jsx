import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;


    const navigate = useNavigate();

    const handleShowDetails = ()=>{
        console.log('clicked');
        navigate(`/post/${id}`);
    }

    return (
        <div className="bg-blue-400 p-6 m-4 ">
            <h3>POst of id: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button className="btn">Click Me</button></Link>
            <button onClick={handleShowDetails} className="btn btn-neutral">Click to see details</button>
        </div>
    );
};

export default Post;