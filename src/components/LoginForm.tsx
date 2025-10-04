"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircleIcon } from "lucide-react";

const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password cannot be less than 8 characters"),
});

export default function LoginForm() {
  const [unexpectedError, setUnexpectedError] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const router = useRouter();

  async function onSubmit(formValues: z.infer<typeof loginFormSchema>) {
    try {
      console.log(formValues);
      const res = await axiosInstance.post("/auth/login", formValues);
      const authenticated = res.data?.success && res.data?.authenticated;

      if (authenticated) router.push("/s");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const errorCode = error.response?.data?.errorCode ?? null;

        if (errorCode && Number(errorCode) === 4004) {
          form.setError("root", {
            message: "Email or Password incorrect",
          });
          return;
        }
      }
      setUnexpectedError(true);
      console.log("unexpected error:\n", error);
    }
  }
  return (
    <Form {...form}>
      {unexpectedError ? (
        <Alert
          variant={"destructive"}
          className="absolute top-[15vh] max-w-[360px]"
        >
          <AlertCircleIcon />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            An unexpected error occured, please try again later or contact
            admin.
          </AlertDescription>
        </Alert>
      ) : null}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email address"
                  {...field}
                  onFocus={() => form.clearErrors("root")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  onFocus={() => form.clearErrors("root")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.isValid ? (
          <Button type="submit" className="rounded-[8px] w-full">
            Sign in
          </Button>
        ) : (
          <Button
            type="submit"
            disabled
            className="rounded-[8px] w-full"
            variant={"inactive"}
          >
            Sign in
          </Button>
        )}
        {form.formState.errors.root && (
          <p className="text-ui-error-500 text-[14px] leading-5">
            {form.formState.errors.root.message}
          </p>
        )}
      </form>
    </Form>
  );
}
