"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Login Started");
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            action=""
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button
              className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
              type="submit"
            >
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm text-right mt-3" href={"/register"}>
              Not have an account <span className="underline">Register</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
