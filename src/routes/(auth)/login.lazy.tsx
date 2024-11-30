import { Button, Input } from "@material-tailwind/react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

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
      <div className="flex flex-col bg-secondary-bg-color p-6 rounded-lg">
        <form className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold mb-2">Log in</h2>
          <Input label="Email" color="white" />
          <Input label="Password" color="white" />
          <Button className="mt-2">Log-in</Button>
        </form>
        <span className="text-center my-2">or</span>
        <Button
          className="flex items-center gap-3"
          onClick={handleOnGoogleLoginClick}
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          <span>Continue with Google</span>
        </Button>
      </div>
    </div>
  );
}
