import { Button, Input } from "@material-tailwind/react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useApi } from "../../api";
import { OAuthProvider } from "appwrite";

export const Route = createLazyFileRoute("/(auth)/login")({
  component: RouteComponent,
});

export type LoginModel = {
  email: string;
  password: string;
};

function RouteComponent() {
  const navigate = useNavigate();
  const { account } = useApi();

  const { register, handleSubmit } = useForm<LoginModel>();

  const onSubmit: SubmitHandler<LoginModel> = async (data) => {
    const user = await account.createEmailPasswordSession(
      data.email,
      data.password
    );

    if (user) {
      navigate({ to: "/profile" });
    }
  };

  const handleOnGoogleLoginClick = async () => {
    await account.createOAuth2Session(
      OAuthProvider.Github,
      "http://localhost:5173/profile",
      "http://localhost:5173/profile"
    );
  };

  return (
    <div className="flex h-full justify-center items-center px-3 flex-col">
      <div className="flex flex-col bg-secondary-bg-color w-11/12 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold">Login</h2>
        <form
          className="flex flex-col gap-y-2 mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            color="white"
            {...register("email", { required: true })}
          />
          <Input
            label="Password"
            color="white"
            {...register("password", { required: true })}
          />
          <Link to="/register" className="text-xs ml-1 underline text-blue-500">
            Forget password?
          </Link>
          <Button
            type="submit"
            className="mt-3 normal-case bg-primary-bg-color"
          >
            Log-in
          </Button>
        </form>
        <span className="text-center my-3">or</span>
        <Button
          className="flex items-center justify-center gap-3 normal-case bg-primary-bg-color"
          onClick={handleOnGoogleLoginClick}
        >
          <img
            src="https://docs.material-tailwind.com/icons/github.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          <span>Continue with GitHub</span>
        </Button>
        <p className="text-xs text-center mt-6">
          Don't have an account?
          <Link to="/register" className="ml-1 underline text-blue-500">
            Create
          </Link>
        </p>
      </div>
    </div>
  );
}
