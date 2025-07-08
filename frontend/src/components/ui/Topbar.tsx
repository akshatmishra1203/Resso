import { Link } from "react-router-dom";
import { LayoutDashboardIcon, Music, Headphones } from "lucide-react";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
    const isAdmin = false;
    
    return (
        <div className="flex items-center justify-between px-6 py-4 sticky top-0 
                       bg-gradient-to-r from-purple-900/90 via-slate-900/90 to-indigo-900/90 
                       backdrop-blur-xl border-b border-white/10 z-50
                       shadow-lg shadow-purple-500/10">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 group">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 
                                  rounded-full blur-sm opacity-75 group-hover:opacity-100 
                                  transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 
                                  p-2 rounded-full">
                        <Music className="size-5 text-white" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
                                   bg-clip-text text-transparent">
                        MusicMp3
                    </span>
                    <span className="text-xs text-gray-400 -mt-1">
                        Your Music Universe
                    </span>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="flex items-center gap-6">
                {/* Admin Dashboard Link */}
                {isAdmin && (
                    <Link 
                        to="/admin"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg
                                 bg-gradient-to-r from-emerald-600/20 to-teal-600/20
                                 border border-emerald-500/30 text-emerald-400
                                 hover:from-emerald-600/30 hover:to-teal-600/30
                                 hover:border-emerald-500/50 hover:text-emerald-300
                                 transition-all duration-300 hover:shadow-lg 
                                 hover:shadow-emerald-500/20 group"
                    >
                        <LayoutDashboardIcon className="size-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Admin Dashboard</span>
                    </Link>
                )}

                {/* User Authentication */}
                <div className="flex items-center">
                    <SignedIn>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Headphones className="size-4" />
                                <span className="text-sm">Listening</span>
                            </div>
                            <SignOutButton>
                                <button className="px-4 py-2 rounded-lg
                                               bg-gradient-to-r from-red-600/20 to-pink-600/20
                                               border border-red-500/30 text-red-400
                                               hover:from-red-600/30 hover:to-pink-600/30
                                               hover:border-red-500/50 hover:text-red-300
                                               transition-all duration-300 hover:shadow-lg 
                                               hover:shadow-red-500/20 font-medium">
                                    Sign Out
                                </button>
                            </SignOutButton>
                        </div>
                    </SignedIn>
                    
                    <SignedOut>
                        <div className="transform hover:scale-105 transition-transform duration-200">
                            <SignInOAuthButtons />
                        </div>
                    </SignedOut>
                </div>
            </div>
        </div>
    );
};

export default Topbar;