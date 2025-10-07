const VideoCard = ({ info }) => {
    // if info is undefined, don't render yet
    if (!info) return null;

    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;

    return (
    <div className="p-4 m-6 w-93 h-[400px] shadow-lg cursor-pointer">
      <img
        className="rounded-lg w-full"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
         <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
