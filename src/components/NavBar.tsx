import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import SignInBox from './SignInBox';
import { auth } from '@/auth';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import ProfileBar from './ProfileBar';
import { getIntialOfName } from '@/lib/utils';

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
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage src={session?.user?.image!} alt='@shadcn' />
                  <AvatarFallback>
                    {getIntialOfName(session.user?.name!)}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <ProfileBar name={session.user?.name!} />
            </Popover>
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
