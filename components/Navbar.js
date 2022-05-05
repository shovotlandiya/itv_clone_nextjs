import React,{useState} from "react";
import Link from "next/link";
import { SideBar } from "./Sidebar";
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Navbar() {
  const [sidebar,setSidebar]=useState(false)
  const showSidebar=()=>setSidebar(!sidebar)
  return (
    <div className="bg-slate-200 fixed w-full">
      <nav className=" container mx-auto px-4 flex justify-between items-center py-4">
      <div className={sidebar ? 'side-menu active' :'side-menu'}>
        <CloseIcon className="closeIcon" onClick={showSidebar}/>
        
            <ul className='text-white text-lg font-medium py-8'>
              {
                SideBar.map((item,index)=>{
                  return(
                    <li className='py-4' key={index}>
                      <Link href={item.path}>
                        <a onClick={showSidebar} >{item.title}</a>
                      </Link>

                    </li>
                  )
                })
              }
            </ul>
          </div>
        <div >
         
          
            <a className="bg-white p-2 rounded-lg" onClick={showSidebar}>
            <MenuIcon className="text-sky-900 text-lg w-8"  />
            </a>
       
          
        </div>

        <ul className="flex items-center text-sky-900 text-lg font-medium">
          <li className="px-2">
            <Link href="/">
              <a className="bg-white p-2 rounded-lg">
              <HomeIcon/>
              </a>
            </Link>
          </li>
          
          <li className="px-2 ">
            <Link href="/register">
              <a className="bg-white p-2 rounded-lg"><NotificationsActiveIcon/></a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
