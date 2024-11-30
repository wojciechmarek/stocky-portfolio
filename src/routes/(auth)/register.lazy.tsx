import { Button, Input } from "@material-tailwind/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(auth)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full justify-center items-center px-3 flex-col">
      <form className="flex flex-col gap-y-2 bg-[#121413] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Log in</h2>
        <Input label="Email" color="white" />
        <Input label="Password" color="white" />
        <Button className="mt-2">Log-in</Button>
      </form>
    </div>
  );
}
