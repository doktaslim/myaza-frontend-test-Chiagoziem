'use client'

import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function AuthForm() {
  const router = useRouter()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace('/dashboard')
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-8 w-full md:w-4/6">
      <div className="flex flex-col gap-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="Eg Aliriaz@Uifry.com"
          error=""
          // readOnly={true}
        />
        <Input
          label="Password"
          type="password"
          placeholder="***********"
          error=""
          // readOnly={true}
        />
        <Link
          className="flex justify-end text-[var(--brand-text)] font-semibold"
          href={"#"}
        >
          I Forgot My Password!
        </Link>
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
}
