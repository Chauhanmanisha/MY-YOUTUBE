const ChatMessage = ({name , message}) => {
    return (

        <div className="flex items-center shadow-sm p-2 rounded-lg">
            <img className=" h-14 "
                alt="user"
                src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
            />
            <span className="font-bold px-4">{name}</span>
            <span>{message}</span>
        </div>
        
    ) 
}

export default ChatMessage;