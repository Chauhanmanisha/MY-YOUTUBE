import Comment from "./comment";

   const commentsData = [
    {
        name: "Aarav",
        text: "This video was really helpful, thanks!",
        replies: [
        { name: "Priya", text: "Totally agree with you!" },
        { name: "Rohan", text: "Same here, learned a lot!" },
        ],
    },
    {
        name: "Priya",
        text: "Loved the explanation ❤️",
        replies: [
        { name: "Aarav", text: "Right? It was so clear!" },
        { name: "Meena", text: "Yeah, super simple to follow." },
        ],
    },
    {
        name: "Rohan",
        text: "Could you make a part 2 for this topic?",
        replies: [
        { name: "Vikram", text: "That would be great!" },
        { name: "Aisha", text: "Yes please, waiting for it!" },
        ],
    },
    {
        name: "Meena",
        text: "Amazing content, keep going!",
        replies: [
        { name: "Aarav", text: "Absolutely! Love this creator." },
        { name: "Sneha", text: "I second that 🙌" },
        ],
    },
    {
        name: "Vikram",
        text: "Very clear and easy to understand 👏",
        replies: [
        { name: "Ravi", text: "Yes, no confusion at all." },
        { name: "Ananya", text: "Perfectly broken down steps!" },
        ],
    },
    {
        name: "Sneha",
        text: "The visuals really helped me grasp the concept!",
        replies: [
        { name: "Aarav", text: "True, visuals were great!" },
        { name: "Kiran", text: "I loved the animations too." },
        ],
    },
    {
        name: "Ravi",
        text: "This channel deserves more recognition 💯",
        replies: [
        { name: "Meena", text: "Exactly! So underrated." },
        { name: "Rahul", text: "People need to see this!" },
        ],
    },
    {
        name: "Ananya",
        text: "Thank you for uploading such detailed content!",
        replies: [
        { name: "Rohan", text: "Totally agree." },
        { name: "Sneha", text: "Yes, really detailed indeed!" },
        ],
    },
    {
        name: "Rahul",
        text: "Can you please make a playlist for beginners?",
        replies: [
        { name: "Vikram", text: "That would help many!" },
        { name: "Aarav", text: "I’d love a playlist too!" },
        ],
    },
    {
        name: "Aisha",
        text: "I finally understood this topic after so long 🥲",
        replies: [
        { name: "Meena", text: "Same here!" },
        { name: "Ravi", text: "Glad it helped you!" },
        ],
    },
    {
        name: "Kiran",
        text: "Could you add timestamps for each section?",
        replies: [
        { name: "Priya", text: "Good idea!" },
        { name: "Aisha", text: "Yes, that would be helpful!" },
        ],
    },
    {
        name: "Manav",
        text: "The editing is so clean 🔥",
        replies: [
        { name: "Vikram", text: "Right? Very professional!" },
        { name: "Rohan", text: "Totally agree with that." },
        ],
    },
    {
        name: "Diya",
        text: "Love the way you explain things step by step.",
        replies: [
        { name: "Sneha", text: "Yes! Makes it so simple." },
        { name: "Rahul", text: "Exactly, perfect pacing!" },
        ],
    },
    {
        name: "Harsh",
        text: "I’ve been following this channel for months!",
        replies: [
        { name: "Ananya", text: "Same here!" },
        { name: "Vikram", text: "So glad I found it early." },
        ],
    },
    {
        name: "Tanya",
        text: "Can you make a tutorial on React next?",
        replies: [
        { name: "Aarav", text: "That would be awesome!" },
        { name: "Kiran", text: "Yes please 🙏" },
        ],
    },
    {
        name: "Nikhil",
        text: "The sound quality is amazing.",
        replies: [
        { name: "Sneha", text: "Crisp and clear audio!" },
        { name: "Ravi", text: "Definitely better than most channels." },
        ],
    },
    {
        name: "Aman",
        text: "I can finally finish my assignment thanks to this!",
        replies: [
        { name: "Meena", text: "Glad it helped!" },
        { name: "Aarav", text: "Same here, lifesaver!" },
        ],
    },
    {
        name: "Sanya",
        text: "You deserve a million subscribers!",
        replies: [
        { name: "Priya", text: "True that!" },
        { name: "Ravi", text: "One day soon 🙌" },
        ],
    },
    {
        name: "Kavya",
        text: "Everything was explained in such simple words!",
        replies: [
        { name: "Rohan", text: "I agree, super easy language." },
        { name: "Diya", text: "Exactly what I needed!" },
        ],
    },
    {
        name: "Arjun",
        text: "I’m sharing this video with my classmates.",
        replies: [
        { name: "Aisha", text: "They’ll love it too!" },
        { name: "Sneha", text: "Nice of you to share!" },
        ],
    },
    {
        name: "Isha",
        text: "This video is a gem 💎",
        replies: [
        { name: "Ravi", text: "Couldn’t agree more!" },
        { name: "Priya", text: "Absolutely!" },
        ],
    },
    {
        name: "Raj",
        text: "Best explanation on YouTube for this topic.",
        replies: [
        { name: "Vikram", text: "Yes, easily the best!" },
        { name: "Aarav", text: "No one else explains like this." },
        ],
    },
    {
        name: "Maya",
        text: "Would love subtitles in more languages.",
        replies: [
        { name: "Kiran", text: "Yes, that would be great!" },
        { name: "Meena", text: "I’d help translate if needed." },
        ],
    },
    {
        name: "Farhan",
        text: "The examples used were perfect!",
        replies: [
        { name: "Ravi", text: "I agree, very relatable." },
        { name: "Sneha", text: "Loved the real-world approach!" },
        ],
    },
    {
        name: "Pooja",
        text: "I wish I found this channel earlier 😭",
        replies: [
        { name: "Diya", text: "Never too late 😄" },
        { name: "Aarav", text: "Welcome aboard!" },
        ],
    },
    {
        name: "Siddharth",
        text: "The pace of the video was perfect!",
        replies: [
        { name: "Priya", text: "Yeah, not too fast or slow." },
        { name: "Meena", text: "Exactly! Just right." },
        ],
    },
    {
        name: "Aditi",
        text: "Your teaching style is awesome!",
        replies: [
        { name: "Ravi", text: "Totally agree." },
        { name: "Sneha", text: "Clear and engaging!" },
        ],
    },
    {
        name: "Neha",
        text: "You should upload twice a week 😍",
        replies: [
        { name: "Kiran", text: "We’d love more content!" },
        { name: "Rohan", text: "Yes please!" },
        ],
    },
    {
        name: "Ritika",
        text: "Thanks for simplifying such a tough topic!",
        replies: [
        { name: "Aarav", text: "So true!" },
        { name: "Priya", text: "Couldn't have done my homework without it!" },
        ],
    },
    {
        name: "Kabir",
        text: "The intro music is so catchy 😄",
        replies: [
        { name: "Ravi", text: "I replayed it twice lol" },
        { name: "Sneha", text: "Haha me too!" },
        ],
    },
    {
        name: "Yash",
        text: "This deserves more likes 👍",
        replies: [
        { name: "Meena", text: "Let’s help it get there!" },
        { name: "Vikram", text: "Already shared it!" },
        ],
    },
    {
        name: "Simran",
        text: "I watched this twice just to take notes.",
        replies: [
        { name: "Priya", text: "Same here 😄" },
        { name: "Rohan", text: "That’s dedication!" },
        ],
    },
    {
        name: "Dev",
        text: "Wish my teacher explained like this!",
        replies: [
        { name: "Meena", text: "Haha same thought!" },
        { name: "Aarav", text: "True that!" },
        ],
    },
    {
        name: "Tara",
        text: "The examples made everything click 💡",
        replies: [
        { name: "Sneha", text: "Exactly!" },
        { name: "Priya", text: "Very well explained." },
        ],
    },
    {
        name: "Aryan",
        text: "Finally a video that makes sense!",
        replies: [
        { name: "Meena", text: "Haha I know right?" },
        { name: "Vikram", text: "Same reaction!" },
        ],
    },
    {
        name: "Rekha",
        text: "Can you make a series on data visualization next?",
        replies: [
        { name: "Ravi", text: "That would be awesome!" },
        { name: "Aarav", text: "Yes, please do!" },
        ],
    },
    {
        name: "Zara",
        text: "The comments section is so positive 😍",
        replies: [
        { name: "Priya", text: "Because this creator deserves it!" },
        { name: "Meena", text: "Love the community here!" },
        ],
    },
    {
        name: "Reyansh",
        text: "Subbed instantly after watching this!",
        replies: [
        { name: "Rohan", text: "Welcome aboard!" },
        { name: "Sneha", text: "Glad you joined!" },
        ],
    },
    {
        name: "Lavanya",
        text: "Your voice is so calm and pleasant.",
        replies: [
        { name: "Ravi", text: "Yes, easy to listen to." },
        { name: "Kiran", text: "Very soothing tone." },
        ],
    },
    ];

    
  const CommentsContainer = () => {
    return(
        <div>
            <h1>Comment</h1>
           {/* // <Comment data={commentsData[0]}/> */}
           <div className="space-y-3">
              {commentsData.map((comment,index) => (

                <div>
                    <Comment key={index} name={comment.name} text={comment.text} replies={comment.replies}/>

                </div>

                
              ))}
           </div>
        </div>
    )
  }  

    export default CommentsContainer;