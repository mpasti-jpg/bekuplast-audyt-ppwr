"use client";

import { RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { useAuditStore } from "@/store/audit-store";

type RestartAuditButtonProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function RestartAuditButton({
  variant = "light",
  className,
}: RestartAuditButtonProps) {
  const router = useRouter();
  const reset = useAuditStore((state) => state.reset);

  const handleRestart = () => {
    reset();
    analytics.track("next_step_clicked", {
      label: "restart_audit",
      source: "result_page",
    });
    router.push("/ppwr/audyt-gotowosci/");
  };

  return (
    <button
      type="button"
      onClick={handleRestart}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2",
        variant === "dark" &&
          "border border-white/20 bg-white/10 text-white hover:bg-white/15",
        variant === "light" &&
          "border border-border bg-white text-navy hover:border-amber hover:bg-amber-light",
        className,
      )}
    >
      <RotateCcw className="h-4 w-4" />
      Wykonaj audyt ponownie
    </button>
  );
}
