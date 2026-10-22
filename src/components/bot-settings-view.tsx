"use client";

import { Bot, Check, ChevronDown, Globe2, MessageSquareText, Phone, Plus, Save, Sparkles, Volume2, type LucideIcon } from "lucide-react";
import { botSettings } from "@/lib/mock/assistant-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const sections = ["Ogólne", "Zachowanie", "Wiedza", "Kanały"];
const channels: { name: string; detail: string; icon: LucideIcon }[] = [
  { name: "Chat na stronie", detail: "Podłączony · aktywny", icon: Globe2 },
  { name: "WhatsApp", detail: "Podłączony · aktywny", icon: MessageSquareText },
  { name: "Telefon", detail: "AI sekretarka · aktywna", icon: Phone },
];

export default function BotSettingsView() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs text-muted-foreground">Asystenci AI</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Ustawienia bota</h1><p className="mt-1 text-sm text-muted-foreground">Dostosuj sposób, w jaki asystent rozmawia z klientami.</p></div><div className="flex items-center gap-2"><Badge className="gap-1 border-emerald-200 bg-emerald-50 text-[10px] text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-500" /> Aktywny</Badge><Button className="h-9 gap-2 text-xs"><Save className="size-3.5" /> Zapisz zmiany</Button></div></div>
      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(270px,0.75fr)]">
        <div className="space-y-5">
          <nav aria-label="Sekcje ustawień" className="flex gap-1 overflow-x-auto rounded-lg border border-border/70 bg-white p-1">
            {sections.map((section, index) => <a key={section} href={`#${["ogolne", "zachowanie", "wiedza", "kanaly"][index]}`} className={`shrink-0 rounded-md px-4 py-2 text-xs font-medium transition-colors ${index === 0 ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted"}`}>{section}</a>)}
          </nav>
          <Card id="ogolne" className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="border-b border-border/70 px-5 py-4"><CardTitle className="text-sm">Tożsamość asystenta</CardTitle><CardDescription className="mt-1 text-xs">Jak asystent przedstawia się klientom.</CardDescription></CardHeader>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center gap-3 rounded-lg bg-[#f7f8fb] p-3"><Avatar className="size-10"><AvatarFallback className="bg-primary text-white"><Bot className="size-5" /></AvatarFallback></Avatar><div><p className="text-xs font-semibold">Recepcja Studio Harmonia</p><p className="mt-0.5 text-[10px] text-muted-foreground">Asystent AI · Chatbot i obsługa klienta</p></div><Button variant="outline" size="sm" className="ml-auto h-7 text-[10px]">Zmień ikonę</Button></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="text-[10px] font-medium text-muted-foreground">Nazwa asystenta</label><Input className="mt-1.5 h-9 text-xs" defaultValue="Recepcja Studio Harmonia" /></div>
                <div><label className="text-[10px] font-medium text-muted-foreground">Język</label><button type="button" className="mt-1.5 flex h-9 w-full items-center justify-between rounded-md border border-input px-3 text-xs">Polski <ChevronDown className="size-3.5 text-muted-foreground" /></button></div>
              </div>
              <div><label className="text-[10px] font-medium text-muted-foreground">Wiadomość powitalna</label><div className="mt-1.5 min-h-20 rounded-md border border-input px-3 py-2.5 text-xs leading-5">Dzień dobry! Jestem wirtualną asystentką Studio Harmonia. W czym mogę Ci dzisiaj pomóc?</div><p className="mt-1 text-[9px] text-muted-foreground">Ta wiadomość rozpoczyna każdą nową rozmowę.</p></div>
            </CardContent>
          </Card>
          <Card id="zachowanie" className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="border-b border-border/70 px-5 py-4"><CardTitle className="text-sm">Zachowanie asystenta</CardTitle><CardDescription className="mt-1 text-xs">Ustaw reguły odpowiedzi i obsługi klienta.</CardDescription></CardHeader>
            <CardContent className="divide-y divide-border/70 px-5">
              {botSettings.map((setting) => <label key={setting.title} className="flex cursor-pointer items-center gap-3 py-4">
                <span className="min-w-0 flex-1"><span className="block text-xs font-medium">{setting.title}</span><span className="mt-1 block text-[10px] text-muted-foreground">{setting.detail}</span></span>
                <input type="checkbox" defaultChecked={setting.enabled} className="peer sr-only" aria-label={setting.title} />
                <span className="relative h-5 w-9 shrink-0 rounded-full bg-slate-200 transition-colors after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-emerald-500 peer-checked:after:translate-x-4 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring" />
              </label>)}
            </CardContent>
          </Card>
          <Card id="wiedza" className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="border-b border-border/70 px-5 py-4"><CardTitle className="text-sm">Baza wiedzy</CardTitle><CardDescription className="mt-1 text-xs">Informacje, z których asystent korzysta podczas rozmów.</CardDescription></CardHeader>
            <CardContent className="space-y-3 p-5">
              <div className="flex items-start gap-3 rounded-lg border border-border/70 p-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#eef1f8] text-primary"><Globe2 className="size-4" /></span><div className="min-w-0 flex-1"><p className="text-xs font-medium">Informacje o Studio Harmonia</p><p className="mt-1 text-[10px] text-muted-foreground">Oferta, godziny otwarcia, adres i dane kontaktowe</p></div><Badge variant="outline" className="text-[9px]">Aktywne</Badge></div>
              <div className="flex items-start gap-3 rounded-lg border border-border/70 p-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#eef1f8] text-primary"><MessageSquareText className="size-4" /></span><div className="min-w-0 flex-1"><p className="text-xs font-medium">Najczęstsze pytania (FAQ)</p><p className="mt-1 text-[10px] text-muted-foreground">12 odpowiedzi gotowych do wykorzystania przez AI</p></div><Badge variant="outline" className="text-[9px]">12 wpisów</Badge></div>
              <Button variant="outline" className="h-8 w-full gap-1.5 text-xs"><Plus className="size-3.5" /> Dodaj źródło wiedzy</Button>
            </CardContent>
          </Card>
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="border-b border-border/70 px-5 py-4"><CardTitle className="text-sm">Ton i styl komunikacji</CardTitle><CardDescription className="mt-1 text-xs">Wybierz styl najlepiej pasujący do Twojej marki.</CardDescription></CardHeader>
            <CardContent className="grid gap-2 p-5 sm:grid-cols-3">
              {["Przyjazny", "Profesjonalny", "Swobodny"].map((tone, index) => <button type="button" key={tone} className={`rounded-lg border p-3 text-left transition-colors ${index === 0 ? "border-primary bg-[#f5f7fc] ring-1 ring-primary/10" : "border-border/70 hover:bg-muted/40"}`}><span className="flex items-center justify-between text-xs font-medium">{tone}{index === 0 && <Check className="size-3.5 text-primary" />}</span><span className="mt-1.5 block text-[9px] leading-4 text-muted-foreground">{["Ciepły, pomocny i naturalny", "Rzeczowy, formalny i konkretny", "Lekki, bezpośredni i nowoczesny"][index]}</span></button>)}
            </CardContent>
          </Card>
        </div>
        <aside className="space-y-5">
          <Card id="kanaly" className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="px-4 py-4"><CardTitle className="text-sm">Kanały komunikacji</CardTitle><CardDescription className="mt-1 text-xs">Gdzie klienci mogą porozmawiać z AI.</CardDescription></CardHeader>
            <CardContent className="space-y-2 px-4 pb-4">
              {channels.map(({ name, detail, icon: ChannelIcon }) => <div key={name} className="flex items-center gap-2.5 rounded-lg border border-border/70 p-3"><span className="flex size-8 items-center justify-center rounded-lg bg-[#f2f4f8] text-primary"><ChannelIcon className="size-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-[10px] font-medium">{name}</p><p className="mt-0.5 truncate text-[9px] text-muted-foreground">{detail}</p></div><span className="size-1.5 rounded-full bg-emerald-500" /></div>)}
              <Button variant="outline" className="h-8 w-full gap-1.5 text-xs"><Plus className="size-3.5" /> Dodaj kanał</Button>
            </CardContent>
          </Card>
          <Card className="gap-3 border-border/80 bg-white py-4">
            <CardHeader className="px-4 py-0"><CardTitle className="flex items-center gap-2 text-sm"><Volume2 className="size-4" /> Głos sekretarki</CardTitle><CardDescription className="text-xs">Brzmienie połączeń telefonicznych.</CardDescription></CardHeader>
            <CardContent className="space-y-3 px-4"><div className="rounded-lg bg-[#f6f7fa] p-3"><p className="text-xs font-medium">Zofia · głos polski</p><p className="mt-1 text-[10px] text-muted-foreground">Ciepły i profesjonalny</p><div className="mt-3 flex items-center gap-1"><div className="h-1 w-8 rounded-full bg-primary" /><div className="h-2 w-1 rounded-full bg-primary" /><div className="h-3 w-1 rounded-full bg-primary" /><div className="h-1.5 w-1 rounded-full bg-primary" /><div className="h-2.5 w-1 rounded-full bg-primary" /><div className="h-1 w-1 rounded-full bg-primary" /><div className="ml-auto text-[9px] text-muted-foreground">0:08</div></div></div><Button variant="outline" className="h-8 w-full gap-1.5 text-xs"><Volume2 className="size-3.5" /> Odsłuchaj próbkę</Button></CardContent>
          </Card>
          <Card className="gap-3 border-primary/10 bg-[#f4f6fb] py-4">
            <CardContent className="px-4"><div className="flex items-center gap-2 text-xs font-semibold"><Sparkles className="size-4 text-primary" /> Wskazówka AI</div><p className="mt-2 text-[10px] leading-5 text-muted-foreground">Uzupełnij informacje o firmie i FAQ w sekcji Wiedza, aby asystent odpowiadał jeszcze trafniej.</p><Button variant="link" size="sm" className="mt-1 h-7 px-0 text-[10px]">Uzupełnij bazę wiedzy <ChevronDown className="size-3 -rotate-90" /></Button></CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
