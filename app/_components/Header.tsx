
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const menuOptions=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact us',
        path:'/contact-us'
    }
]
function Header(){
    return (
        <div className='flex justify-between items-center p-4'>
            {/*LOGO  */}
            <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt={'logo'} width={30} height={30}/>
            <h2 className='font-bold text-2xl'>AI TRIP PLANNER</h2>
            </div>
            {/*MENU OPTIONS */}
            <div className='flex gap-5 items-center'>
                {menuOptions.map((menu,index)=>(
                    <Link href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
                    </Link>
                ))}
            </div>
            {/* GET STARTED BUTTON */}
            <Button>GET STARTED</Button>
        </div>
    )
}
export default Header