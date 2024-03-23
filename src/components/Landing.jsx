import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Landing() {
    return <div className="w-full h-screen font-body bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div>
            <Navbar />
        </div>
        
        <div className=" flex justify-center h-[696px]">
            {/* <div className="flex justify-center items-center">
                <div className="">
                    <p className="text-7xl font-extrabold"> The Art of Writing </p>
                    <p className="text-slate-900 text-2xl font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad voluptatem, nam consectetur deleniti molestias laborum rem aut quam. Vel delectus tempora placeat.
                    </p>
                </div>
            </div> */}
            
            <div className="flex justify-center items-center">
                <div className="text-center pt-32">
                    <p className="text-slate-600 text-7xl font-extrabold"> The Art of Writing </p>
                    <p className="text-slate-950 font-extrabold text-2xl">
                        Writing is the act of creating a persistent representation of human language. A writing system uses a set of symbols and rules to encode aspects of spoken language, such as its lexicon and syntax. However, written language may take on characteristics distinct from those of any spoken language.
                    </p>

                    <Link to={"/Blogs"} >
                        <button type="button" class="mt-12 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">
                            Explore Blogs
                        </button>
                    </Link>
                </div>
            </div>
    
        </div>
    </div>
}