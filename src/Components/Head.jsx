import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {YOUTUBE_SEARCH_API} from "../utils/Contant"


const Head = () => {

    const[SearchQuery, setSearchQuery] = useState("");
    const[Suggestions, setSuggestions] = useState([]);
    const[showSuggestions, setShowSuggestions] = useState(false);
    
    useEffect(() => {
        //API caLL
        console.log(SearchQuery);
        //make an api call after every key press
        //but if the diffenece betwwen 2 api calls < 200ms
        //decline the api call
       const timer = setTimeout(() => getSearchSuggestions(), 200);
       
       return () => {
        clearTimeout(timer);
       };

    },[SearchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
        const json = await data.json();
        // console.log(json);
        setSuggestions(json[1]);
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        
        <div className=" grid grid-flow-col p-5 mb-2 shadow-lg fixed w-full bg-white ">

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
               <div>
                    <input 
                      className="w-1/2 border border-solid p-2 rounded-l-full px-5 " 
                      type="text"
                      value={SearchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setShowSuggestions(false)}
                    />

                   <button className=" border border-solid px-5 py-2 rounded-r-full bg- gray">🔍</button>
               </div>

               {showSuggestions && (
                    <div className=" fixed bg-white py-2 px-5 w-[540px] rounded-2xl shadow-lg border border-gray-100">
                        <ul>
                            {Suggestions.map((s) => 
                                <li key = {s} className="py-2 px-3 shadow-sm hover:bg-gray-100 ">
                                    🔍 {s} 
                                </li>
                            )}
                        </ul>
                   </div>
               )}
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