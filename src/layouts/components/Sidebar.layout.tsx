
import { faFutbol } from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button/Button"
import { faBaseball, faBasketball, faGamepad, faGolfBall, faTableTennis, faVolleyball } from "@fortawesome/free-solid-svg-icons";

const icon = [
     {    
          id:1,
          icon: faFutbol,
          to: '/'
     },
     {    
          id:2,
          icon: faBasketball,
          to:'basketball'
     },
     {    
          id:3,
          icon: faVolleyball,
          to:'volleyball'
     },
     {    
          id:4,
          icon: faBaseball,
          to:'baseball'
     },
     {    
          id:5,
          icon: faTableTennis,
          to:'tabletennis'
     },
     {    
          id:6,
          icon: faGolfBall,
          to:'golfball'
     },
     {    
          id:7,
          icon: faGamepad,
          to:'gamepad'
     },
]

const Sidebar = function () {
    return ( 
       <div className="bg-[#ffffff] flex flex-col gap-3 p-3 w-[100px] h-[100vh] mt-4 rounded-2xl fixed top-[100px] left-5 z-10">
            {icon.map((item) =>(
               <Button
                    key={item.id}
                    to={item.to}
                    icon={item.icon}
               />
            ))}
       </div>
     );
}

export default Sidebar ;