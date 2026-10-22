import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

const tones: Record<string, string> = {
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  blue: "border-sky-200 bg-sky-50 text-sky-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  red: "border-rose-200 bg-rose-50 text-rose-700",
  gray: "border-border bg-muted text-muted-foreground",
};

export default function StatusBadge({ tone, children }: { tone: string; children: ReactNode }) {
  return (
    <Badge variant="outline" className={`whitespace-nowrap px-2 py-0.5 text-[10px] font-medium ${tones[tone] ?? tones.gray}`}>
      {children}
    </Badge>
  );
}
