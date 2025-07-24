
import { faMessage,  faBell, faSun} from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button/Button";
import IconMenu from './../../components/IconMenu/IconMenu';




const Header = function () {

    return ( 
       <div className='h-[100px] bg-[#ffffff] rounded-2xl flex items-center justify-around fixed top-0 left-0 right-0 z-10 shadow-neutral-300 shadow-lg'>
            <div className="flex items-center gap-2">
              <a href='/'>
                <img 
                  className="h-[50px] w-[140px] "
                  src="http://live-sportz.com/65e928e71eeb47c7ce171a70ebc33480.png"
                />
              </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Button to='/' title="Sport" />
              <Button to="liveplay" title="Live Play"/>
              <Button to='news' title="News"/>
              <Button to ='statistics'title="Statistics"/>
              <Button to ='transfer'title="Transfer"/>
              <Button to ='competition'title="Competition"/>
            </div>
        <div className="flex items-center gap-4">
        <IconMenu icon={faSun}/>
        <IconMenu icon={faMessage} />
        <IconMenu icon={faBell}/>
        
        <div className="pl-2 border-l-2 flex items-center gap-2 text-[#000] font-semibold">
          <img 
          className="rounded-full w-[45px] h-[45px]" 
          src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/476514354_1676042533001474_8240066952359594913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3fc2hc7q86cQ7kNvwHqHS7Q&_nc_oc=AdniApd5M2kzSo4QEIhm1QYIa4cg5xtNu_Z65KDx0kuycLg0_ElaM7HX1H1p9SAFdcs&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=LmuUyxxm7b07l0U30o7Nyg&oh=00_AfRqlksPItGGr_Ey3nZ_0yOSbsSedz8PQPhJfNghga8FSg&oe=68859850" alt="" />
          <div>
            <p>Phú Quốc</p>
            <p className="font-extralight text-sm text-[#8f8f8f]">puoc428@gmail.com</p>
          </div>
          </div>
        </div>
  </div>
     );
}

export default Header;