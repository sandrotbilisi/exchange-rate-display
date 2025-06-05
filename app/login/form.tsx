"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInput } from "@/components/ui/form/formInput";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function FormComponent() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();

      Cookies.set("token", data.token, { expires: 7 });

      toast.success("Logged in!");

      router.push("/dashboard");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  }

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   const res = await signIn("credentials", {
  //     username: values.username,
  //     password: values.password,
  //     redirect: false,
  //   });

  //   if (res?.ok) {
  //     toast.success("Logged in!");
  //     router.push("/dashboard");
  //   } else {
  //     toast.error("Invalid credentials");
  //   }
  // }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 w-full">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormInput
                control={form.control}
                name="username"
                label="Username"
                placeholder="Enter your Username"
              />
              <FormInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your Password"
              />
              <Button
                type="submit"
                className="w-full h-11 mt-6"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
