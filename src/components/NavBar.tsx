import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import SignInBox from "./SignInBox";

export default function NavBar() {
  return (
    <nav>
      <div className="container p-2">
        <div className="flex items-center justify-between">
          <Button className="rounded text-2xl" variant={"ghost"}>
            DevLog
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded w-32 text-lg font-normal">
                Sign In
              </Button>
            </DialogTrigger>
            <SignInBox />
          </Dialog>
        </div>
      </div>
      <Separator />
    </nav>
  );
}
