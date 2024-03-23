import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
    return <div className="z-[999] backdrop-blur-lg w-full fixed">
        <div className="flex justify-between items-center px-4 py-4 shadow-md rounded">
            <div className="logo font-bold text-3xl">
                <Link to={`/`}>
                    <p> Medium </p>
                </Link>
            </div>

            <div className="flex gap-3">
                {
                    ["Blogs", "About", "Contact"].map((item, index) => (
                        <Link to={`/${item}`}>
                            <p className="pl-4 cursor-pointer text-2xl"> {item} </p>
                        </Link>
                    ))
                }

                <div className="h-10 w-10 bg-zinc-400 rounded-full flex justify-center items-center">
                    <p className="font-extrabold"> 
                        <FaUserAlt></FaUserAlt> 
                    </p>
                </div>
            </div>
        </div>
    </div>
}