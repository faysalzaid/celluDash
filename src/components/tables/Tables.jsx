import React from 'react'
import EmployeesTable from './EmployeesTable'
import ManagersTable from './ManagersTable'
import ZooImage from './ZooImage'
import { IoMdAdd } from 'react-icons/io'

function Tables() {  

  return (
    <section className=' relative w-full h-full'>
      <div className='flex items-center justify-between mt-3'>
        <h1 className=' normal-text text-left ml-10 text-2xl font-bold'>Employees</h1>
        <div className=' md:mr-10 sm:mr-2 flex items-center gap-2'>
          <span className=' normal-text text-sm'>Add Employee</span>
          <IoMdAdd className=' box-content p-2 bg-blue-400 cursor-pointer rounded-full' />
        </div>
      </div>
      <EmployeesTable />

      <div className='flex items-center justify-between mt-3'>
        <h1 className=' normal-text text-left ml-10 text-2xl font-bold'>Board</h1>
        <div className=' sm:mr-2 md:mr-10 flex items-center gap-2'>
          <span className=' normal-text text-sm'>Add Board</span>
          <IoMdAdd className=' box-content p-2 bg-blue-400 cursor-pointer rounded-full' />
        </div>
      </div>
      <ManagersTable />

      <ZooImage />

    </section>
  )
}

export default Tables
