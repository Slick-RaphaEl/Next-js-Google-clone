import { MicrophoneIcon, XIcon, UserCircleIcon } from "@heroicons/react/outline";
import { SearchIcon,  } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useRef } from "react";
import Avatar from "../components/Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if(!term) return;
    
        router.push(`/search?term=${term}`);
    
      };

    return (
       <header  className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                    src="http://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={50}
                    width={120}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                />

                <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
                    <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none"/>
                    <XIcon 
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                        onClick={() => (searchInputRef.current.value = "")}
                    />

                    <MicrophoneIcon 
                        className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" 
                    />

                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

                    <button hidden type="submit" onClick={search}>Search</button>
                </form>

                <UserCircleIcon className="ml-auto h-5" />
                {/* <Avatar className="ml-auto" url="https://coaching.papareact.com/ai9"/> */}
            </div>

            <HeaderOptions />
           
       </header>
    )
}

export default Header;
