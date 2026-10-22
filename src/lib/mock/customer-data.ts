export type Conversation = {
  name: string;
  initials: string;
  topic: string;
  channel: "Chat" | "WhatsApp" | "Telefon";
  time: string;
  status: "Nowa" | "W toku" | "Zakończona";
  preview: string;
};

export const conversations: Conversation[] = [
  { name: "Anna Nowak", initials: "AN", topic: "Rezerwacja konsultacji", channel: "Chat", time: "09:42", status: "W toku", preview: "Czy mogę umówić się na konsultację w przyszłym tygodniu?" },
  { name: "Marek Wiśniewski", initials: "MW", topic: "Pytanie o ofertę", channel: "WhatsApp", time: "09:28", status: "Nowa", preview: "Dzień dobry, chciałbym dowiedzieć się więcej o pakiecie." },
  { name: "Julia Kamińska", initials: "JK", topic: "Zmiana terminu", channel: "Telefon", time: "09:16", status: "W toku", preview: "Prośba o przesunięcie wizyty na czwartek." },
  { name: "Piotr Zieliński", initials: "PZ", topic: "Godziny otwarcia", channel: "Chat", time: "08:54", status: "Zakończona", preview: "W jakich godzinach pracują Państwo w sobotę?" },
  { name: "Katarzyna Wójcik", initials: "KW", topic: "Pierwsza wizyta", channel: "WhatsApp", time: "08:31", status: "Nowa", preview: "Czy przed pierwszą wizytą muszę coś przygotować?" },
];

export const clients = [
  { name: "Anna Nowak", initials: "AN", email: "anna.nowak@example.com", phone: "+48 501 234 567", visits: 8, lastContact: "Dzisiaj, 09:42", status: "Aktywny" },
  { name: "Marek Wiśniewski", initials: "MW", email: "marek.w@example.com", phone: "+48 502 345 678", visits: 3, lastContact: "Dzisiaj, 09:28", status: "Nowy" },
  { name: "Julia Kamińska", initials: "JK", email: "j.kaminska@example.com", phone: "+48 503 456 789", visits: 12, lastContact: "Dzisiaj, 09:16", status: "Aktywny" },
  { name: "Piotr Zieliński", initials: "PZ", email: "piotr.z@example.com", phone: "+48 504 567 890", visits: 5, lastContact: "Wczoraj, 16:20", status: "Aktywny" },
  { name: "Katarzyna Wójcik", initials: "KW", email: "k.wojcik@example.com", phone: "+48 505 678 901", visits: 1, lastContact: "Wczoraj, 14:05", status: "Nowy" },
  { name: "Tomasz Lewandowski", initials: "TL", email: "t.lewandowski@example.com", phone: "+48 506 789 012", visits: 6, lastContact: "22 paź, 11:32", status: "Aktywny" },
];

export const appointments = [
  { time: "09:00", name: "Tomasz Lewandowski", service: "Konsultacja wstępna", duration: "30 min", status: "Potwierdzona", color: "border-l-sky-400 bg-sky-50" },
  { time: "10:30", name: "Anna Nowak", service: "Sesja konsultacyjna", duration: "45 min", status: "Potwierdzona", color: "border-l-violet-400 bg-violet-50" },
  { time: "12:00", name: "Julia Kamińska", service: "Wizyta kontrolna", duration: "30 min", status: "Oczekuje", color: "border-l-amber-400 bg-amber-50" },
  { time: "13:30", name: "Marek Wiśniewski", service: "Spotkanie online", duration: "60 min", status: "Potwierdzona", color: "border-l-emerald-400 bg-emerald-50" },
  { time: "15:00", name: "Katarzyna Wójcik", service: "Pierwsza konsultacja", duration: "45 min", status: "Potwierdzona", color: "border-l-rose-400 bg-rose-50" },
] as const;

export const inboxMessages = [
  { name: "Anna Nowak", initials: "AN", channel: "Chat na stronie", time: "09:42", preview: "Czy mogę umówić się na konsultację w przyszłym tygodniu?", unread: true, color: "bg-violet-100 text-violet-700" },
  { name: "Marek Wiśniewski", initials: "MW", channel: "WhatsApp", time: "09:28", preview: "Dziękuję za przesłanie szczegółów oferty.", unread: true, color: "bg-emerald-100 text-emerald-700" },
  { name: "Julia Kamińska", initials: "JK", channel: "Telefon", time: "09:16", preview: "Prośba o przesunięcie wizyty na czwartek.", unread: false, color: "bg-sky-100 text-sky-700" },
  { name: "Piotr Zieliński", initials: "PZ", channel: "Chat na stronie", time: "08:54", preview: "W jakich godzinach pracują Państwo w sobotę?", unread: false, color: "bg-amber-100 text-amber-700" },
] as const;
