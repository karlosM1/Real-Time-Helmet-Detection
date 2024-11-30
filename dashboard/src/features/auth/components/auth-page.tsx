import { AuthCards } from "./auth-cards";
import { SignInForm } from "./signin-form";

export function AuthPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthCards />
      <SignInForm />
    </div>
  );
}
