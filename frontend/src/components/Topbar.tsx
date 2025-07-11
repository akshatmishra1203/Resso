import { Link } from "react-router-dom";
import {LayoutDashboardIcon} from "lucide-react";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/clerk-react";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Topbar = () => {
    const {isAdmin} = useAuthStore();
    console.log({isAdmin})
    return (
        <div className="flex items-center justify-between p-4 sticky top-0
         bg-zinc-900/75 backdrop-blur-md z-10">
            <div className="flex gap-2 items-center">
                <img src="/Resso.png" className="size-10" alt="Resso Logo" />
                Resso
            </div>
            <div className="flex items-center gap-4">
                {isAdmin && (
                    <Link to={"/admin"} className={cn(buttonVariants({variant:"outline"}))}>
                        <LayoutDashboardIcon className="size-4 mr-2" />
                        Admin Dashboard
                    </Link>
                )}
                <SignedOut>
                    <SignInOAuthButtons />
                </SignedOut>

                <UserButton/>

            </div>
         </div>
    )
}
export default Topbar