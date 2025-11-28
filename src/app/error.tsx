"use client";

import { useEffect } from "react";

/**
 * Root-level error boundary for the entire application.
 * This catches errors that occur outside of the locale-specific routes.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Root error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en" data-theme="bumblebee">
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold justify-center text-error">
                  Something went wrong!
                </h2>
                <p className="text-base-content/70 mt-2">
                  An unexpected error occurred. Please try again or contact support if the problem persists.
                </p>
                {error.digest && (
                  <p className="text-sm text-base-content/50 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
                <div className="card-actions justify-center mt-4">
                  <button
                    onClick={() => reset()}
                    className="btn btn-primary"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
