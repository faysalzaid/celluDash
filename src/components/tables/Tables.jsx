import React from 'react'
import EmployeesTable from './EmployeesTable'
import ManagersTable from './ManagersTable'
import ZooImage from './ZooImage'

function Tables() {  

  return (
    <section className=' relative w-full h-full'>
      <h1 className=' normal-text text-left ml-10 text-2xl pt-5 font-bold'>Employees</h1>
      <EmployeesTable />

      <h1 className=' normal-text text-left ml-10 text-2xl mt-5 font-bold'>Managers</h1>
      <ManagersTable />

      <ZooImage />

    </section>
  )
}

export default Tables
