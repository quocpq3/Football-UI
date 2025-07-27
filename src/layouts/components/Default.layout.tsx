import { Outlet } from 'react-router-dom';
import Header from "./Header.layout";
import SidebarNavication from "./Sidebar.layout";
// import Footer from './Footer.layout';

const DefaultLayoutDashBoard = function () {
    return (
        <div className='flex flex-col bg-[#f4f4f4] h-[3000px] p-4'>
            <Header/>
            <div className='flex mt-[100px]'>
                <SidebarNavication/>
            <main className='w-full' >
                <Outlet/>
            </main>
            </div>
            {/* <Footer/> */}
        </div>
     );
}

export default DefaultLayoutDashBoard ;