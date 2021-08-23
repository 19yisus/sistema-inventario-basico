
export default function Sidebar(){
    return (
      <aside id="menu" className="z-10 absolute flex flex-col h-screen w-16 space-y-10 border-r-2 border-gray-600 bg-gray-900 overflow-x-hidden text-white">
          <div className="relative w-auto mt-12">
            <a href="#" className="absolute top-0 w-full inline-flex flex-row items-center justify-between h-10 space-x-5 border-r-2 border-blue-700  bg-blue-600 hover:bg-blue-700 pl-5 px-3">
                <i className='bx bxs-grid fill-current text-2xl text-white float-left'></i>
                <strong className="float-right font-semibold pl-4">Dashboard</strong>
            </a>
          </div>
          <div className="relative w-auto">
            <a href="#" className="absolute top-0 h-10 w-full inline-flex flex-row items-center justify-between hover:bg-gray-800 transition-colors duration-300 space-x-5 pl-5 px-3">
                <i className='bx bxs-bell fill-current text-2xl text-white float-left'></i>
                <strong className="float-right font-semibold pl-4">Notificaciones</strong>
            </a>
          </div>
          <div className="relative w-auto">
            <a href="#" className="absolute top-0 h-10 w-full inline-flex flex-row items-center justify-between hover:bg-gray-800 transition-colors duration-300 space-x-5 pl-5 px-3">
                <i className='bx bxs-edit fill-current text-2xl text-white float-left'></i>
                <strong className="float-right font-semibold pl-4">Registros</strong>
            </a>
          </div>
          <div className="relative w-auto">
            <a href="#" className="absolute top-0 h-10 w-full inline-flex flex-row items-center flex-shrink-0 justify-between hover:bg-gray-800 transition-colors duration-300 space-x-5 pl-5 px-3">
                <i className='bx bxs-user fill-current text-2xl text-white float-left'></i>
                <strong className="float-right font-semibold pl-4">Mi perfil</strong>
            </a>
          </div>
          <div className="relative w-auto">
            <a href="#" className="absolute top-0 h-10 w-full inline-flex flex-row items-center justify-between hover:bg-gray-800 transition-colors duration-300 space-x-5 pl-5 px-3">
                <i className='bx bx-log-out fill-current text-2xl text-white float-left'></i>
                <strong className="float-right font-semibold pl-4">Salir</strong>
            </a>
          </div>
      </aside>
    )
}
