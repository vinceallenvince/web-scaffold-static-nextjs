"use client";

import { useEffect } from "react";
import { useT } from "@/app/lib/i18n-context";
import { PageContainer } from "@/components/ui/layout";

/**
 * Locale-specific error boundary that provides internationalized error messages.
 * This catches errors that occur within locale-specific routes.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useT();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Locale error boundary caught:", error);
  }, [error]);

  return (
    <PageContainer centered>
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <div className="max-w-md w-full text-center">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold justify-center text-error">
                {t("errors.somethingWentWrong")}
              </h2>
              <p className="text-base-content/70 mt-2">
                {t("errors.errorDescription")}
              </p>
              {error.digest && (
                <p className="text-sm text-base-content/50 mt-2">
                  {t("errors.errorId")}: {error.digest}
                </p>
              )}
              <div className="card-actions justify-center mt-4">
                <button
                  onClick={() => reset()}
                  className="btn btn-primary"
                >
                  {t("errors.tryAgain")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
