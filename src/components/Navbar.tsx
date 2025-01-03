import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// type Props = {}
const Navbar = async() => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center text-black'>
        <Link href='/'>
          <Image src='/img/logo.png' alt='logo' width={100} height={40} />
        </Link>
        <div className='flex items-center gap-6'>
          {
            session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>
                <form action={ async ()=>{
                  "use server";
                  await signOut({redirectTo: '/'});
                }}>
                  <button type='submit'>
                    Logout
                  </button>
                </form>
                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <>
                <form action={ async () =>{
                  "use server";
                  await signIn('github');
                }}>
                  <button type='submit'>Login</button>
                </form>
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar