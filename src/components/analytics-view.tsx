import { ArrowUpRight, CalendarDays, Clock3, Download, MessageSquareText, PhoneCall, Star, UsersRound } from "lucide-react";
import { analyticsChannels, analyticsSeries } from "@/lib/mock/assistant-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Satysfakcja klientów", value: "94,2%", delta: "+2,4%", icon: Star },
  { label: "Wiadomości obsłużone", value: "4,8 tys.", delta: "+12,8%", icon: MessageSquareText },
  { label: "Średni czas odpowiedzi", value: "1,8 sek.", delta: "-0,3 sek.", icon: PhoneCall },
  { label: "Zaoszczędzony czas", value: "42 godz.", delta: "+6,2%", icon: Clock3 },
];

export default function AnalyticsView() {
  const points = analyticsSeries.map((item, index) => `${30 + index * 70},${115 - item.value}`).join(" ");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs text-muted-foreground">Wyniki i raporty</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Analityka</h1><p className="mt-1 text-sm text-muted-foreground">Zobacz, jak Twoi asystenci wspierają klientów i zespół.</p></div><div className="flex gap-2"><Button variant="outline" className="h-9 gap-2 bg-white text-xs"><CalendarDays className="size-3.5" /> Ostatnie 7 dni</Button><Button variant="outline" className="h-9 gap-2 bg-white text-xs"><Download className="size-3.5" /> Eksportuj raport</Button></div></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => { const Icon = metric.icon; return <Card key={metric.label} className="gap-3 border-border/80 bg-white py-4"><CardContent className="px-4"><div className="flex items-center justify-between"><p className="text-xs text-muted-foreground">{metric.label}</p><span className="flex size-8 items-center justify-center rounded-lg bg-[#f3f5f9] text-primary/70"><Icon className="size-4" /></span></div><p className="mt-2 text-2xl font-semibold">{metric.value}</p><p className="mt-1 flex items-center gap-1 text-[10px] text-emerald-700"><ArrowUpRight className="size-3" />{metric.delta} vs. poprzedni tydzień</p></CardContent></Card>; })}
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
        <Card className="gap-0 border-border/80 bg-white py-0">
          <CardHeader className="flex flex-row items-start justify-between px-5 py-4"><div><CardTitle className="text-sm">Rozmowy w czasie</CardTitle><CardDescription className="mt-1 text-xs">Liczba rozmów obsłużonych przez Twoich asystentów</CardDescription></div><Badge variant="outline" className="text-[10px]">Wszystkie kanały</Badge></CardHeader>
          <CardContent className="px-5 pb-5">
            <div className="mb-4 flex items-baseline gap-2"><span className="text-2xl font-semibold">1 284</span><span className="text-[10px] text-muted-foreground">rozmowy</span><span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-700"><ArrowUpRight className="size-3" /> 18,6%</span></div>
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 flex flex-col justify-between">{[0, 1, 2, 3].map((line) => <div key={line} className="border-t border-dashed border-border/80" />)}</div>
              <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 480 130" preserveAspectRatio="none" role="img" aria-label="Wykres rozmów w ostatnich 7 dniach">
                <defs><linearGradient id="analytics-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#29375e" stopOpacity=".16" /><stop offset="100%" stopColor="#29375e" stopOpacity="0" /></linearGradient></defs>
                <polygon points={`30,130 ${points} 450,130`} fill="url(#analytics-fill)" />
                <polyline points={points} fill="none" stroke="#29375e" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                {analyticsSeries.map((item, index) => <circle key={item.day} cx={30 + index * 70} cy={115 - item.value} r="3.5" fill="#fff" stroke="#29375e" strokeWidth="2" vectorEffect="non-scaling-stroke" />)}
              </svg>
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">{analyticsSeries.map((item) => <span key={item.day}>{item.day}</span>)}</div>
          </CardContent>
        </Card>
        <Card className="gap-0 border-border/80 bg-white py-0">
          <CardHeader className="px-5 py-4"><CardTitle className="text-sm">Rozmowy według kanału</CardTitle><CardDescription className="mt-1 text-xs">Udział kanałów komunikacji</CardDescription></CardHeader>
          <CardContent className="px-5 pb-5">
            <div className="my-4 flex h-3 overflow-hidden rounded-full bg-muted">{analyticsChannels.map((channel) => <div key={channel.name} className={channel.color} style={{ width: `${channel.value}%` }} />)}</div>
            <div className="space-y-4">{analyticsChannels.map((channel) => <div key={channel.name}><div className="flex items-center justify-between text-xs"><span className="flex items-center gap-2"><span className={`size-2 rounded-full ${channel.color}`} />{channel.name}</span><span className="font-semibold">{channel.value}%</span></div><p className="mt-1.5 pl-4 text-[10px] text-muted-foreground">{Math.round(1284 * channel.value / 100).toLocaleString("pl-PL")} rozmów</p></div>)}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        <Card className="gap-0 border-border/80 bg-white py-0"><CardHeader className="px-5 py-4"><CardTitle className="text-sm">Aktywność asystentów</CardTitle><CardDescription className="mt-1 text-xs">Podział obsłużonych spraw</CardDescription></CardHeader><CardContent className="space-y-4 px-5 pb-5">{[["Chatbot", 78, "1 002 rozmowy", "bg-primary"], ["AI sekretarka", 64, "821 połączeń", "bg-sky-400"], ["Przekazane zespołowi", 22, "282 sprawy", "bg-amber-400"]].map(([name, width, detail, color]) => <div key={name}><div className="flex justify-between text-xs"><span className="font-medium">{name}</span><span className="text-muted-foreground">{detail}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className={`h-full rounded-full ${color}`} style={{ width: `${width}%` }} /></div></div>)}</CardContent></Card>
        <Card className="gap-0 border-border/80 bg-white py-0"><CardHeader className="px-5 py-4"><CardTitle className="text-sm">Najczęstsze tematy</CardTitle><CardDescription className="mt-1 text-xs">O czym najczęściej rozmawiają klienci?</CardDescription></CardHeader><CardContent className="divide-y divide-border/70 px-5">{[["Rezerwacje i terminy", "36%", "462"], ["Pytania o ofertę", "28%", "359"], ["Godziny otwarcia", "18%", "231"], ["Inne zapytania", "18%", "232"]].map(([name, percent, count], index) => <div key={name} className="flex items-center gap-3 py-3"><span className="flex size-6 items-center justify-center rounded-md bg-[#f3f5f9] text-[10px] font-semibold text-muted-foreground">{index + 1}</span><span className="flex-1 text-xs">{name}</span><span className="text-[10px] text-muted-foreground">{count} rozmów</span><Badge variant="outline" className="w-12 justify-center text-[9px]">{percent}</Badge></div>)}</CardContent></Card>
      </div>
      <Card className="border-sky-200/80 bg-sky-50/60 py-3 shadow-none"><CardContent className="flex items-center gap-3 px-4"><span className="flex size-8 items-center justify-center rounded-lg bg-white text-sky-700"><UsersRound className="size-4" /></span><div><p className="text-xs font-semibold text-sky-950">Analityka aktualizuje się automatycznie</p><p className="mt-0.5 text-[10px] text-sky-900/70">Dane w wersji demonstracyjnej są przykładowe.</p></div><Badge className="ml-auto border-sky-200 bg-white text-[9px] text-sky-800">Demo</Badge></CardContent></Card>
    </div>
  );
}
