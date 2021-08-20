import logo from '../logo.svg'

export default function Navbar(){
    return (
        <div className="z-10 fixed flex flex-wrap bg-gray-900 flex-row justify-between border-b-2 border-gray-600 text-white w-full h-12">
            <nav className="flex flex-row items-center space-x-2">
                <a href="#">
                    <img src={logo} alt="Logo" className="h-10" />
                </a>

                <ul className="grid grid-cols-3 gap-0 h-full font-semibold text-white">
                    <li className="flex justify-center items-center hover:bg-indigo-500 border-b-2 border-blue-500 transition-all duration-300">
                        <a href="#" className="px-2">Pipelines</a>
                    </li>
                    <li className="flex justify-center items-center hover:bg-indigo-500 transition-all duration-300">
                        <a href="#" className="px-2">Codes</a>
                    </li>
                    <li className="flex justify-center items-center hover:bg-indigo-500 transition-all duration-300">
                        <a href="#" className="px-2">Activity</a>
                    </li>
                </ul>
            </nav>

            <form className="hidden sm:flex items-center space-x-1 w-auto" method="get" action="#">
                <div className="rounded-md border-2 border-gray-600 hover:border-white transition-all duration-300 p-1 text-gray-600">
                    <input type="search" name="" id="" placeholder="Search" className="bg-transparent outline-none"/>
                </div>
                <button className="flex items-center">
                    <i className='bx bx-search text-xl text-gray-600 hover:text-white transition-all duration-300 font-bold right-1 top-1'></i>
                </button>
            </form>

            <div className="flex justify-around items-center space-x-1 mr-2">
                <span className="hidden sm:block font-semibold">Account</span>
                <img src={logo} className="bg-cover rounded-full h-8" alt="Profile Photo"/>
            </div>
        </div>
    );
}