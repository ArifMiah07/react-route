import { Outlet, createBrowserRouter, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {

    const navigation = useNavigation();

    const location = useLocation();
    const a = createBrowserRouter();
    console.log(location);
    return (
        <div className="flex flex-col items-center">
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
            }
            <h2>This is home</h2>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;