import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function Home() {
  const session = await auth();
  return <main></main>;
}
