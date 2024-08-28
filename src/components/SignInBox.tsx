import { Label } from './ui/label';
import { Button } from './ui/button';
import { GrGoogle, GrGithub } from 'react-icons/gr';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Separator } from './ui/separator';

export default function SignInBox() {
  return (
    <DialogContent className='h-screen overflow-y-auto rounded md:h-auto'>
      <div className='mx-8 flex flex-col items-center justify-center'>
        <DialogHeader className=''>
          <DialogTitle className='text-center'>Sign In</DialogTitle>
          <DialogDescription className='text-center'>
            You can sign in with your github or google account.
          </DialogDescription>
        </DialogHeader>

        <div className='mt-8 flex w-full flex-col items-center justify-center gap-4'>
          <Button variant={'outline'} className='w-full rounded'>
            <GrGoogle className='mr-2 h-4 w-4' /> Sign In with Google
          </Button>

          <Button variant={'outline'} className='w-full rounded'>
            <GrGithub className='mr-2 h-4 w-4' /> Sign In with Github
          </Button>

          <Separator />

          <DialogDescription className='text-center'>
            By Siginingyou agree to our <a href='#'>Terms of Service</a> and{' '}
            <a href='#'>Privacy Policy</a>
          </DialogDescription>
        </div>
      </div>
    </DialogContent>
  );
}
