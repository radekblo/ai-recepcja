import { ArrowRight, Check, Clock3, Headphones, MoreHorizontal, Phone, PhoneCall, Settings2, ShieldCheck, Sparkles, Volume2 } from "lucide-react";
import Link from "next/link";
import { callActivity, weeklyCallVolume } from "@/lib/mock/assistant-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/status-badge";

export default function ReceptionistView() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs text-muted-foreground">Asystenci AI</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">AI sekretarka</h1><p className="mt-1 text-sm text-muted-foreground">Obsługa połączeń, rezerwacje i przekazywanie spraw zespołowi.</p></div><div className="flex gap-2"><Button variant="outline" className="h-9 gap-2 bg-white text-xs" render={<Link href="/settings/bot" />}><Settings2 className="size-3.5" /> Ustawienia</Button><Button className="h-9 gap-2 text-xs"><PhoneCall className="size-3.5" /> Zadzwoń testowo</Button></div></div>
      <Card className="overflow-hidden border-primary/10 bg-primary text-white shadow-sm">
        <CardContent className="flex flex-wrap items-center justify-between gap-5 p-5 sm:p-6">
          <div className="flex items-center gap-4"><span className="flex size-12 items-center justify-center rounded-2xl bg-white/10"><Headphones className="size-6" /></span><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-base font-semibold">Twoja sekretarka jest gotowa</h2><Badge className="gap-1 border-white/15 bg-white/10 text-[9px] text-emerald-100"><span className="size-1.5 rounded-full bg-emerald-300" /> Aktywna</Badge></div><p className="mt-1 text-xs text-white/65">Odbiera połączenia i pomaga klientom przez całą dobę.</p></div></div>
          <div className="flex gap-6 text-center"><div><p className="text-xl font-semibold">24/7</p><p className="mt-0.5 text-[9px] text-white/60">Dostępność</p></div><div><p className="text-xl font-semibold">98%</p><p className="mt-0.5 text-[9px] text-white/60">Odebranych połączeń</p></div><div><p className="text-xl font-semibold">1,8 s</p><p className="mt-0.5 text-[9px] text-white/60">Śr. czas reakcji</p></div></div>
        </CardContent>
      </Card>
      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.85fr)]">
        <div className="space-y-5">
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="flex flex-row items-center justify-between border-b border-border/70 px-5 py-4"><div><CardTitle className="text-sm">Ostatnie połączenia</CardTitle><CardDescription className="mt-1 text-xs">Aktywność AI sekretarki dzisiaj</CardDescription></div><Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-primary">Historia <ArrowRight className="size-3.5" /></Button></CardHeader>
            <CardContent className="divide-y divide-border/70 px-5 py-1">
              {callActivity.map((call) => <div key={call.time} className="flex items-center gap-3 py-3.5"><Avatar className="size-9"><AvatarFallback className="bg-[#eef1f8] text-primary"><Phone className="size-3.5" /></AvatarFallback></Avatar><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium">{call.caller}</p><p className="mt-0.5 truncate text-[10px] text-muted-foreground">{call.reason}</p></div><span className="hidden text-[10px] tabular-nums text-muted-foreground sm:block">{call.time}</span><span className="hidden items-center gap-1 text-[10px] text-muted-foreground md:flex"><Clock3 className="size-3" /> {call.duration}</span><StatusBadge tone={call.status === "Obsłużone" ? "green" : "amber"}>{call.status}</StatusBadge><Button size="icon" variant="ghost" className="size-7 text-muted-foreground" aria-label={`Więcej opcji: ${call.caller}`}><MoreHorizontal className="size-4" /></Button></div>)}
            </CardContent>
          </Card>
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="flex flex-row items-start justify-between px-5 py-4"><div><CardTitle className="text-sm">Połączenia w tym tygodniu</CardTitle><CardDescription className="mt-1 text-xs">Odebrane przez AI sekretarkę</CardDescription></div><div className="text-right"><p className="text-lg font-semibold">156</p><p className="text-[10px] text-emerald-700">+8% tydzień do tygodnia</p></div></CardHeader>
            <CardContent className="px-5 pb-5"><div className="flex h-28 items-end gap-3 border-b border-border/70">{weeklyCallVolume.map((day) => <div key={day.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="w-full max-w-10 rounded-t-md bg-[#dce4f3]" style={{ height: `${day.value}%` }} /><span className="text-[10px] text-muted-foreground">{day.day}</span></div>)}</div></CardContent>
          </Card>
        </div>
        <div className="space-y-5">
          <Card className="gap-3 border-border/80 bg-white py-4">
            <CardHeader className="px-4 py-0"><CardTitle className="text-sm">Jak sekretarka obsługuje połączenia</CardTitle><CardDescription className="text-xs">Ustawienia przepływu rozmowy</CardDescription></CardHeader>
            <CardContent className="space-y-2 px-4">
              {[["Odbierz i przywitaj", "Naturalne, przyjazne powitanie"], ["Rozpoznaj potrzebę", "Zbieranie informacji od klienta"], ["Umów lub przekaż", "Rezerwacja terminu lub kontakt z zespołem"]].map(([title, detail], index) => <div key={title} className="flex gap-3 rounded-lg border border-border/70 p-3"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#eef1f8] text-[10px] font-semibold text-primary">{index + 1}</span><div><p className="text-[11px] font-medium">{title}</p><p className="mt-0.5 text-[10px] text-muted-foreground">{detail}</p></div>{index < 2 && <Check className="ml-auto size-3.5 text-emerald-600" />}</div>)}
              <Button variant="outline" className="h-8 w-full gap-1.5 text-xs" render={<Link href="/settings/bot" />}><Settings2 className="size-3.5" /> Skonfiguruj sekretarkę</Button>
            </CardContent>
          </Card>
          <Card className="gap-3 border-border/80 bg-white py-4">
            <CardHeader className="px-4 py-0"><CardTitle className="text-sm">Preferencje głosowe</CardTitle></CardHeader>
            <CardContent className="space-y-3 px-4">
              <div className="flex items-center gap-3 rounded-lg bg-[#f6f7fa] p-3"><span className="flex size-8 items-center justify-center rounded-lg bg-white text-primary"><Volume2 className="size-4" /></span><div className="flex-1"><p className="text-[10px] font-medium">Głos polski · Zofia</p><p className="mt-0.5 text-[9px] text-muted-foreground">Ciepły, profesjonalny</p></div><Button variant="outline" size="sm" className="h-7 text-[9px]">Odsłuchaj</Button></div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground"><ShieldCheck className="size-3.5 text-emerald-600" /> Połączenia są chronione i bezpieczne</div>
              <Button variant="ghost" size="sm" className="h-7 w-full gap-1 text-[10px]">Więcej preferencji <ArrowRight className="size-3" /></Button>
            </CardContent>
          </Card>
          <Card className="border-amber-200/80 bg-[#fffaf0] py-3 shadow-none"><CardContent className="flex gap-2.5 px-4"><span className="flex size-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700"><Sparkles className="size-3.5" /></span><div><p className="text-[10px] font-semibold text-amber-950">Wskazówka</p><p className="mt-1 text-[10px] leading-4 text-amber-950/70">Połącz kalendarz, aby sekretarka mogła proponować wolne terminy.</p></div></CardContent></Card>
        </div>
      </div>
    </div>
  );
}
