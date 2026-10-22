export const dashboardStats = [
  { label: "Rozmowy dzisiaj", value: "38", change: "+12,5%", icon: "messages" },
  { label: "Nowi klienci", value: "128", change: "+8,2%", icon: "users" },
  { label: "Umówione wizyty", value: "18", change: "+4 w tym tygodniu", icon: "calendar" },
  { label: "Satysfakcja klientów", value: "94,2%", change: "+2,4% w tym miesiącu", icon: "star" },
] as const;

export const recentConversations = [
  { name: "Anna Nowak", initials: "AN", topic: "Rezerwacja konsultacji", channel: "Chat na stronie", time: "09:42", status: "Zakończona", tone: "green" },
  { name: "Marek Wiśniewski", initials: "MW", topic: "Pytanie o ofertę", channel: "WhatsApp", time: "09:28", status: "W toku", tone: "blue" },
  { name: "Julia Kamińska", initials: "JK", topic: "Zmiana terminu wizyty", channel: "Telefon", time: "09:16", status: "W toku", tone: "blue" },
  { name: "Piotr Zieliński", initials: "PZ", topic: "Godziny otwarcia", channel: "Chat na stronie", time: "08:54", status: "Oczekuje", tone: "amber" },
] as const;

export const upcomingAppointments = [
  { time: "10:30", name: "Anna Nowak", service: "Konsultacja wstępna", initials: "AN", color: "bg-violet-100 text-violet-700" },
  { time: "11:15", name: "Marek Wiśniewski", service: "Spotkanie online", initials: "MW", color: "bg-sky-100 text-sky-700" },
  { time: "12:00", name: "Julia Kamińska", service: "Sesja kontrolna", initials: "JK", color: "bg-amber-100 text-amber-700" },
] as const;

export const assistantHealth = [
  { name: "Chatbot na stronie", detail: "Odpowiada i zbiera zapytania", status: "Aktywny" },
  { name: "AI sekretarka", detail: "Przekierowuje połączenia", status: "Aktywna" },
] as const;

export const weeklyActivity = [
  { day: "Pon", value: 42 },
  { day: "Wt", value: 66 },
  { day: "Śr", value: 52 },
  { day: "Czw", value: 82 },
  { day: "Pt", value: 61 },
  { day: "Sob", value: 35 },
  { day: "Nd", value: 24 },
] as const;
