import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("min-h-11 rounded-md border border-border bg-white px-3", className)} {...props} />;
}
