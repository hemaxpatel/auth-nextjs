"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.error("Logout failed", error);
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>
      <hr />
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>ID:{data}</Link>
        )}
      </h2>

      <button
        onClick={getUserData}
        className="bg-green-600 text-white rounded-md p-2 mb-4"
      >
        User Details
      </button>

      <button
        onClick={logout}
        className="bg-blue-500 text-white rounded-md p-2 mb-4"
      >
        Log Out
      </button>
    </div>
  );
}
