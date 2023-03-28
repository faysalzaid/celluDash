import React from 'react';
import { useEffect } from 'react';

export default function EditTables() {
    useEffect(() => {
        return () => {
            // (A) INITIALIZE - DOUBLE CLICK TO EDIT CELL
            // window.addEventListener("DOMContentLoaded", () => {
            for (let cell of document.querySelectorAll(".editable td")) {
                cell.onclick = () => editable.edit(cell);
                // cell.ondblclick = () => console.log('hello');
            }
            // });

            var editable = {
                // (B) PROPERTIES
                selected: null,  // current selected cell
                value: "", // current selected cell value

                edit: cell => {
                    cell.ondblclick = "";

                    cell.contentEditable = true;
                    cell.focus();

                    cell.classList.add("edit");
                    editable.selected = cell;
                    editable.value = cell.innerHTML;

                    window.addEventListener("click", editable.close);
                    cell.onkeydown = evt => {
                        if (evt.key == "Enter" || evt.key == "Escape") {
                            editable.close(evt.key == "Enter" ? true : false);
                            return false;
                        }
                    };
                },

                close: evt => {
                    if (evt.target != editable.selected) {
                        if (evt === false) {
                            editable.selected.innerHTML = editable.value;
                        }

                        window.getSelection().removeAllRanges();
                        editable.selected.contentEditable = false;
                        window.removeEventListener("click", editable.close);
                        let cell = editable.selected;
                        cell.ondblclick = () => editable.edit(cell);
                        editable.selected.classList.remove("edit");
                        editable.selected = null;
                        editable.value = "";
                        if (evt !== false) {
                            console.log(cell.innerHTML);
                        }
                    }
                }
            };
        };
    });
    let employees = [
        { id: '13', img: 'https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2xpbSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Yunis', lastName: 'inshar', position: 'Frontend Developer', username: 'yunis.net'},
        { id: '14', img: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Ibrahim', lastName: 'Ismail', position: 'Backend Developer', username: 'Ibrahim.com'},
        { id: '15', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Khalid', lastName: 'Mohammed', position: 'Full Stack Developer', username: 'Khalid.info'},
        { id: '16', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', firstName: 'Suleiman', lastName: 'Shah', position: 'Ui/Ux Designer', username: 'suleiman.com'},
   
      ]
    return (
        <div className="widget-wrap w-full mx-4 mt-2">   
                <table className='editable w-full p-3 box-content bg-gray-100 rounded-t-lg overflow-hidden rounded-b-lg shadow-shadow4'>
                    <tbody className=''>
                        <tr className=' table-head text-left bg-slate-300 '>
                            <th className=' p-2 pl-5 pr-5 min-w-[30px] h-[50px]'>#</th>
                            <th>Person</th>
                            <th className=' p-2 min-w-[150px] h-[50px]'>First Name</th>
                            <th className=' p-2 min-w-[150px] h-[50px]'>Last Name</th>
                            <th className=' p-2 min-w-[200px] h-[50px]'>Position</th>
                            <th className=' p-2 min-w-[200px] h-[50px]'>Username</th>
                        </tr>
                        {
                            employees.map(employee => {
                                return (
                                    <tr key={employee.username} className=' table-row hover:bg-gray-200'>
                                        <td className='count p-2 pl-5 pr-5'></td>
                                        <td className=' min-w-[80px]'>
                                            <img className=' person-img w-[35px] h-[35px] m-auto rounded-full' src={employee.img} alt='sawir' />
                                        </td>
                                        <td className=' table-data-1 p-2 min-w-[120px]'>{employee.firstName}</td>
                                        <td className=' table-data-1 p-2 min-w-[120px]'>{employee.lastName}</td>
                                        <td className=' table-data p-2 min-w-[150px]'>{employee.position}</td>
                                        <td className=' table-data p-2 min-w-[150px]'>{employee.username}</td>
                                        
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
        </div>
    );
}