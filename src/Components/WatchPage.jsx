import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import useVideosData from "../utils/useVideosData";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import SuggestedVideoCard from "./SuggestedVideoCard";
import CommentsContainer from "./CommentsContainer";



const WatchPage = () => {

    const[searchParams] = useSearchParams();
    //console.log(searchParams.get("v"));

    const id = searchParams.get("v");
    const src = "https://www.youtube.com/embed/"+ id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    })

    const suggestedVideos = useVideosData();

    const currentVideoArr = suggestedVideos.filter((video) => video.id==id);
    const currentVideo = currentVideoArr[0];
    //console.log(currentVideo?.snippet?.channelTitle);

    const channelTitle = currentVideo?.snippet?.channelTitle || "";
    const likeCount = currentVideo?.statistics?.likeCount || 0;
    const channelImage = "https://yt3.ggpht.com/KV4d-ut0_DGmca8rF1vWrF5gfA7ph9FQAms9DrmF9bXOrWSksXc7uDMPC_ZMExvNBhwIpyRDOIM=s88-c-k-c0x00ffffff-no-rj"

    //console.log(channelTitle, likeCount);
    

    return (
        <div className="flex px-10 py-6 mt-25">

            <div className="flex-row">
                <div className="px-10 rounded-2xl"> 
                   <iframe 
                        width="900"
                        height="500" 
                        src={src}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>

                    </iframe>
                </div>

                <div className="px-10 flex justify-between items-start">
                    <div className="flex gap-6 ">
                        <div className="mb-4 mt-2 flex gap-1">
                            <img src={channelImage} className="h-10 w-10 rounded-2xl"></img>
                            <h1 className="p-2 font-bold">
                                {channelTitle}
                            </h1>
                        </div>

                        <div className="mb-4 mt-2">
                            <button className="p-2 px-4 bg-gray-100 shadow-lg rounded-2xl hover:bg-gray-200">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    
                    <div className="flex gap-2">
                        <div className="flex items-center mb-4 mt-2">
                            <button className="p-2 px-4 bg-gray-100 shadow-lg rounded-l-2xl hover:bg-gray-200">
                                👍{likeCount}
                            </button>
                            <button className="p-2 px-4 bg-gray-100 shadow-lg rounded-r-2xl hover:bg-gray-200">
                                👎
                            </button>
                        </div>

                        <div className="mb-4 mt-2">
                            <button className="p-2 px-4 bg-gray-100 shadow-lg rounded-2xl hover:bg-gray-200">
                                Share
                            </button>
                        </div>

                        <div className="mb-4 mt-2">
                            <button className="p-2 px-4 bg-gray-100 shadow-lg rounded-2xl hover:bg-gray-200">
                                Comments
                            </button>
                        </div>

                   </div>   

                </div>

                <div className="px-10 mt-6">
                    <CommentsContainer />
                </div>


            </div>
                
            <div className="pl-5  h-[500px]">
                <h2 className="text-lg font-bold mb-3">Suggested Videos</h2>
                <div>
                    {suggestedVideos.map((video) => (
                      <Link to={`/Watch?v=${video.id}`} key={video.id}>
                        <div className="mb-3 shadow-sm hover:shadow-md transition rounded-lg">
                          <SuggestedVideoCard info={video} />
                        </div>
                      </Link>
                    ))}
                </div>
            </div>

        
        </div>
  
    )
}

export default WatchPage;