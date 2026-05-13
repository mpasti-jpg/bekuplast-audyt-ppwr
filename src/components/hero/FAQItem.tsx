"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  q: string;
  a: string;
};

export function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((value) => {
      const next = !value;
      if (next) analytics.track("faq_item_expanded", { question: q });
      return next;
    });
  };

  return (
    <div className="rounded-lg border border-border">
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-paper focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-amber transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && <div className="px-5 pb-4 leading-relaxed text-navy/80">{a}</div>}
    </div>
  );
}
