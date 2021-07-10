import Image from "next/image"
import HeaderItem from '../components/HeaderItem'

import { HomeIcon } from '@heroicons/react/outline'
function Header() {
    return (
        <header className="">
           <h1>This is the header</h1>
           <HeaderItem title="Home" Icon={HomeIcon} />
           
            <Image 
             className="object-contain"
            src="https://links.papareact.com/ua6" width={200} height={100} />  
            
        </header>
    )
}

export default Header

