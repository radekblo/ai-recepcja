"use client";

import { useMemo, useState } from "react";
import { Bot, CheckCheck, ChevronDown, Clock3, MessageSquareText, MoreHorizontal, PhoneCall, Search, Send, Sparkles } from "lucide-react";
import { conversations, type Conversation } from "@/lib/mock/customer-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ConversationsView() {
  const [selectedName, setSelectedName] = useState<Conversation["name"]>(conversations[0].name);
  const [search, setSearch] = useState("");
  const selected = conversations.find((conversation) => conversation.name === selectedName) ?? conversations[0];
  const filtered = useMemo(
    () => conversations.filter((conversation) => `${conversation.name} ${conversation.topic}`.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">Centrum obsługi</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Rozmowy</h1>
          <p className="mt-1 text-sm text-muted-foreground">Śledź rozmowy prowadzone przez asystentów AI.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-9 gap-2 bg-white text-xs">Wszystkie kanały <ChevronDown className="size-3.5" /></Button>
          <Button className="h-9 gap-2 text-xs"><MessageSquareText className="size-3.5" /> Nowa rozmowa</Button>
        </div>
      </div>
      <div className="grid min-h-[640px] gap-4 xl:grid-cols-[minmax(280px,0.82fr)_minmax(400px,1.45fr)_minmax(230px,0.7fr)]">
        <Card className="gap-0 overflow-hidden border-border/80 bg-white py-0">
          <div className="border-b border-border/70 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Skrzynka rozmów</h2>
              <Badge variant="secondary" className="text-[10px]">12 aktywnych</Badge>
            </div>
            <label className="relative mt-3 block">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Szukaj rozmów..." className="h-9 pl-9 text-xs" aria-label="Szukaj rozmów" />
            </label>
            <div className="mt-3 flex gap-1.5">
              <Badge className="bg-primary text-[10px]">Wszystkie</Badge>
              <Badge variant="outline" className="text-[10px]">Nieprzeczytane</Badge>
              <Badge variant="outline" className="text-[10px]">Przypisane</Badge>
            </div>
          </div>
          <div className="divide-y divide-border/70">
            {filtered.map((conversation) => (
              <button key={conversation.name} type="button" onClick={() => setSelectedName(conversation.name)} className={`w-full p-3.5 text-left transition-colors hover:bg-muted/60 ${selectedName === conversation.name ? "bg-[#f1f4fa]" : ""}`}>
                <div className="flex items-start gap-2.5">
                  <Avatar className="size-9 shrink-0"><AvatarFallback className="bg-[#e9edf6] text-[10px] font-semibold text-primary">{conversation.initials}</AvatarFallback></Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-xs font-semibold">{conversation.name}</span>
                      <span className="text-[10px] tabular-nums text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="mt-0.5 truncate text-[11px] font-medium text-foreground/80">{conversation.topic}</p>
                    <p className="mt-1 truncate text-[10px] text-muted-foreground">{conversation.preview}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground">{conversation.channel}</span>
                      <Badge variant="outline" className={`px-1.5 py-0 text-[9px] ${conversation.status === "Nowa" ? "border-amber-200 bg-amber-50 text-amber-800" : conversation.status === "W toku" ? "border-sky-200 bg-sky-50 text-sky-800" : "text-muted-foreground"}`}>{conversation.status}</Badge>
                    </div>
                  </div>
                </div>
              </button>
            ))}
            {filtered.length === 0 && <p className="p-5 text-center text-xs text-muted-foreground">Brak rozmów pasujących do wyszukiwania.</p>}
          </div>
        </Card>

        <Card className="flex min-h-[640px] flex-col gap-0 overflow-hidden border-border/80 bg-white py-0">
          <div className="flex items-center justify-between border-b border-border/70 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <Avatar className="size-9"><AvatarFallback className="bg-[#e9edf6] text-[10px] font-semibold text-primary">{selected.initials}</AvatarFallback></Avatar>
              <div><h2 className="text-xs font-semibold">{selected.name}</h2><p className="mt-0.5 text-[10px] text-muted-foreground">Klient od marca 2026 · {selected.channel}</p></div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="size-8 text-muted-foreground" aria-label="Zadzwoń do klienta"><PhoneCall className="size-4" /></Button>
              <Button variant="ghost" size="icon" className="size-8 text-muted-foreground" aria-label="Więcej opcji"><MoreHorizontal className="size-4" /></Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 py-4 text-[10px] text-muted-foreground"><span className="h-px flex-1 bg-border" />DZISIAJ, 09:40<span className="h-px flex-1 bg-border" /></div>
          <div className="flex flex-1 flex-col gap-4 px-5 pb-5">
            <div className="flex items-end gap-2.5">
              <Avatar className="size-7"><AvatarFallback className="bg-[#e9edf6] text-[9px] font-semibold text-primary">{selected.initials}</AvatarFallback></Avatar>
              <div className="max-w-[82%] rounded-2xl rounded-bl-sm bg-[#f0f2f7] px-3.5 py-2.5 text-xs leading-5 text-foreground/90">{selected.preview}</div>
            </div>
            <div className="flex items-end justify-end gap-2.5">
              <div className="max-w-[82%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-xs leading-5 text-white">Dzień dobry! Chętnie pomogę. Mam dostępne terminy w przyszłym tygodniu — czy któryś dzień pasuje Pani najbardziej?</div>
              <span className="flex size-7 items-center justify-center rounded-full bg-[#e9edf6] text-primary"><Bot className="size-3.5" /></span>
            </div>
            <div className="flex items-end gap-2.5">
              <Avatar className="size-7"><AvatarFallback className="bg-[#e9edf6] text-[9px] font-semibold text-primary">{selected.initials}</AvatarFallback></Avatar>
              <div className="max-w-[82%] rounded-2xl rounded-bl-sm bg-[#f0f2f7] px-3.5 py-2.5 text-xs leading-5 text-foreground/90">Najlepiej w środę po południu, jeśli jest taka możliwość.</div>
            </div>
            <div className="mt-auto rounded-lg border border-emerald-200 bg-emerald-50/70 p-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-800"><Sparkles className="size-3.5" /> Podsumowanie AI</div>
              <p className="mt-1.5 text-[11px] leading-5 text-emerald-950/80">Klientka chce umówić konsultację w środę po południu. Asystent sprawdza dostępność terminów.</p>
            </div>
          </div>
          <div className="border-t border-border/70 p-3">
            <div className="flex gap-2">
              <Input placeholder="Napisz wiadomość..." className="h-10 text-xs" aria-label="Napisz wiadomość" />
              <Button size="icon" className="size-10 shrink-0" aria-label="Wyślij wiadomość"><Send className="size-4" /></Button>
            </div>
            <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-muted-foreground"><span className="flex items-center gap-1"><Bot className="size-3" /> Asystent AI odpowiada</span><span>Wysyłanie wiadomości jest wyłączone w wersji demo</span></div>
          </div>
        </Card>

        <Card className="gap-0 border-border/80 bg-white py-0">
          <div className="border-b border-border/70 p-4"><h2 className="text-sm font-semibold">Szczegóły rozmowy</h2></div>
          <div className="space-y-4 p-4">
            <div className="flex flex-col items-center border-b border-border/70 pb-4 text-center">
              <Avatar className="size-12"><AvatarFallback className="bg-[#e9edf6] font-semibold text-primary">{selected.initials}</AvatarFallback></Avatar>
              <p className="mt-2 text-xs font-semibold">{selected.name}</p><p className="mt-0.5 text-[10px] text-muted-foreground">Klient</p>
              <Button variant="outline" size="sm" className="mt-3 h-8 w-full text-[10px]">Zobacz profil klienta</Button>
            </div>
            <div className="space-y-3 text-[11px]">
              <div className="flex justify-between gap-2"><span className="text-muted-foreground">Status</span><Badge className="bg-emerald-50 text-[9px] text-emerald-700">Aktywna</Badge></div>
              <div className="flex justify-between gap-2"><span className="text-muted-foreground">Kanał</span><span className="font-medium">{selected.channel}</span></div>
              <div className="flex justify-between gap-2"><span className="text-muted-foreground">Rozpoczęto</span><span className="font-medium">09:40</span></div>
              <div className="flex justify-between gap-2"><span className="text-muted-foreground">Przypisano do</span><span className="font-medium">AI sekretarka</span></div>
            </div>
            <div className="rounded-lg bg-[#f6f7fa] p-3"><p className="flex items-center gap-1.5 text-[10px] font-semibold"><Clock3 className="size-3" /> Historia</p><p className="mt-2 text-[10px] leading-5 text-muted-foreground">Ostatni kontakt: dziś o 09:42<br />Łącznie rozmów: 8</p></div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground"><CheckCheck className="size-3.5 text-emerald-600" /> Przetwarzane przez AI</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
