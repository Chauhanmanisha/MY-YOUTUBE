import Button from "./Button";

const ButtonList = () => {

    const btnList = ["All", "Music", "Live", "Cricket", "News", "AI", "Gaming", "Movie", "Animated films", "Indian pop music", "Dance video","Mixes","New"];

    return (
         <div className="flex gap-2">
            {/* Step 2: Use map to loop through the list */}
            {btnList.map((btnName, index) => (
                <Button key={index} name={btnName} />
            ))}
        </div>
    )
}

export default ButtonList;