import {useState} from 'react'


const Home = () => {

const [blogs, setBlogs] = useState([
    {title: "A cool thing to love", author:"Owais", likes: 23, id:1},
    {title: "My favorite movies", author:"Sikandar", likes: 10, id:2},
    {title: "What do you know about JWB?", author:"Haris", likes: 15, id:3},
    {title: "What do you know about JWB?", author:"Haris", likes: 15, id:3},
    {title: "What do you know about JWB?", author:"Haris", likes: 15, id:3}
])

    return ( 
        <div className ="home">
            {blogs.map((blog)=>{

                return(<div className = "preview" key={blog.id}>
                    <h1 className = "title"> {blog.title}</h1>
                    <p className = "auth">{blog.author}</p>
                    <p className = "likes">Likes:{blog.likes}</p>
                </div>
    )
            })}

        </div>
     );
}
 
export default Home;

