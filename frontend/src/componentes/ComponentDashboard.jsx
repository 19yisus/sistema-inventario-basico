// SUB-COMPONENTS
import Navbar from '../subComponentes/SubComponentNavbar'
import Sidebar from '../subComponentes/SubComponentSidebar'

export default function Dashboard(){
    return (
        <div className="flex flex-col bg-gray-900 h-screen w-screen p-0">
            <Navbar/>
            <Sidebar/>
            <div className="ml-16 p-5 mt-14">
            <div className="flex flex-wrap items-center justity-start">
                <div className="flex flex-row space-x-5 text-sm font-semibold">
                    <span className="text-gray-400">Project</span><strong className="font-bold text-gray-600">/</strong>
                    <span className="text-gray-400">Creative Agency</span><strong className="font-bold text-gray-600">/</strong>
                    <span className="text-white">Pipelines</span>
                </div>
            </div>
            <div className="flex flex-wrap items-center mt-8 justify-between text-white">
                <div className="flex-col items-center">
                    <h1 className="font-bold text-3xl">Add new Action</h1>
                    <a href="#" className="font-xs">to <span className="text-blue-400 hover:underline">Creative Agency</span></a>
                </div>
                <div className="flex-row items-center">
                    <button className="p-2 rounded-md bg-blue-600 font-bold shadow-md">
                        Bulk Select
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}