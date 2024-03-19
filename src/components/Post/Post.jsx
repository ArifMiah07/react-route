import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="bg-blue-400 p-6 m-4 ">
            <h3>POst of id: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}><span className="text-purple-500">Show Details</span></Link>
        </div>
    );
};

export default Post;