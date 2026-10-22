import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Headphones,
  MessageSquareText,
  MoreHorizontal,
  PhoneCall,
  Star,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { assistantHealth, dashboardStats, recentConversations, upcomingAppointments, weeklyActivity } from "@/lib/mock/dashboard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/status-badge";

const statIcons = [MessageSquareText, UsersRound, CalendarDays, Star];

export default function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Czwartek, 22 października 2026</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Dzień dobry, Maja <span aria-hidden="true">👋</span></h1>
          <p className="mt-1 text-sm text-muted-foreground">Oto podsumowanie tego, co dzieje się w Twojej firmie.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-9 bg-white text-xs">Ostatnie 7 dni</Button>
          <Button className="h-9 gap-2 bg-primary text-xs hover:bg-primary/90">
            <PhoneCall className="size-3.5" aria-hidden="true" />
            Nowa rezerwacja
          </Button>
        </div>
      </div>

      <section aria-label="Najważniejsze statystyki" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => {
          const Icon = statIcons[index];
          return (
            <Card key={stat.label} className="gap-3 border-border/80 bg-white py-4 shadow-[0_1px_2px_rgba(25,35,65,0.03)]">
              <CardContent className="px-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#f3f5f9] text-primary/70">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-2 text-2xl font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-emerald-700">
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)]">
        <div className="space-y-5">
          <Card className="gap-0 border-border/80 bg-white py-0 shadow-[0_1px_2px_rgba(25,35,65,0.03)]">
            <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-border/70 px-5 py-4">
              <div>
                <CardTitle className="text-sm">Ostatnie rozmowy</CardTitle>
                <CardDescription className="mt-1 text-xs">Najnowsza aktywność Twoich asystentów</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-primary" render={<Link href="/conversations" />}>
                Wszystkie <ArrowRight className="size-3.5" aria-hidden="true" />
              </Button>
            </CardHeader>
            <CardContent className="px-5 py-1">
              <div className="divide-y divide-border/70">
                {recentConversations.map((conversation) => (
                  <div key={conversation.name} className="flex items-center gap-3 py-3">
                    <Avatar className="size-9">
                      <AvatarFallback className="bg-[#eef1f8] text-[10px] font-semibold text-primary">{conversation.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium">{conversation.name}</p>
                      <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{conversation.topic}</p>
                    </div>
                    <span className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                      {conversation.channel === "Telefon" ? <PhoneCall className="size-3" /> : <MessageSquareText className="size-3" />}
                      {conversation.channel}
                    </span>
                    <span className="hidden text-[10px] tabular-nums text-muted-foreground md:block">{conversation.time}</span>
                    <StatusBadge tone={conversation.tone}>{conversation.status}</StatusBadge>
                    <Button size="icon" variant="ghost" className="size-7 text-muted-foreground" aria-label={`Więcej opcji: ${conversation.name}`}>
                      <MoreHorizontal className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="border-t border-border/70 px-5 py-3">
              <p className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Wszystkie systemy działają prawidłowo
              </p>
            </div>
          </Card>

          <Card className="gap-0 border-border/80 bg-white py-0 shadow-[0_1px_2px_rgba(25,35,65,0.03)]">
            <CardHeader className="flex flex-row items-start justify-between px-5 py-4">
              <div>
                <CardTitle className="text-sm">Aktywność w tym tygodniu</CardTitle>
                <CardDescription className="mt-1 text-xs">Liczba rozmów z ostatnich 7 dni</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">284</p>
                <p className="flex items-center justify-end gap-1 text-[10px] text-emerald-700">
                  <ArrowUpRight className="size-3" /> 12% vs. poprzedni tydzień
                </p>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <div className="flex h-28 items-end gap-3 border-b border-border/70 px-1">
                {weeklyActivity.map((day) => (
                  <div key={day.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <div className="w-full max-w-10 rounded-t-md bg-[#dce4f3] transition-colors hover:bg-primary/70" style={{ height: `${day.value}%` }} />
                    <span className="text-[10px] text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="gap-0 border-border/80 bg-white py-0 shadow-[0_1px_2px_rgba(25,35,65,0.03)]">
            <CardHeader className="flex flex-row items-center justify-between px-4 py-4">
              <div>
                <CardTitle className="text-sm">Najbliższe wizyty</CardTitle>
                <CardDescription className="mt-1 text-xs">Dzisiaj · 3 nadchodzące</CardDescription>
              </div>
              <Button size="icon" variant="ghost" className="size-8 text-muted-foreground" aria-label="Otwórz kalendarz" render={<Link href="/calendar" />}>
                <CalendarDays className="size-4" aria-hidden="true" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-0 px-4 pb-3">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.time} className="flex gap-3 border-t border-border/70 py-3 first:border-t-0">
                  <div className="w-11 shrink-0 pt-0.5 text-[11px] font-medium tabular-nums text-muted-foreground">{appointment.time}</div>
                  <Avatar className="size-8">
                    <AvatarFallback className={`text-[9px] font-semibold ${appointment.color}`}>{appointment.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{appointment.name}</p>
                    <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{appointment.service}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="border-t border-border/70 px-4 py-2.5">
              <Link className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-primary hover:underline" href="/calendar">
                Zobacz pełny kalendarz <ArrowRight className="size-3" aria-hidden="true" />
              </Link>
            </div>
          </Card>

          <Card className="gap-3 border-border/80 bg-white py-4 shadow-[0_1px_2px_rgba(25,35,65,0.03)]">
            <CardHeader className="px-4 py-0">
              <CardTitle className="text-sm">Twoi asystenci</CardTitle>
              <CardDescription className="text-xs">Status połączeń i automatyzacji</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 px-4">
              {assistantHealth.map((assistant, index) => (
                <div key={assistant.name} className="flex items-center gap-3 rounded-lg border border-border/70 p-3">
                  <span className={`flex size-8 items-center justify-center rounded-lg ${index === 0 ? "bg-violet-50 text-violet-700" : "bg-emerald-50 text-emerald-700"}`}>
                    {index === 0 ? <MessageSquareText className="size-4" /> : <Headphones className="size-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{assistant.name}</p>
                    <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{assistant.detail}</p>
                  </div>
                  <Badge className="gap-1 border-emerald-200 bg-emerald-50 px-1.5 text-[9px] text-emerald-700">
                    <Check className="size-2.5" /> {assistant.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="gap-3 border-amber-200/80 bg-[#fffaf0] py-4 shadow-none">
            <CardContent className="flex gap-3 px-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Clock3 className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-amber-950">2 rozmowy czekają na odpowiedź</p>
                <p className="mt-1 text-[11px] leading-5 text-amber-900/70">Sprawdź wiadomości, które wymagają Twojej uwagi.</p>
                <Link href="/inbox" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 hover:underline">
                  Otwórz skrzynkę <ArrowDownRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
