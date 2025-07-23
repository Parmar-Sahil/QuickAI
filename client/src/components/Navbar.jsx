import React from 'react'
import {assets} from '../assets/assets.js'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate();

    const {user} = useUser()
    const {openSignIn} = useClerk()

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-200 xl:px-32'>
        <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' />

        {
          user ?
          <div className='flex justify-between'>
            <UserButton /> <p className='py-2 px-2 text-slate-900'>{user.fullName}</p>
          </div>
         

          : (   
                <button onClick={()=> openSignIn()} className='flex item-centre gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-5'></ArrowRight></button>
            )
        }
    </div>
  )
}

export default Navbar