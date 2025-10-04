import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        
        <div className=" grid grid-flow-col p-5 m-2 shadow-lg ">

            <div className="flex items-center col-span-1 gap-2">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8"
                    alt="Menu"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                />
                <img
                    className="h-6 mx-2 "
                    alt="youtube-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                />
            </div>

            <div className=" col-span-10 " >
                <input className="w-1/2 border border-solid p-2 rounded-l-full " type="text"/>
                <button className=" border border-solid px-5 py-2 rounded-r-full bg- gray">🔍</button>
            </div>

            <div className=" col-span-1 ">
                <img className=" h-14 "
                    alt="user"
                    src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
                />
            </div>

        </div>
    )
}

export default Head;