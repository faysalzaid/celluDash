import React from 'react'
import two from '../02.jpg'
import three from '../03.jpg'
import four from '../04.jpg'
import { MdEdit } from 'react-icons/md'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { ImEye } from 'react-icons/im'

let managers = [
  { id: '13', img: four, firstName: 'Mahammed', lastName: 'inshar', position: 'Director', username: 'yunis.net'},
  { id: '14', img: two, firstName: 'Sayid', lastName: 'Ismail', position: 'Deputy Director', username: 'Ibrahim.com'},
  { id: '15', img: three, firstName: 'yuusuf', lastName: 'Mohammed', position: 'Project Manager', username: 'Khalid.info'}
]

  
const zoomImage = () => {
  let zoomPopup = document.querySelector('.zoom-popup')
  zoomPopup.style.display = 'block'
}

function ManagersTable() {
  return (
    <div className='overflow-scroll p-8 flex mt-[20px] pb-24'>
    <table className=' w-full p-3 box-content bg-gray-100 rounded-t-lg overflow-hidden rounded-b-lg shadow-shadow4'>
      <tbody>
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
         managers.map(manager => {
           return(
             <tr key={manager.username} className=' table-row hover:bg-gray-200'>
               <td className='count p-2 pl-5 pr-5'></td>
               <td className=' min-w-[80px] '>
               <img className=' person-img w-[35px] h-[35px] m-auto rounded-full' src={manager.img} alt='sawir' onClick={zoomImage} />
               </td>
               <td className=' table-data-1 p-2 min-w-[120px]'>{manager.firstName}</td>
               <td className=' table-data-1 p-2 min-w-[120px]'>{manager.lastName}</td>
               <td className=' table-data p-2 min-w-[150px]'>{manager.position}</td>
               <td className=' table-data p-2 min-w-[150px]'>{manager.username}</td>
               <td className=' h-[50px] flex items-center justify-start gap-2'>
                  <button type='button' className='table-btn cursor-pointer flex items-center justify-center box-content bg-blue-400 hover:bg-green-500 p-[7px] pr-[10px] pl-[10px] rounded-sm'><ImEye /></button>
                  <button type='button' className='table-btn cursor-pointer w-40px bg-yellow-400 hover:bg-yellow-500 p-[7px] pr-[10px] pl-[10px] rounded-sm'><MdEdit /></button>
                  <button type='button' className='table-btn cursor-pointer w-40px bg-red-400 hover:bg-red-500 hover:text-white p-[7px] pr-[10px] pl-[10px] rounded-sm'><BsFillTrash3Fill /></button>
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

export default ManagersTable
