import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem} from "@heroui/navbar";
import {Button} from '@heroui/button'
import {Avatar} from "@heroui/avatar";
import { Dropdown, DropdownTrigger,DropdownMenu, DropdownItem } from'@heroui/dropdown'
export const NotifyIcon = ({size =24, strokeWidth = 1.5,width,height,...props}) =>{
  return (
  <svg 
  fill="#E21C34"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg" 
  height={height || size}
  width={width || size}
  {...props}
  viewBox="0 0 24 24">
    <path 
    d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4.4648438 17.15625 L 4.4628906 17.15625 A 1 1 0 0 0 4 18 A 1 1 0 0 0 5 19 L 12 19 L 19 19 A 1 1 0 0 0 20 18 A 1 1 0 0 0 19.537109 17.15625 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 10 20 C 10 21.1 10.9 22 12 22 C 13.1 22 14 21.1 14 20 L 10 20 z">
    </path>
</svg>
)
}
export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}) => {
  return (
    <svg
      color="#E21C34"
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
const Header = function () {
    return ( 
  <Navbar
      isBordered={false}
      className="py-6 shadow-none"
    >
      <NavbarBrand>
        <p className="font-semibold text-[18px] text-[#E21C34]">
          Welcome back, Rubén <span className="ml-1">👋</span>
        </p>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <Button isIconOnly variant="light" radius="full">
            <SearchIcon/>
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button isIconOnly variant="light" radius="full">
            <NotifyIcon/>
          </Button>
        </NavbarItem>
          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <NavbarItem className="flex items-center gap-2">
                <Avatar
                  src="https://external-preview.redd.it/2-r%C3%BAben-amorim-is-the-first-manchester-united-manager-to-be-v0-yZd5GwrT6VqxdLrj1BxST8PmuaMPm0ODUfJZdKKO7Zg.jpg?width=1080&crop=smart&auto=webp&s=783b38c98bd57b55183676e08831b9c26a4ddc0a"
                  name="Andrea Pirlo"
                  size="sm"
                />
                <span className="font-medium  text-[#000]">Rubén Amorim</span>
              </NavbarItem>
              </DropdownTrigger>
              <DropdownMenu 
                className="rounded-xl shadow-xl min-w-[220px] p-2 bg-white"
                aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="gap-2 h-14">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">pirlo@example.com</p>
                </DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" key="settings">My Settings</DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" key="team_settings">Team Settings</DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" key="analytics">Analytics</DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" key="system">System</DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" key="configurations">Configurations</DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100" key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-red-100" key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
            </NavbarContent>
        </Navbar>
  )
}

export default Header;
  