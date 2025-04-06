"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user)
      console.log("Sign Up success",response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up failed",error.message);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false);
    }else {
      setButtonDisabled(true);
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing": "Sign Up"}</h1>
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
        {buttonDisabled ? "No Sign up":"Sign Up"}
      </button>
      <Link href="/login" className="text-white">Login Here</Link>

    </div>
  );
}
