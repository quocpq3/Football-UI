import { createBrowserRouter } from 'react-router-dom'
import DefaultLayoutDashBoard from '../layouts/components/Default.layout';
import DashBoard from '../views/Dashboard/Dashboard';
import Squad from '../views/Squad/Squad';
import Message from './../views/Message/Message';
import Calendar  from './../views/Calendar/Calendar';
import Settings from '../views/Settings/Settings';
import Transfer from '../views/Transfer/Transfer';
import YouthAcademy from '../views/YouthAcademy/YouthAcademy';

// const routesChildren = [
//     { 
//         path: 'sport',
//         element:<Sport/>
//     },            
//     {   
//         path: 'liveplay', 
//         element:<LivePlay/>  
//     },
//     {   
//         path: 'news', 
//         element:<News/>
//     },
//     { 
//         path: 'statistics', 
//         element:<Statistics/> 
//     },
//     { 
//         path: 'transfer', 
//         element: <Transfer/>
//     },
//     { 
//         path: 'competition', 
//         element: <Competition/>
//     }
// ]
const routes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayoutDashBoard/>,
        children :[
        {     
            index:'true',
            element: <DashBoard/>,
           
        },
        {
            path: 'squad',
            element: <Squad/>,
            
            
        },
        {
            path: 'message',
            element: <Message/>,
           
        },
        {
            path: 'calendar',
            element:   <Calendar/>,
           
        },
        {
            path: 'settings',
            element: <Settings/>,
            
        },
        
        {
            path: 'transfer',
            element: <Transfer/>,
            
        },
        {
            path: 'youthacademy',
            element: <YouthAcademy/>,
          
        },
    ]
    },    
    
   
])


export default routes;  
