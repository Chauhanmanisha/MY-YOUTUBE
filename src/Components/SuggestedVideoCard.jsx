const SuggestedVideoCard = ({ info }) => {
    // if info is undefined, don't render yet
    if (!info) return null;

    const { snippet} = info;
    const { title, thumbnails} = snippet;
    
    return (
    <div className="p-2 m-2 w-[450px] h-[135px] shadow-lg cursor-pointer flex">
       <div className="h-[100px] w-[150px] flex-shrink-0 overflow-hidden rounded-lg">
            <img
                className="h-full w-full object-cover"
                src={thumbnails?.medium?.url || thumbnails?.default?.url}
                alt="thumbnail"
            />
       </div>
      <div className="m-2">
        <li className="">{title}</li>
      </div>
    
    </div>
  );
};

export default SuggestedVideoCard;
