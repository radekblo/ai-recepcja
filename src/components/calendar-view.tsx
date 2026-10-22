"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, ChevronDown, Clock3, Plus } from "lucide-react";
import { appointments } from "@/lib/mock/customer-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const week = [
  { day: "Pon", date: "19" }, { day: "Wt", date: "20" }, { day: "Śr", date: "21" },
  { day: "Czw", date: "22" }, { day: "Pt", date: "23" }, { day: "Sob", date: "24" }, { day: "Nd", date: "25" },
];

export default function CalendarView() {
  const [activeDate, setActiveDate] = useState("22");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-xs text-muted-foreground">Centrum obsługi</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Kalendarz i rezerwacje</h1><p className="mt-1 text-sm text-muted-foreground">Zarządzaj terminami i dostępnością zespołu.</p></div>
        <Button className="h-9 gap-2 text-xs"><Plus className="size-3.5" /> Nowa rezerwacja</Button>
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(290px,0.8fr)]">
        <Card className="gap-0 border-border/80 bg-white py-0">
          <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 border-b border-border/70 px-5 py-4">
            <div><CardTitle className="text-sm">Październik 2026</CardTitle><CardDescription className="mt-1 text-xs">Tydzień 43 · 19–25 października</CardDescription></div>
            <div className="flex gap-1.5"><Button variant="outline" size="icon" className="size-8" aria-label="Poprzedni tydzień"><ArrowLeft className="size-3.5" /></Button><Button variant="outline" size="sm" className="h-8 text-xs">Dzisiaj</Button><Button variant="outline" size="icon" className="size-8" aria-label="Następny tydzień"><ArrowRight className="size-3.5" /></Button><Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">Tydzień <ChevronDown className="size-3" /></Button></div>
          </CardHeader>
          <CardContent className="p-4 sm:p-5">
            <div className="grid grid-cols-7 gap-1.5">
              {week.map((day) => <button type="button" key={day.date} onClick={() => setActiveDate(day.date)} className={`flex flex-col items-center gap-1 rounded-lg py-2.5 transition-colors ${activeDate === day.date ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted"}`}><span className="text-[10px]">{day.day}</span><span className="text-sm font-semibold tabular-nums">{day.date}</span><span className={`size-1 rounded-full ${day.date === "22" || day.date === "23" ? activeDate === day.date ? "bg-amber-300" : "bg-amber-500" : "bg-transparent"}`} /></button>)}
            </div>
            <div className="mt-4 flex items-center justify-between border-y border-border/70 py-3">
              <div><p className="text-xs font-semibold">{activeDate} października 2026</p><p className="mt-0.5 text-[10px] text-muted-foreground">5 zaplanowanych spotkań</p></div>
              <div className="flex gap-3 text-[10px] text-muted-foreground"><span className="flex items-center gap-1"><span className="size-2 rounded-full bg-sky-400" />Konsultacja</span><span className="flex items-center gap-1"><span className="size-2 rounded-full bg-violet-400" />Wizyta</span></div>
            </div>
            <div className="divide-y divide-border/70">
              {appointments.map((appointment) => <div key={appointment.time} className="grid grid-cols-[50px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[60px_minmax(0,1fr)]">
                <div className="pt-1 text-[11px] font-medium tabular-nums text-muted-foreground">{appointment.time}</div>
                <div className={`flex flex-wrap items-center justify-between gap-3 rounded-lg border-l-[3px] px-3 py-2.5 ${appointment.color}`}>
                  <div className="flex min-w-0 items-center gap-2.5"><Avatar className="size-8"><AvatarFallback className="bg-white/80 text-[9px] font-semibold text-primary">{appointment.name.split(" ").map((part) => part[0]).join("")}</AvatarFallback></Avatar><div className="min-w-0"><p className="truncate text-xs font-semibold">{appointment.name}</p><p className="mt-0.5 truncate text-[10px] text-muted-foreground">{appointment.service} · {appointment.duration}</p></div></div>
                  <Badge variant="outline" className="border-white/80 bg-white/75 text-[9px] text-muted-foreground">{appointment.status}</Badge>
                </div>
              </div>)}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-5">
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="px-4 py-4"><CardTitle className="text-sm">Podsumowanie dnia</CardTitle><CardDescription className="text-xs">Czwartek, 22 października</CardDescription></CardHeader>
            <CardContent className="space-y-3 px-4 pb-4">
              {[["Wszystkie wizyty", "5", "bg-[#eef1f8] text-primary"], ["Potwierdzone", "4", "bg-emerald-50 text-emerald-700"], ["Oczekujące", "1", "bg-amber-50 text-amber-700"]].map(([label, value, tone]) => <div key={label} className="flex items-center justify-between rounded-lg border border-border/70 p-3"><span className="text-xs text-muted-foreground">{label}</span><Badge className={`${tone} text-xs`}>{value}</Badge></div>)}
            </CardContent>
          </Card>
          <Card className="gap-3 border-border/80 bg-white py-4">
            <CardHeader className="px-4 py-0"><CardTitle className="text-sm">Dostępność zespołu</CardTitle><CardDescription className="text-xs">Dzisiaj · godziny pracy</CardDescription></CardHeader>
            <CardContent className="space-y-3 px-4">
              <div className="flex items-center justify-between text-xs"><span className="flex items-center gap-2"><Clock3 className="size-3.5 text-muted-foreground" /> Godziny otwarcia</span><span className="font-medium">09:00–17:00</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[68%] rounded-full bg-primary" /></div>
              <div className="flex justify-between text-[10px] text-muted-foreground"><span>3 godziny wolne</span><span>5 / 8 zajętych</span></div>
              <Button variant="outline" className="h-8 w-full gap-2 text-xs"><CalendarDays className="size-3.5" /> Ustaw dostępność</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
