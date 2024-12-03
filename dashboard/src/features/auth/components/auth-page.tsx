import { AuthCards } from "./auth-cards";
import { AuthForm } from "./signin-form";

export function AuthPage() {
  return (
    <div className="flex justify-between items-center mx-20 w-full">
      <div>
        <AuthCards />
      </div>
      <div>
        <AuthForm />
      </div>
    </div>
  );
}
