"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { TfiSearch } from 'react-icons/tfi'
import { FiSearch } from 'react-icons/fi'
import { BsBell, BsBellFill } from 'react-icons/bs'
import { HiEnvelope,HiOutlineEnvelope } from 'react-icons/hi2'
import { HiClipboardList, HiOutlineClipboardList } from 'react-icons/hi'
import { BsPeopleFill, BsPeople} from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import { useAutoAnimate} from '@formkit/auto-animate/react'


type Props = {}
interface SideNavItemType{
    icon:{
        icon?: React.ReactNode;
        fillIcon:React.ReactNode
    };
    label:string;
    href: string
}

const sideBarItems: SideNavItemType[]= [
    {
        href:'/',
        label:'Home',
        icon:{
            icon:<GoHome/>,
            fillIcon:<GoHomeFill/>
        }
    },
    {
        href:'/explore',
        label:'Explore',
        icon:{
            icon:<TfiSearch/>,
            fillIcon:<FiSearch/>
        }
    },
    {
        href:'/notifications',
        label:'Notifications',
        icon:{
            icon:<BsBell/>,
            fillIcon:<BsBellFill/>
        }
    },
    {
        href:'/messages',
        label:'Messages',
        icon:{
            icon:<HiOutlineEnvelope/>,
            fillIcon:<HiEnvelope/>
        }
    },
    {
        href:'/lists',
        label:'Lists',
        icon:{
            icon:<HiOutlineClipboardList/>,
            fillIcon:<HiClipboardList/>
        }
    },
    {
        href:'/communities',
        label:'Communities',
        icon:{
            icon:<BsPeople/>,
            fillIcon:<BsPeopleFill/>
        }
    },
]

function Sidebar({}: Props) {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className={cn('min-h-screen max-h-screen overflow-y-auto w-fit md:pr-8 pr-3 pt-2 flex flex-col gap-3 border-r-[1px] pl-[50px]',isSidebarOpen && 'md:w-[300px]')}>
       <HoverContainer>
       <Link href={'/'}>
       <FaXTwitter className='text-3xl'/>
       </Link> 
       </HoverContainer>

        {sideBarItems.map((d,i)=>(
                <HoverContainer key={i}>
                <SideNavItem icon={d.icon} label={d.label} href={d.href}  isSidebarOpen={isSidebarOpen}/>
                </HoverContainer>
        ))}
   
        {/**Toggle Button */}
        <section className={cn('flex w-full justify-end',!isSidebarOpen && 'justify-start')}>
        <HoverContainer>
        <RxDoubleArrowLeft onClick={()=> setSidebarOpen(!isSidebarOpen)} className={cn('text-gray-400 transition-all text-3xl',!isSidebarOpen && 'rotate-180')}/>
        </HoverContainer>
        </section>
       
  
 
    </div>
  )
}

export default Sidebar


function HoverContainer({
    children,
    className
}: {
    children: React.ReactNode;
    className?:string;
}){
    return(
        <div className='p-3 transition-all rounded-full cursor-pointer hover:bg-gray-200 w-fit dark:bg-zinc-900'>{children}</div>
    )
}

function SideNavItem({href,isSidebarOpen,icon,label}:SideNavItemType & {isSidebarOpen:boolean}){
    const [animationParent]  = useAutoAnimate()
    const pathname = usePathname();
    const isActivePage = pathname == href;
    return(
        <Link className='flex gap-2 cursor-pointer items-center' href={href} ref={animationParent}>
            <div className='w-[35px] h-[35px] text-2xl'>
            {/**<AiFillHome/> */}
            {isActivePage ? icon?.fillIcon: icon?.icon}
            </div>
            {isSidebarOpen && (
                <p className={cn('text-xl -mt-1.5 hidden md:block pr-4 transition-all',isActivePage && 'font-semibold')}>{label}</p>
            )}
            
        </Link>
    )
}