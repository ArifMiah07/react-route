import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h1 className="text-5xl">Details about name: {name}</h1>
            <h1>Website: {website}</h1>
        </div>
    );
};

export default UserDetails;