import { Button, Input } from '@material-tailwind/react'
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useApi } from '../../api'
import { ID } from 'appwrite'

export const Route = createLazyFileRoute('/_auth/register')({
  component: RouteComponent,
})

export type RegisterModel = {
  email: string
  password: string
  confirmedPassword: string
}

function RouteComponent() {
  const navigate = useNavigate()
  const { account } = useApi()

  const handleOnGoogleLoginClick = () => {
    navigate({ to: '/overview' })
  }

  const { register, handleSubmit } = useForm<RegisterModel>()

  const onSubmit: SubmitHandler<RegisterModel> = async (data) => {
    const user = await account.create(ID.unique(), data.email, data.password)
    console.log('user created:', user)
  }

  return (
    <div className="flex h-full justify-center items-center px-3 flex-col">
      <div className="flex flex-col bg-secondary-bg-color w-11/12 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold">Register</h2>
        <form
          className="flex flex-col gap-y-2 mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            color="white"
            {...register('email', { required: true })}
          />
          <Input
            label="Password"
            type="password"
            color="white"
            {...register('password', { required: true })}
          />
          <Input
            label="Confirm password"
            type="password"
            color="white"
            {...register('confirmedPassword', { required: true })}
          />
          <Button
            type="submit"
            className="mt-3 normal-case bg-primary-bg-color"
          >
            Create account
          </Button>
        </form>
        <span className="text-center my-3">or</span>
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
        <p className="text-xs text-center mt-6">
          Current have an account?
          <Link to="/login" className="ml-1 underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
