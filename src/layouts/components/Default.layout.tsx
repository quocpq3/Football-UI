import { Outlet } from 'react-router-dom';
import Header from "./Header.layout";
import Sidebar from "./Sidebar.layout";
// import Footer from './Footer.layout';

const DefaultLayoutDashBoard = function () {
    return (
        <div className='flex flex-col bg-[#f4f4f4] h-[3000px] p-4'>
            <Header/>
            <div className='flex'>
                <Sidebar/>
            <main className='mt-[105px] ml-[120px] w-full'>
                <Outlet/>
            </main>
            </div>
            {/* <Footer/> */}
        </div>
     );
}

export default DefaultLayoutDashBoard ;