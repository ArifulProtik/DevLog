import { signOut } from '@/auth';
import { Button } from './ui/button';
import { PopoverContent } from './ui/popover';
import { Separator } from './ui/separator';

type ProfileBarProps = {
  name: string | undefined;
  username?: string | '';
};

export default function ProfileBar({ name }: ProfileBarProps) {
  return (
    <PopoverContent className='w-52 rounded'>
      <div className='grid gap-4'>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>{name}</h4>
        </div>
        <Separator />
        <div className='space-y-1'>
          <p className='text-sm text-gray-500'>Hello</p>
        </div>
        <Separator />

        <div className=''>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button
              type='submit'
              className='m-0 p-0 text-sm text-destructive outline-none'
            >
              Signout
            </button>
          </form>
        </div>
      </div>
    </PopoverContent>
  );
}
