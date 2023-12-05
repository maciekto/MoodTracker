import { redirect } from 'next/navigation';

import { getServerAuthSession } from '@/server/auth';

export default async function Home() {
  // const hello = await api.post.hello.query({ text: 'from tRPC' });
  const session = await getServerAuthSession();
  if(session) redirect('/dashboard');

  return (
    <Home/>
  );
}
