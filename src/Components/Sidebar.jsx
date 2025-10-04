import { useSelector } from "react-redux";

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return (
        <div className=" p-5 w-48 shadow-lg ">
            <ul>
                <li>Home</li>
                <li>History</li>
                <li>Live</li>
                <li>Watch later</li>
                <li>Your videos</li>
                <li>Downloads</li>
            </ul>

            <h1 className="font-bold pt-5 ">Explore</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>

            <h1 className="font-bold pt-5 ">Subscriptions</h1>
            <ul>
                <li>Trisha</li>
                <li>Shivi</li>
            
            </ul>

        </div>
    )
}

export default Sidebar;