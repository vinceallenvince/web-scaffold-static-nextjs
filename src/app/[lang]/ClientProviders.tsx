"use client";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { ToastProvider } from "@/app/providers/toast-provider";

type ClientProvidersProps = {
  children: React.ReactNode;
};

// This component is a client component that wraps client-side providers
export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
} 