import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import SignInBox from './SignInBox';
import { auth } from '@/auth';

export default async function NavBar() {
  const session = await auth();

  return (
    <nav>
      <div className='container p-2'>
        <div className='flex items-center justify-between'>
          <Button className='rounded text-2xl' variant={'ghost'}>
            DevLog
          </Button>

          {session ? (
            <Button className='rounded text-lg font-normal' variant={'ghost'}>
              {session?.user?.name}
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className='w-32 rounded text-lg font-normal'>
                  Sign In
                </Button>
              </DialogTrigger>
              <SignInBox />
            </Dialog>
          )}
        </div>
      </div>
      <Separator />
    </nav>
  );
}
