import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from './../Button/Button';
const League = function () {

  const leaguesItems = [
    { name: 'La Liga',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs46xr2bx66JDnUyLcqBn6f_bl-byxMjpEzA&s'
     },
    { name: 'Bundesliga',
      logo:''
     },
    { name: 'Champions League',
      logo:''
     },
    { name: 'Ligue 1' ,
      logo:'',
    },
    { name: 'Premier League',
      logo:''
     },
    { name: 'Serie A',
      logo:''
     },
    { name: 'MLS',
      logo:''
     },
    { name: 'Liga MX',
      logo:''
     },
  ]

    return ( 
    <div className="h-screen w-full ">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-xl  font-semibold text-[#000] group-data-hover:text-[#4462ee]">
              Leagues
            </span>
            <ChevronDownIcon className="size-5 fill-[#000] group-data-hover:fill-[#4462ee] group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-[12px] text-black/50">
            <ul className="flex flex-col gap-2">
              {leaguesItems.map((item, index) => (
                <li key={index} className="w-full ">
                  <Button 
                  leagues 
                  logoLegues={item.logo}
                  title={item.name} 
                  
                  />
                  
                </li>
              ))}
            </ul>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-xl  font-semibold text-[#000] group-data-hover:text-[#4462ee]">
              Countries
            </span>
            <ChevronDownIcon className="size-5 fill-[#000] group-data-hover:fill-[#4462ee] group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
            <ul>
              <li>Argentina</li>
              <li>France</li>
              <li>Brazil</li>
            </ul>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
     );
}

export default League ;