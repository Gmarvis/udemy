'use client'

import React, { FormEvent, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import Input from '../atoms/input';
import Button from '../atoms/button';


type InitialStateProps = {
  name: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const [state, setState] = useState(initialState);
  // const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    //connect here
  };

  return (
    <form className="text-center" onSubmit={onSubmit}>
      <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />

        <Button label='Submit' type='Submit'/>

      </div>

      <div>
        <div>
          Do you have an account? <Link href="/login">Sign in</Link>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;