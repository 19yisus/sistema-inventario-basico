import React from 'react'
import Dashboard from './ComponentDashboard'

export default function ComponentHomeDashboard(){
  const jsx_component_Home = (
    <>
      <div className="flex flex-wrap items-center mt-8 justify-between text-white">
          <div className="flex-col items-center">
              <h1 className="font-bold text-3xl">Add new Action</h1>
              <a href="#" className="font-xs">to <span className="text-blue-400 hover:underline">Creative Agency</span></a>
          </div>
          <div className="flex-row items-center">
              <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 font-bold shadow-md">
                  Bulk Select
              </button>
          </div>
      </div>
    </>
  )

  return(
    <Dashboard componente={jsx_component_Home}/>
  )
}
