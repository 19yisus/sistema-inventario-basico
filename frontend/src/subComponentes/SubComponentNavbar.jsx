import logo from '../logo.svg'

export default function Navbar(){
    return (
      <header className="z-20 fixed flex flex-wrap flex-row justify-between h-12 border-b-2 border-gray-700 text-white w-full">
          <nav className="flex flex-row items-center space-x-1">
              <a href="#" className="px-0.5 ">
                  <img src={logo} alt="Logo" className="h-10 fill-current"/>
              </a>
              <ul className="grid grid-cols-3 gap-0 h-full font-semibold text-white">
                  <li className="flex justify-center items-center border-b-2 border-blue-500 bg-blue-600 hover:bg-blue-700">
                      <a href="#" className="px-2">Pipelines</a>
                  </li>
                  <li className="flex justify-center items-center hover:bg-gray-800 transition-colors duration-300">
                      <a href="#" className="px-2">Codes</a>
                  </li>
                  <li className="flex justify-center items-center hover:bg-gray-800 transition-colors duration-300">
                      <a href="#" className="px-2">Activity</a>
                  </li>
              </ul>
          </nav>

          <form action="#" method="get" className="hidden sm:flex items-center space-x-1 w-auto">
              <div className="rounded-md border-2 border-gray-600 p-1 text-gray-600 hover:border-gray-400 transition-colors duration-300">
                  <input type="search" name="" id="" placeholder="Search" className="bg-transparent outline-none"/>
              </div>
              <button className="flex items-center">
                  <i className='bx bx-search text-xl text-gray-600 hover:text-gray-400 font-bold right-1 top-1 transition-colors duration-300'></i>
              </button>
          </form>

          <div className="flex justify-around items-center space-x-1 mr-2 p-1">
              <span className="hidden sm:block font-semibold">Account</span>
              <img src={logo} className="bg-cover rounded-full h-8" alt="Profile Photo"/>
          </div>
      </header>
    );
}
