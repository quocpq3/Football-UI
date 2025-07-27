import { createBrowserRouter } from 'react-router-dom'
// import Sport from '../views/components/Sport/Sport';
import DefaultLayoutDashBoard from '../layouts/components/Default.layout';
// import LivePlay from '../views/components/Live Play/LivePlay';
// import News from '../views/components/News/News';
// import Statistics from '../views/components/Statistics/Statistics';
// import Transfer from '../views/components/Transfer/Transfer';
// import Competition from '../views/components/Competition/Competition';
import Laliga from '../views/Laliga/Laliga';
import BundesLiga from './../views/Bundesliga/Bundesliga';
import ChampionsLeague from '../views/ChampionsLeague/ChampionsLeague';
import LigueOne from '../views/Ligue1/LigueOne';
import PremierLeague from '../views/PremierLeague/PremierLeague';
import Seria from '../views/Seria/Seria';
import Mls from '../views/MLS/Mls';
import LigaMX from '../views/LigaMX/LigaMX';

// const routesChildren = [
//     {

//     }
// ]
const routes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayoutDashBoard/>,
        children :[
        {
            index: true,        
            element: <Laliga/>,
        },
        {
            path: 'bundesliga',
            element: <BundesLiga/>,
        },
        {
            path: 'championsleague',
            element: <ChampionsLeague/> 
        },
        {
            path: 'ligueone',
         element:   <LigueOne/> 
        },
        {
            path: 'premierleague',
         element: <PremierLeague/>
        },
        
        {
            path: 'seria',
         element: <Seria/>
        },
        {
            path: 'mls',
         element: <Mls/>
        },
        {
            path: 'ligamx',
         element: <LigaMX/>
        },
    ]
    },    
    
   
])


export default routes;  
