import router from 'next/router';
import { signOut } from 'next-auth/react';



export default function SignOutButton() {

  const handleSignOut = async () => {
    await signOut();
    router.push('/')
  }

  return (
    <button onClick={() => handleSignOut()}className='text-white absolute top-1/2 rounded-full bg-neutral-800 px-10 py-3 font-semibold no-underline hover:scale-105 duration-300 transition-transform ease-in-out z-30'>
            Sign out
    </button>

  )
}
