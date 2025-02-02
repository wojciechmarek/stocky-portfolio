import { Button, Input, Typography } from "@material-tailwind/react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useApi } from "../../api";
import { OAuthProvider } from "appwrite";

export const Route = createLazyFileRoute("/_auth/login")({
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
    const result = await account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173/profile",
      "http://localhost:5173/register"
    );

    if (result) {
      navigate({ to: "/profile" });
    }
  };

  const handleOnGithubLoginClick = async () => {
    const result = await account.createOAuth2Session(
      OAuthProvider.Github,
      "http://localhost:5173/profile",
      "http://localhost:5173/register"
    );
    console.log("------->", result);

    if (result) {
      navigate({ to: "/profile" });
    }
  };

  return (
    <div className="flex h-full justify-center items-center px-3 flex-col">
      <div className="flex flex-col bg-secondary-bg-color w-11/12 md:w-96 p-6 rounded-2xl">
        <Typography variant="h1" className="text-3xl">
          Stocky
        </Typography>
        <Typography variant="h1" className="text-xl mt-3">
          Login to the existing account:
        </Typography>
        <form
          className="flex flex-col gap-y-2 mt-3"
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
        <div className="flex flex-row gap-2"></div>
        <Button
          className="flex items-center justify-center gap-3 normal-case bg-primary-bg-color"
          onClick={handleOnGoogleLoginClick}
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          <span>Continue with Google</span>
        </Button>
        <Button
          className="flex items-center justify-center gap-3 normal-case bg-primary-bg-color mt-2"
          onClick={handleOnGithubLoginClick}
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
            alt="metamask"
            className="h-6 w-6"
          />
          <span>Continue with GitHub</span>
        </Button>
        <p className="text-sm text-center mt-6">
          Don't have an account?
          <Link to="/register" className="ml-1 underline text-blue-500">
            Create
          </Link>
        </p>
      </div>
    </div>
  );
}
