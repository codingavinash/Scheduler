'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <nav className='mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2'>
        <Link href={'/'} className='flex items-center'>
            <h1 className='text-7xl font-bold italic text-blue-900'>Scheduler</h1>
        </Link>

        <div  className='flex items-center gap-4'>
            <Link href={'/events?create=true'}>
                <Button className='flex items-center gap-2' ><PenBox size={18}/> Create Event</Button>
            </Link>
            <SignedOut>
              <SignInButton forceRedirectUrl='/dashboard'>
            <Button variant="outline" >Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Header