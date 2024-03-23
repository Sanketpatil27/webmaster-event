import BlogCard from "./BlogCard";
import Navbar from "./Navbar";


export default function Blogs() {
    return <div>
        <Navbar />

        <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
            <BlogCard title={"UI/UX Review Check"} src={"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"}/>
            <BlogCard title={"Sample Blog"} src={"https://www.shutterstock.com/image-photo/blog-notes-about-blogconcept-260nw-720876373.jpg"}/>
            <BlogCard title={"Sample"} src={"https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
            <BlogCard title={"Sample blog"} src={"https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
        </div>

    </div>
}