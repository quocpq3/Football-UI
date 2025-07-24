import { createBrowserRouter } from 'react-router-dom'
import Sport from '../views/Sport/Sport';
import DefaultLayoutDashBoard from '../layouts/components/Default.layout';
import LivePlay from '../views/Live Play/LivePlay';
import News from '../views/News/News';
import Statistics from '../views/Statistics/Statistics';
import Transfer from '../views/Transfer/Transfer';
import Competition from '../views/Competition/Competition';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayoutDashBoard/>,
        children :[
        {
            index: true, 
            element: <Sport/>
        },
        {
            path: 'liveplay',
            element: <LivePlay/>,
        },
        {
            path: 'news',
            element:<News/>,
        },
        {
            path: 'statistics',
         element:   <Statistics/>,
        },
        {
            path: 'transfer',
         element:   <Transfer/>,
        },
        {
            path: 'competition',
         element:   <Competition/>,
        },
    ]
    },    
    
   
])


export default routes;  