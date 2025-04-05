"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup Page</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="border-2 rounded-md p-2 mb-4"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="border-2 rounded-md p-2 mb-4"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="border-2 rounded-md p-2 mb-4"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="bg-blue-500 text-white rounded-md p-2 mb-4"
        onClick={onSignup}
      >
        Sign Up
      </button>
      <Link href="/login" className="text-white">Login Here</Link>

    </div>
  );
}
