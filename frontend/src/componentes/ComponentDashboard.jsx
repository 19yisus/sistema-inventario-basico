// SUB-COMPONENTS
import Navbar from '../subComponentes/SubComponentNavbar'
import Sidebar from '../subComponentes/SubComponentSidebar'

export default function Dashboard(props){

  return (
      <div className="flex flex-col h-screen w-screen p-0 relative">
          <Navbar/>
          <Sidebar/>
          <div className="ml-16 p-5 mt-14">
            <div className="flex flex-wrap items-center justity-start">
                <div className="flex flex-row space-x-2 text-sm font-bold text-gray-300">
                    <span className="">Project</span><strong className="font-bold text-gray-500">/</strong>
                    <span className="">Creative Agency</span><strong className="font-bold text-gray-500">/</strong>
                    <span className="text-white">Pipelines</span>
                </div>
            </div>
            <div className="mt-4 text-white font-bold">
              {props.componente}
            </div>

          </div>
      </div>
  )
}
