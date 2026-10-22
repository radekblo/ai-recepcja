import {
  Activity,
  Bot,
  CalendarDays,
  Headphones,
  LayoutDashboard,
  MessageSquareText,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export type NavigationSection = {
  label: string;
  items: NavigationItem[];
};

export const navigationSections: NavigationSection[] = [
  {
    label: "Przegląd",
    items: [{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Obsługa klienta",
    items: [
      { label: "Rozmowy", href: "/conversations", icon: MessageSquareText, badge: "4" },
      { label: "Klienci", href: "/clients", icon: UsersRound },
      { label: "Kalendarz", href: "/calendar", icon: CalendarDays },
      { label: "Skrzynka odbiorcza", href: "/inbox", icon: Headphones, badge: "2" },
    ],
  },
  {
    label: "Asystenci AI",
    items: [
      { label: "Chatbot builder", href: "/chatbot", icon: Bot },
      { label: "AI sekretarka", href: "/ai-receptionist", icon: Activity },
    ],
  },
];

export const utilityNavigation: NavigationItem[] = [
  { label: "Analityka", href: "/analytics", icon: Activity },
  { label: "Ustawienia bota", href: "/settings/bot", icon: Bot },
];

export function getNavigationItem(pathname: string): NavigationItem | undefined {
  return [...navigationSections.flatMap((section) => section.items), ...utilityNavigation].find(
    (item) => item.href === pathname,
  );
}
