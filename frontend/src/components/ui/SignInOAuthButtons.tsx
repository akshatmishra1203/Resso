import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const SignInOAuthButtons = () => {
    const { signIn, isLoaded } = useSignIn();
    const [isSigningIn, setIsSigningIn] = useState(false);

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center p-4">
                <Loader2 className="size-5 animate-spin text-purple-400" />
            </div>
        );
    }

    const signInWithGoogle = async () => {
        setIsSigningIn(true);
        try {
            await signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/auth-callback",
            });
        } catch (error) {
            console.error("Sign in error:", error);
            setIsSigningIn(false);
        }
    };

    return (
        <div className="flex flex-col gap-3">
            {/* Google Sign In Button */}
            <Button
                onClick={signInWithGoogle}
                disabled={isSigningIn}
                className="group relative overflow-hidden px-6 py-3 h-12
                         bg-gradient-to-r from-blue-600/20 to-purple-600/20
                         border border-blue-500/30 text-white font-medium
                         hover:from-blue-600/30 hover:to-purple-600/30
                         hover:border-blue-500/50 hover:shadow-lg 
                         hover:shadow-blue-500/20 transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed
                         disabled:hover:shadow-none"
            >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                              translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center gap-3">
                    {isSigningIn ? (
                        <Loader2 className="size-5 animate-spin" />
                    ) : (
                        <svg className="size-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                    )}
                    <span className="text-sm font-medium">
                        {isSigningIn ? "Signing in..." : "Continue with Google"}
                    </span>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-1000 bg-gradient-to-r 
                              from-transparent via-white/10 to-transparent skew-x-12"></div>
            </Button>

            {/* Alternative Options Hint */}
            <div className="text-center">
                <p className="text-xs text-gray-400">
                    Secure sign-in powered by Clerk
                </p>
            </div>
        </div>
    );
};

export default SignInOAuthButtons;