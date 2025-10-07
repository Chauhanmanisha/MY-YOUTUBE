import useVideosData from "../utils/useVideosData";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    
    const videos = useVideosData();

    return (
        <div className="flex flex-wrap">
           {videos.map(video => (
                <Link to={"/Watch?v=" + video.id} key={video.id} >
                    <VideoCard info={video}/>
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer;