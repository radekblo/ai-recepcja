"use client";

import { Bell, Search } from "lucide-react";
import { getNavigationItem } from "@/lib/mock/navigation";
import { workspace } from "@/lib/mock/workspace";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function AppTopbar() {
  const pathname = usePathname();
  const page = getNavigationItem(pathname);

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between gap-3 border-b border-border bg-white/95 px-4 backdrop-blur sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger
          className="text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Otwórz lub zwiń menu nawigacji"
        />
        <div className="hidden min-w-0 items-center gap-2 text-xs text-muted-foreground sm:flex">
          <span className="truncate">{workspace.name}</span>
          <span aria-hidden="true">/</span>
          <span className="truncate font-medium text-foreground">{page?.label ?? "Panel"}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <label className="relative hidden w-56 md:block lg:w-64">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            aria-label="Szukaj"
            placeholder="Szukaj..."
            className="h-9 border-transparent bg-background pl-9 text-xs shadow-none placeholder:text-muted-foreground/80 focus-visible:border-ring"
          />
        </label>
        <Badge className="hidden border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700 sm:inline-flex">
          <span className="mr-1.5 size-1.5 rounded-full bg-emerald-500" />
          System aktywny
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground"
          aria-label="Powiadomienia"
        >
          <Bell className="size-4" aria-hidden="true" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-signal" />
        </Button>
        <Avatar className="size-8">
          <AvatarFallback className="bg-[#e8ecf5] text-[10px] font-semibold text-primary">
            {workspace.user.initials}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
