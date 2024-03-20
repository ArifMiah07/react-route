import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();

    const {postId} = useParams();
    const {id, title, body} = post;

    console.log(postId);

    const navigate = useNavigate();


    const handleGoBack = ()=>{
        navigate(-1);
    }

    return (
        <div>
            <h1>HI, Post details about : {id}</h1>
            <p>id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={handleGoBack} className="btn btn-secondary">Go back</button>
        </div>
    );
};

export default PostDetails;