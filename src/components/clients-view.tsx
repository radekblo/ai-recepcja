"use client";

import { useMemo, useState } from "react";
import { ArrowDownUp, Download, Plus, Search, SlidersHorizontal, UsersRound } from "lucide-react";
import { clients } from "@/lib/mock/customer-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ClientsView() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () => clients.filter((client) => `${client.name} ${client.email} ${client.phone}`.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-xs text-muted-foreground">Centrum obsługi</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Klienci</h1><p className="mt-1 text-sm text-muted-foreground">Zarządzaj kontaktami i historią relacji z klientami.</p></div>
        <div className="flex gap-2"><Button variant="outline" className="h-9 gap-2 bg-white text-xs"><Download className="size-3.5" /> Eksportuj</Button><Button className="h-9 gap-2 text-xs"><Plus className="size-3.5" /> Dodaj klienta</Button></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[["Wszyscy klienci", "1 284", "Łącznie w bazie"], ["Aktywni klienci", "986", "W ciągu ostatnich 90 dni"], ["Nowi w tym miesiącu", "64", "+12% vs. poprzedni miesiąc"]].map(([label, value, detail]) => (
          <Card key={label} className="gap-2 border-border/80 bg-white py-4"><CardContent className="px-4"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-semibold">{value}</p><p className="mt-1 text-[10px] text-muted-foreground">{detail}</p></CardContent></Card>
        ))}
      </div>
      <Card className="gap-0 border-border/80 bg-white py-0">
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 border-b border-border/70 px-5 py-4">
          <div><CardTitle className="text-sm">Lista klientów</CardTitle><CardDescription className="mt-1 text-xs">{filtered.length} kontaktów na tej stronie</CardDescription></div>
          <div className="flex w-full gap-2 sm:w-auto">
            <label className="relative min-w-0 flex-1 sm:w-64"><Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Szukaj klientów..." aria-label="Szukaj klientów" className="h-9 pl-9 text-xs" /></label>
            <Button variant="outline" size="icon" className="size-9 shrink-0" aria-label="Filtry"><SlidersHorizontal className="size-4" /></Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-xs">
              <thead className="bg-[#fafbfc] text-[10px] font-medium uppercase tracking-wide text-muted-foreground"><tr><th className="px-5 py-3"><span className="flex items-center gap-1">Klient <ArrowDownUp className="size-3" /></span></th><th className="px-4 py-3">Kontakt</th><th className="px-4 py-3">Wizyty</th><th className="px-4 py-3">Ostatni kontakt</th><th className="px-4 py-3">Status</th><th className="px-5 py-3" /></tr></thead>
              <tbody className="divide-y divide-border/70">
                {filtered.map((client) => <tr key={client.email} className="transition-colors hover:bg-muted/40">
                  <td className="px-5 py-3"><div className="flex items-center gap-3"><Avatar className="size-8"><AvatarFallback className="bg-[#e9edf6] text-[9px] font-semibold text-primary">{client.initials}</AvatarFallback></Avatar><div><p className="font-medium">{client.name}</p><p className="mt-0.5 text-[10px] text-muted-foreground">Klient od 2026</p></div></div></td>
                  <td className="px-4 py-3"><p>{client.email}</p><p className="mt-1 text-[10px] text-muted-foreground">{client.phone}</p></td>
                  <td className="px-4 py-3">{client.visits}</td><td className="px-4 py-3 text-muted-foreground">{client.lastContact}</td>
                  <td className="px-4 py-3"><Badge variant="outline" className={`text-[10px] ${client.status === "Nowy" ? "border-sky-200 bg-sky-50 text-sky-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>{client.status}</Badge></td>
                  <td className="px-5 py-3 text-right"><Button variant="ghost" size="sm" className="h-7 text-[10px]">Profil</Button></td>
                </tr>)}
                {filtered.length === 0 && <tr><td colSpan={6} className="p-10 text-center text-muted-foreground"><UsersRound className="mx-auto mb-2 size-5" />Nie znaleziono klientów.</td></tr>}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 py-3 text-[10px] text-muted-foreground">
            <span>Wyświetlono {filtered.length} z 1 284 klientów</span>
            <div className="flex gap-1"><Button variant="outline" size="sm" className="h-7 px-2 text-[10px]" disabled>Poprzednia</Button><Button size="sm" className="h-7 min-w-7 px-2 text-[10px]">1</Button><Button variant="outline" size="sm" className="h-7 min-w-7 px-2 text-[10px]">2</Button><Button variant="outline" size="sm" className="h-7 min-w-7 px-2 text-[10px]">3</Button><Button variant="outline" size="sm" className="h-7 px-2 text-[10px]">Następna</Button></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
