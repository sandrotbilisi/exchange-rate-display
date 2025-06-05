"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  [key: string]: any;
}

export function FormInput({
  control,
  name,
  label,
  placeholder,
  description,
  ...props
}: FormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label ? (
            <FormLabel>{label}</FormLabel>
          ) : (
            <FormLabel>{name}</FormLabel>
          )}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
