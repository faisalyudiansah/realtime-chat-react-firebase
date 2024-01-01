import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react"
import { RiImageAddFill } from "react-icons/ri"

const Login = () => {
  return (
    <>
      <Card color="transparent" shadow={false} className='m-10 justify-center items-center'>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <form className="mt-10 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray">
              Your Email
            </Typography>
            <Input
              type='email'
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray">
              Password
            </Typography>
            <Input
              type="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button color='green' className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have any account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </>
  )
}

export default Login