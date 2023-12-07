import router from 'next/router';
import { signOut } from 'next-auth/react';



export default function SignOutButton() {

  const handleSignOut = async () => {
    await signOut();
    router.push('/')
  }

  return (
    <button onClick={() => handleSignOut()}>
      Sign Out
    </button>
  )
}
