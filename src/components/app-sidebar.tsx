"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Sparkles } from "lucide-react";
import { navigationSections, utilityNavigation } from "@/lib/mock/navigation";
import { workspace } from "@/lib/mock/workspace";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-sidebar-border">
      <SidebarHeader className="gap-4 px-3 py-4">
        <Link href="/dashboard" className="flex items-center gap-2.5 px-1">
          <span className="flex size-8 items-center justify-center rounded-lg bg-white text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">Recepcja AI</span>
        </Link>

        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-lg border border-sidebar-border bg-sidebar-accent/60 px-2.5 text-left transition-colors hover:bg-sidebar-accent"
          aria-label={`Przestrzeń robocza: ${workspace.name}`}
        >
          <Avatar className="size-7 rounded-md">
            <AvatarFallback className="rounded-md bg-[#dfe6f5] text-[10px] font-semibold text-primary">
              SH
            </AvatarFallback>
          </Avatar>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-white">{workspace.name}</span>
            <span className="block text-[10px] text-sidebar-foreground/65">{workspace.plan}</span>
          </span>
          <ChevronDown className="size-3.5 text-sidebar-foreground/65" aria-hidden="true" />
        </button>
      </SidebarHeader>

      <SidebarContent className="gap-1 px-2 py-2">
        {navigationSections.map((section) => (
          <SidebarGroup key={section.label} className="px-1 py-1">
            <SidebarGroupLabel className="px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/50">
              {section.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        render={<Link href={item.href} />}
                        isActive={pathname === item.href}
                        tooltip={item.label}
                        className="h-9 px-2.5 text-[13px] text-sidebar-foreground/80 data-active:bg-white/10 data-active:text-white data-active:shadow-[inset_2px_0_0_0_#f3a943]"
                      >
                        <Icon aria-hidden="true" className="size-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.badge ? (
                        <SidebarMenuBadge className="right-2 h-5 min-w-5 rounded-md bg-white/10 text-[10px] text-sidebar-foreground">
                          {item.badge}
                        </SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup className="mt-auto px-1 py-1">
          <SidebarGroupLabel className="px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/50">
            Ustawienia
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {utilityNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={pathname === item.href}
                      tooltip={item.label}
                      className="h-9 px-2.5 text-[13px] text-sidebar-foreground/80 data-active:bg-white/10 data-active:text-white data-active:shadow-[inset_2px_0_0_0_#f3a943]"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-2.5 rounded-lg px-1 py-1">
          <Avatar className="size-8">
            <AvatarFallback className="bg-[#dfe6f5] text-[10px] font-semibold text-primary">
              {workspace.user.initials}
            </AvatarFallback>
          </Avatar>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-white">{workspace.user.name}</span>
            <span className="block truncate text-[10px] text-sidebar-foreground/60">{workspace.user.role}</span>
          </span>
          <span className="size-1.5 rounded-full bg-emerald-400" aria-label="Status: online" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
