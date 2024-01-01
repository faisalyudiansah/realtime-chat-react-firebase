import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react"
import { RiImageAddFill } from "react-icons/ri"

const Register = () => {
  return (
    <>
      <Card color="transparent" shadow={false} className='m-10 justify-center items-center'>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <form className="mt-10 mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray">
              Display Name
            </Typography>
            <Input
              type='text'
              placeholder="Your display name..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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

            <input
              type='file'
              style={{display: 'none'}}
              id='fileInput'
            />
            <label htmlFor="fileInput" className='flex mt-3 items-center gap-4 cursor-pointer'>
              <RiImageAddFill className='text-4xl'/>
              <span>Add your avatar</span>
            </label>
          </div>

          <Button color='green' className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Login
            </a>
          </Typography>
        </form>
      </Card>
    </>
  )
}

export default Register