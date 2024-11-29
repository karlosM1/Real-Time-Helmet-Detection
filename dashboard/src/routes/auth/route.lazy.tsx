import { createLazyFileRoute } from "@tanstack/react-router";
import { SignInForm } from "@/features/auth/components/signin-form";

export const Route = createLazyFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <SignInForm />
    </div>
  );
}
