
export default function Sidebar(){
    return (
        <aside className="fixed flex flex-col h-screen w-16 border-r-2 border-gray-600 bg-gray-900 hover:w-64 transition-all duration-300">
            <nav className="grid grid-cols-1 text-center gap-y-0 mt-12 w-full">
                <a href="#" className="py-2 border-r-2 hover:bg-indigo-500 border-blue-700">
                    <i className='bx bxs-grid fill-current text-2xl text-white'></i>
                </a>
                <a href="#" className="py-2 hover:bg-indigo-500 transition-all duration-300">
                    <i className='bx bxs-bell fill-current text-2xl text-white'></i>
                </a>
                <a href="#" className="py-2 hover:bg-indigo-500 transition-all duration-300">
                    <i className='bx bxs-edit fill-current text-2xl text-white'></i>
                </a>
                <a href="#" className="py-2 hover:bg-indigo-500 transition-all duration-300">
                    <i className='bx bxs-user fill-current text-2xl text-white'></i>
                </a>
                <a href="#" className="py-2 hover:bg-indigo-500 transition-all duration-300">
                    <i className='bx bx-log-out fill-current text-2xl text-white'></i>
                </a>
            </nav>
        </aside>
    )
}