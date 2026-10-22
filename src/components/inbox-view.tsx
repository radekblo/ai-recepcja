"use client";

import { useState } from "react";
import { Archive, CheckCheck, ChevronDown, MoreHorizontal, PhoneCall, Search, Send } from "lucide-react";
import { inboxMessages } from "@/lib/mock/customer-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InboxView() {
  const [selectedName, setSelectedName] = useState<(typeof inboxMessages)[number]["name"]>(inboxMessages[0].name);
  const selected = inboxMessages.find((message) => message.name === selectedName) ?? inboxMessages[0];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs text-muted-foreground">Centrum obsługi</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Skrzynka odbiorcza</h1><p className="mt-1 text-sm text-muted-foreground">Wiadomości ze wszystkich kanałów w jednym miejscu.</p></div><Button variant="outline" className="h-9 gap-2 bg-white text-xs">Wszystkie kanały <ChevronDown className="size-3.5" /></Button></div>
      <Card className="grid min-h-[650px] gap-0 overflow-hidden border-border/80 bg-white py-0 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="border-b border-border/70 lg:border-b-0 lg:border-r">
          <div className="border-b border-border/70 p-4">
            <div className="flex items-center justify-between"><h2 className="text-sm font-semibold">Wszystkie wiadomości</h2><Badge variant="secondary" className="text-[10px]">4</Badge></div>
            <label className="relative mt-3 block"><Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Szukaj..." aria-label="Szukaj wiadomości" className="h-9 pl-9 text-xs" /></label>
            <div className="mt-3 flex gap-1.5"><Badge className="bg-primary text-[10px]">Wszystkie</Badge><Badge variant="outline" className="text-[10px]">Nieprzeczytane</Badge></div>
          </div>
          <div className="divide-y divide-border/70">
            {inboxMessages.map((message) => <button type="button" key={message.name} onClick={() => setSelectedName(message.name)} className={`w-full p-3.5 text-left hover:bg-muted/50 ${selectedName === message.name ? "bg-[#f1f4fa]" : ""}`}>
              <div className="flex items-start gap-2.5"><Avatar className="size-9"><AvatarFallback className={`text-[10px] font-semibold ${message.color}`}>{message.initials}</AvatarFallback></Avatar><div className="min-w-0 flex-1">
                <div className="flex justify-between gap-2"><span className="truncate text-xs font-semibold">{message.name}</span><span className="text-[10px] text-muted-foreground">{message.time}</span></div>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{message.channel}</p><p className="mt-1 truncate text-[10px] text-foreground/70">{message.preview}</p>
                {message.unread && <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-medium text-primary"><span className="size-1.5 rounded-full bg-primary" /> Nowa wiadomość</span>}
              </div></div>
            </button>)}
          </div>
        </aside>
        <section className="flex min-h-[500px] flex-col">
          <div className="flex items-center justify-between border-b border-border/70 px-4 py-3.5 sm:px-5">
            <div className="flex items-center gap-3"><Avatar className="size-9"><AvatarFallback className={`text-[10px] font-semibold ${selected.color}`}>{selected.initials}</AvatarFallback></Avatar><div><h2 className="text-xs font-semibold">{selected.name}</h2><p className="mt-0.5 text-[10px] text-muted-foreground">{selected.channel} · Aktywna rozmowa</p></div></div>
            <div className="flex gap-1"><Button variant="ghost" size="icon" className="size-8" aria-label="Zadzwoń"><PhoneCall className="size-4" /></Button><Button variant="ghost" size="icon" className="size-8" aria-label="Archiwizuj"><Archive className="size-4" /></Button><Button variant="ghost" size="icon" className="size-8" aria-label="Więcej"><MoreHorizontal className="size-4" /></Button></div>
          </div>
          <div className="flex flex-1 flex-col gap-4 bg-[#fbfcfe] p-4 sm:p-6">
            <div className="self-center rounded-full border border-border/70 bg-white px-3 py-1 text-[9px] text-muted-foreground">Dzisiaj, 09:42</div>
            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm border border-border/70 bg-white px-4 py-3 text-xs leading-5 shadow-sm">{selected.preview}</div>
            <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-xs leading-5 text-white">Dzień dobry! Dziękujemy za wiadomość. Chętnie pomożemy — sprawdzę dostępne informacje i wrócę do Ciebie za chwilę.</div>
            <div className="flex items-center gap-1 self-end text-[9px] text-muted-foreground"><CheckCheck className="size-3 text-emerald-600" /> Odpowiedź asystenta AI</div>
            <div className="mt-auto flex items-center gap-2 self-center rounded-full border border-border/70 bg-white px-3 py-1.5 text-[10px] text-muted-foreground"><span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Asystent AI obsługuje rozmowę</div>
          </div>
          <div className="border-t border-border/70 p-3 sm:p-4"><div className="flex gap-2"><Input placeholder="Napisz wiadomość..." aria-label="Napisz wiadomość" className="h-10 text-xs" /><Button size="icon" className="size-10 shrink-0" aria-label="Wyślij"><Send className="size-4" /></Button></div><p className="mt-2 text-right text-[9px] text-muted-foreground">Wysyłanie wiadomości jest wyłączone w wersji demo</p></div>
        </section>
      </Card>
    </div>
  );
}
