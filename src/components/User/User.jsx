import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    console.log(user);
    return (
        <div className="bg-green-400 p-5 rounded-2xl drop-shadow-xl">
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button className="btn bg-amber-200">Click To Show Details</button>
            </Link>
        </div>
    );
};

export default User;