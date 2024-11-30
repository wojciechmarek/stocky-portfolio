import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1>Auth</h1>
      <Outlet />
    </>
  )
}
