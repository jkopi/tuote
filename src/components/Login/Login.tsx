import React from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, FormHelperText, Input, Button } from '@chakra-ui/react';
import { User } from '../../interfaces';

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input placeholder="Username" {...register("username")}/>
        <FormHelperText>Add your username</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" placeholder="password" {...register("password")}/>
        <FormHelperText>Enter password</FormHelperText>
      </FormControl>
      <Button type="submit">Login</Button>
    </form>
  );
};
