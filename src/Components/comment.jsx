const Comment = ({name,text,replies}) => {
    
    return(
        <div className="flex items-start space-x-3 p-2 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <img
               className="w-10 h-10 rounded-full"
               src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${name}`} // random avatar
               alt="user"
            />
            <div>
               <p className="font-semibold">{name}</p>
               <p className="text-gray-600 text-sm">{text}</p>
               {replies.length !=0 && 
               
                  <div>
                     <h1 className="font-bold ml-5">Replies</h1>
                     {replies.map((reply,index) => 
                        <div className="ml-10" key={index}>
                           <p className="font-semibold">{reply?.name}</p>
                           <p className="text-gray-600 text-sm">{reply?.text}</p>
                        </div>
                     )}
                  </div>
               
               }
            </div>
    </div>
    )
  }  

    export default Comment;