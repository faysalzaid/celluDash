import React from 'react';
import { AiOutlineBorderlessTable, AiOutlineLineChart } from 'react-icons/ai';
import { CiViewList, CiLogin, CiHome } from 'react-icons/ci';
import { BsGrid3X3GapFill, BsFillChatDotsFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function QuickLinks() {

  const navigate = useNavigate();

  // =======================================
  // ====== Handle Active Links Start ======
  // =======================================
  const handleLinks = () => {
    let links = document.querySelectorAll('.link');
    links.forEach(link => {
      link.addEventListener('click', function () {
        links.forEach(li => li.classList.remove('active'));
        this.classList.add('active');
      });
    });
  };
  setTimeout(() => {
    handleLinks();
  }, 1000);

  // ======================================
  // =====   Navigate Between Start   =====
  // ======================================

  const navigateToHomePage = () => {
    navigate('/');
  };

  const navigateToTables = () => {
    navigate('./tables');
  };
  const navigateToGrid = () => {
    navigate('./grid');
  };
  const navigateToEditableTables = () => {
    navigate('./edit_tables');
  };

  const navigateToCharts = () => {
    navigate('./charts');
  };

  const navigateToForms = () => {
    navigate('./forms');
  };

  const navigateToMessages = () => {
    navigate('./messages');
  };

  const navigateToLogIn = () => {
    navigate('./auth');
  };
  const navigateToChat = () => {
    navigate('./chat');
  };


  return (
    <section className=' quick-links-wrapper fixed z-[2] top-[80px] w-[200px] sm:hidden lg:block  h-[calc(100vh-80px)] bg-white shadow-shadow3'>
      <ul className=' mt-[1px]'>
        <li className=' active link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToHomePage}>
          <CiHome className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Home</span>
        </li>

        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToTables}>
          <AiOutlineBorderlessTable className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Table</span>
        </li>
        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToGrid}>
          <BsGrid3X3GapFill className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Grid View</span>
        </li>
        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToEditableTables}>
          <AiOutlineBorderlessTable className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Editable Table</span>
        </li>

        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToCharts}>
          <AiOutlineLineChart className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Charts</span>
        </li>

        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToForms}>
          <CiViewList className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Forms</span>
        </li>
        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToChat}>
          <BsFillChatDotsFill className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Chat</span>
        </li>

        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToMessages}>
          <CiViewList className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Messages</span>
        </li>

        <li className=' link flex items-center relative p-6 pl-5 cursor-pointer' onClick={() => { handleLinks(); navigateToLogIn(); }}>
          <CiLogin className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Login Page</span>
        </li>
      </ul>
    </section>
  );
}

export default QuickLinks;
