"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormInput } from "@/components/ui/form/formInput"
import { toast } from "sonner"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    
    const myPromise = new Promise<{ name: string }>((resolve, reject) => {
        
        setTimeout(() => {
          resolve({ name: 'My toast' });
        }, 3000);
      });

      toast.promise(myPromise, {
        loading: 'Loading...',
        
        success: (data: { name: string }) => {
          return {
            message: `Logged In`,
            position: "top-center",
            duration : 1300,
          };
        },
        
        error: 'Error',

      });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 w-full">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput control={form.control} name="username" label="Username" placeholder="Enter your Username"  />
            <FormInput control={form.control} name="password"  label="Password" placeholder="Enter your Password"  />
              <Button type="submit" className="w-full h-11 mt-6" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
