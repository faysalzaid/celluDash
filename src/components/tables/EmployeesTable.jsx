import React from 'react'
import one from '../01.jpg'

function EmployeesTable() {

  let employees = [
    { id: '13', img: 'https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2xpbSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Yunis', lastName: 'inshar', position: 'Frontend Developer', username: 'yunis.net'},
    { id: '14', img: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Ibrahim', lastName: 'Ismail', position: 'Backend Developer', username: 'Ibrahim.com'},
    { id: '15', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Khalid', lastName: 'Mohammed', position: 'Full Stack Developer', username: 'Khalid.info'},
    { id: '16', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Suleiman', lastName: 'Shah', position: 'Ui/Ux Designer', username: 'suleiman.com'},
    { id: '17', img: one, firstName: 'Salim', lastName: 'Suleiman', position: 'Guard', username: 'Salim.com'}
  ]

  const zoomImage = () => {
    // let personImg = document.querySelector('.person-img').src
    let zoomPopup = document.querySelector('.zoom-popup')
    zoomPopup.style.display = 'block'
  }

  return (
    <div className='overflow-scroll p-8 flex mt-[20px] bg-slate-100'>
      <table className=' w-full p-3 box-content bg-gray-100 rounded-t-lg overflow-hidden rounded-b-lg shadow-shadow4'>
        <tbody className=''>
          <tr className=' table-head text-left bg-slate-300 '>
             <th className=' p-2 pl-5 pr-5 min-w-[30px] h-[50px]'>#</th>
             <th>Person</th>
             <th className=' p-2 min-w-[150px] h-[50px]'>First Name</th>
             <th className=' p-2 min-w-[150px] h-[50px]'>Last Name</th>
             <th className=' p-2 min-w-[200px] h-[50px]'>Position</th>
             <th className=' p-2 min-w-[200px] h-[50px]'>Username</th>
             <th className=' p-2 min-w-[180px] h-[50px]'>Actions</th>
          </tr>
          {
           employees.map(employee => {
             return(
               <tr key={employee.username} className=' table-row hover:bg-gray-200'>
                 <td className='count p-2 pl-5 pr-5'></td>
                 <td className=' min-w-[80px]'>
                 <img className=' person-img w-[50px] h-[50px] m-auto rounded-lg' src={employee.img} alt='sawir' onClick={zoomImage} />
                 </td>
                 <td className=' table-data-1 p-2 min-w-[120px]'>{employee.firstName}</td>
                 <td className=' table-data-1 p-2 min-w-[120px]'>{employee.lastName}</td>
                 <td className=' table-data p-2 min-w-[150px]'>{employee.position}</td>
                 <td className=' table-data p-2 min-w-[150px]'>{employee.username}</td>
                 <td className=' h-[70px] flex items-center justify-center gap-2'>
                   <button type='button' className='table-btn cursor-pointer w-40px bg-blue-400 hover:bg-green-500 text-sm p-[5px] pr-[7px] pl-[7px] rounded-sm'>Show</button>
                   <button type='button' className='table-btn cursor-pointer w-40px bg-yellow-400 hover:bg-yellow-500 text-sm p-[5px] pr-[7px] pl-[7px] rounded-sm'>Edit</button>
                   <button type='button' className='table-btn cursor-pointer w-40px bg-red-400 hover:bg-red-500 hover:text-white text-sm p-[5px] pr-[7px] pl-[7px] rounded-sm'>Delete</button>
                 </td>
               </tr>
             )
           })
          }
         </tbody>
      </table>
  </div>
  )
}

export default EmployeesTable
