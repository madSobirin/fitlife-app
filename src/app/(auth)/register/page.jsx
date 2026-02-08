"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SocialButton from "@/components/ui/SocialButton";
import AuthLayout from "@/components/auth/AuthLayout"; // Import layout tadi
import { ArrowRight } from "lucide-react";

// Google Icon didefinisikan di sini atau import external
const GoogleIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    ></path>
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    ></path>
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    ></path>
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    ></path>
  </svg>
);

export default function Register() {
  return (
    <AuthLayout
      title="Unlock Your Potential"
      subtitle="Create your profile to access elite tracking and coaching."
      alternativeAuth={{
        text: "Already a member?",
        linkText: "Sign In",
        href: "/login",
      }}
    >
      <form className="space-y-5">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          name="name"
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          name="email"
        />
        <Input
          label="Password"
          isPassword
          placeholder="Create a secure password"
          name="password"
        />

        {/* Checkbox Terms (Khusus Register) */}
        <div className="pt-2">
          <label className="flex items-start gap-3 group cursor-pointer">
            <input
              type="checkbox"
              className="custom-checkbox mt-1 h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 bg-transparent checked:bg-primary checked:border-primary focus:ring-0 transition-all"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              I agree to the{" "}
              <a href="#" className="font-semibold underline">
                Terms & Conditions
              </a>
              .
            </span>
          </label>
        </div>

        <Button className="w-full h-12 flex items-center justify-center gap-2">
          <span className="font-bold">Create Account</span>
          <ArrowRight className="w-5 h-5" />
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background-light dark:bg-background-dark px-4 text-gray-500 font-medium">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <SocialButton label="Google" icon={<GoogleIcon />} />
        </div>
      </form>
    </AuthLayout>
  );
}
