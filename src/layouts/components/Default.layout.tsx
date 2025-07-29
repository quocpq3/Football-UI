import { Outlet } from 'react-router-dom';
import Header from "./Header.layout";
import SidebarNavication from "./Sidebar.layout";
import { SidebarProvider, SidebarTrigger } from '../../../@/components/ui/sidebar';
// import Footer from './Footer.layout';

const DefaultLayoutDashBoard = function () {

    //bg-gradient-to-r from-[#E21C34]/30 to-[#500B28]/30
    return (
        <div className='flex overflow-hidden h-[10000px] font-bold bg-gray-50'>
            <div className='flex'>
                <SidebarProvider >
                    <SidebarNavication/>
                    <SidebarTrigger/>
                </SidebarProvider>
            </div>
            <main className='flex flex-col flex-1 min-w-0'>
                <Header/>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </div>
     );
}

export default DefaultLayoutDashBoard ;