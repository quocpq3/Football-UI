
import {Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from '../../../@/components/ui/sidebar'
import { Calendar, Home, User, Settings, MessageCircle, CreditCard, ChartNoAxesCombined
} from "lucide-react"
import Button from '../../components/Button/Button'
const SidebarNavication = function () {

  const items = [ 
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Squad",
    url: "squad",
    icon: User,
  },
  {
    title: "Message",
    url: "message",
    icon: MessageCircle,
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
]
  const items2 = [
  {
    title: "Transfer",
    url: "transfer",
    icon: CreditCard,
  },
  {
    title: "Youth academy",
    url: "youthacademy",
    icon: ChartNoAxesCombined,
  },
  ]

    return ( 
  <>   
      <Sidebar className='border-r-gray-300'>
          <SidebarHeader className='p-6 text-2xl '>CoahPro</SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
               
                <SidebarMenu className='flex flex-col items-center gap-2 '>
                  {items.map((item) =>(
                    <SidebarMenuItem
                    key={item.title}  
                    >
                     <SidebarMenuButton 
                        className='h-[50px]' 
                        asChild>
                        <Button
                        to={item.url}
                        title={item.title}
                        >
                          <item.icon/>
                        </Button>
                     </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
          
                </SidebarMenu>
              </SidebarGroup>
              <SidebarGroup>
                 <SidebarGroupLabel>
                  <span className='w-full border-t-1 border-t-gray-300'></span>
                 </SidebarGroupLabel>
                  <SidebarMenu className='flex flex-col items-center gap-2'>
                  {items2.map((item) =>(
                    <SidebarMenuItem
                    key={item.title}  
                    >
                     <SidebarMenuButton 
                        className='h-[50px]' 
                        asChild>
                        <Button
                        to={item.url}
                        title={item.title}
                        >
                          <item.icon/>
                        </Button>
                     </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
              
            </SidebarContent>
            
      </Sidebar>
  </>
  );
}

export default SidebarNavication ;