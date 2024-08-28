import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type='submit'>Signout </Button>
      </form>
    </main>
  );
}
