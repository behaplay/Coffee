import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Menu = () => {
    const { theme } = useContext(Test)

    return (
        <section className={`pt-28 open ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"}`}>
            <div className='flex items-center justify-center'>
                <img src="/src/image/Group 117.png" alt="" />
            </div>
            <div className='w-full h-[729px] bg-im bg-cover bg-no-repeat mt-32 flex justify-center items-center flex-col gap-8'>
                <h2 className='xio text-[55px]'>Roasted CoffeeFor You</h2>
                <p className='text-center text-[16px] w-[630px]'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent utquam quis quam venenatis fringilla. Morbi vestibulum id tellusmmodo mattis. Aliquam erat volutpat.</p>
                <Button variant='gradient' className='rounded-none'>Explore More</Button>
            </div>
        </section>
    )
}

export default Menu;