import { Button, Input } from "@material-tailwind/react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const handleOnGoogleLoginClick = () => {
    navigate({ to: "/overview" });
  };

  return (
    <div className="flex h-full justify-center items-center px-3 flex-col">
      <div className="flex flex-col bg-secondary-bg-color w-11/12 p-6 rounded-2xl">
        <form className="flex flex-col gap-y-2">
          <h2 className="text-3xl font-bold mb-3">Sign in</h2>
          <Input label="Email" color="white" />
          <Input label="Password" color="white" />
          <Link to="/register" className="text-xs ml-1 underline text-blue-500">
            Forget password?
          </Link>
          <Button className="mt-3">Log-in</Button>
        </form>
        <span className="text-center my-2">or</span>
        <Button
          className="flex items-center justify-center gap-3"
          onClick={handleOnGoogleLoginClick}
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          <span>Continue with Google</span>
        </Button>
        <p className="text-xs text-center mt-6">
          Don't have an account?
          <Link to="/register" className="ml-1 underline text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
