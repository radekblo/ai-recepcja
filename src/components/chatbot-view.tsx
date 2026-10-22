"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Bot, Check, ChevronDown, CircleHelp, Clock3, MoreHorizontal, Plus, Save, Sparkles } from "lucide-react";
import { botSettings, chatbotFlow } from "@/lib/mock/assistant-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatbotView() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-xs text-muted-foreground">Asystenci AI</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Chatbot builder</h1><p className="mt-1 text-sm text-muted-foreground">Zaprojektuj scenariusz rozmowy i ustaw zachowanie chatbota.</p></div>
        <div className="flex items-center gap-2"><Badge className="gap-1.5 border-emerald-200 bg-emerald-50 text-[10px] text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-500" /> Opublikowany</Badge><Button variant="outline" className="h-9 gap-2 bg-white text-xs"><MoreHorizontal className="size-4" /> Podgląd</Button><Button className="h-9 gap-2 text-xs"><Save className="size-3.5" /> Zapisz zmiany</Button></div>
      </div>
      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.8fr)]">
        <div className="space-y-5">
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 border-b border-border/70 px-5 py-4"><div><CardTitle className="text-sm">Scenariusz rozmowy</CardTitle><CardDescription className="mt-1 text-xs">Przeciągnij bloki, aby uporządkować rozmowę.</CardDescription></div><Button variant="outline" size="sm" className="h-8 gap-1.5 text-[10px]"><Plus className="size-3.5" /> Dodaj blok</Button></CardHeader>
            <CardContent className="space-y-0 p-5">
              {chatbotFlow.map((step, index) => <div key={step.step}>
                <button type="button" onClick={() => setSelectedStep(index)} className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-colors ${selectedStep === index ? "border-primary/40 bg-[#f5f7fc] ring-1 ring-primary/10" : "border-border/70 bg-white hover:bg-muted/40"}`}>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#edf1f8] text-[10px] font-semibold text-primary">{step.step}</span>
                  <span className="min-w-0 flex-1"><span className="flex items-center gap-2 text-xs font-semibold">{step.title}<Badge variant="outline" className="px-1.5 py-0 text-[9px] text-muted-foreground">{step.type}</Badge></span><span className="mt-1 block text-[10px] text-muted-foreground">{step.detail}</span></span>
                  <MoreHorizontal className="size-4 shrink-0 text-muted-foreground" />
                </button>
                {index < chatbotFlow.length - 1 && <div className="flex h-7 items-center pl-7"><span className="h-full w-px bg-border" /><ArrowDown className="ml-[-5px] size-2.5 text-muted-foreground" /></div>}
              </div>)}
            </CardContent>
          </Card>
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="px-5 py-4"><CardTitle className="text-sm">Podgląd rozmowy</CardTitle><CardDescription className="mt-1 text-xs">Tak chatbot odpowiada klientowi na stronie.</CardDescription></CardHeader>
            <CardContent className="border-t border-border/70 bg-[#fbfcfe] p-4">
              <div className="mx-auto max-w-lg space-y-3 rounded-xl border border-border/70 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 border-b border-border/70 pb-3"><span className="flex size-7 items-center justify-center rounded-lg bg-primary text-white"><Bot className="size-4" /></span><div><p className="text-[11px] font-semibold">Asystent Studio Harmonia</p><p className="text-[9px] text-emerald-700">Zwykle odpowiada od razu</p></div></div>
                <div className="flex gap-2"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#eef1f8] text-primary"><Bot className="size-3" /></span><p className="max-w-[85%] rounded-xl rounded-tl-sm bg-[#f1f3f7] px-3 py-2 text-[10px] leading-4">Dzień dobry! W czym mogę dzisiaj pomóc?</p></div>
                <div className="flex justify-end"><p className="rounded-xl rounded-tr-sm bg-primary px-3 py-2 text-[10px] text-white">Chciałbym umówić konsultację.</p></div>
                <div className="flex gap-2"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#eef1f8] text-primary"><Bot className="size-3" /></span><p className="max-w-[85%] rounded-xl rounded-tl-sm bg-[#f1f3f7] px-3 py-2 text-[10px] leading-4">Oczywiście! Sprawdzę dostępne terminy. Który dzień będzie dla Ciebie najlepszy?</p></div>
                <div className="flex items-center rounded-lg border border-border/70 px-3 py-2 text-[10px] text-muted-foreground">Napisz wiadomość... <ArrowRight className="ml-auto size-3" /></div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-5">
          <Card className="gap-0 border-border/80 bg-white py-0">
            <CardHeader className="border-b border-border/70 px-4 py-4"><CardTitle className="text-sm">Konfiguracja bloku</CardTitle><CardDescription className="mt-1 text-xs">{chatbotFlow[selectedStep].step} · {chatbotFlow[selectedStep].type}</CardDescription></CardHeader>
            <CardContent className="space-y-4 p-4">
              <div><label className="text-[10px] font-medium text-muted-foreground">Nazwa bloku</label><div className="mt-1.5 rounded-md border border-input px-3 py-2 text-xs">{chatbotFlow[selectedStep].title}</div></div>
              <div><label className="text-[10px] font-medium text-muted-foreground">Instrukcja dla asystenta</label><div className="mt-1.5 min-h-20 rounded-md border border-input px-3 py-2 text-xs leading-5 text-foreground/80">{chatbotFlow[selectedStep].detail}</div></div>
              <div className="rounded-lg border border-primary/10 bg-[#f6f8fc] p-3"><div className="flex items-center gap-1.5 text-[10px] font-semibold text-primary"><Sparkles className="size-3" /> Podpowiedź AI</div><p className="mt-1.5 text-[10px] leading-4 text-muted-foreground">Odpowiadaj krótko i naturalnie. Jeśli brakuje informacji, dopytaj klienta.</p></div>
              <Button variant="outline" className="h-8 w-full gap-1.5 text-xs"><CircleHelp className="size-3.5" /> Pomoc w konfiguracji</Button>
            </CardContent>
          </Card>
          <Card className="gap-3 border-border/80 bg-white py-4">
            <CardHeader className="px-4 py-0"><CardTitle className="text-sm">Zachowanie chatbota</CardTitle><CardDescription className="text-xs">Szybkie ustawienia asystenta</CardDescription></CardHeader>
            <CardContent className="space-y-3 px-4">
              {botSettings.slice(0, 3).map((setting) => <div key={setting.title} className="flex items-start gap-2.5"><span className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border ${setting.enabled ? "border-primary bg-primary text-white" : "border-input bg-white"}`}>{setting.enabled && <Check className="size-3" />}</span><div><p className="text-[10px] font-medium">{setting.title}</p><p className="mt-0.5 text-[9px] leading-4 text-muted-foreground">{setting.detail}</p></div></div>)}
              <Button variant="ghost" size="sm" className="h-7 w-full gap-1 text-[10px]">Więcej ustawień <ChevronDown className="size-3" /></Button>
            </CardContent>
          </Card>
          <Card className="border-emerald-200/80 bg-emerald-50/60 py-3 shadow-none"><CardContent className="flex items-center gap-2.5 px-4"><span className="flex size-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700"><Clock3 className="size-3.5" /></span><div><p className="text-[10px] font-semibold text-emerald-900">Chatbot działa</p><p className="text-[9px] text-emerald-800/70">Ostatnia publikacja: dzisiaj, 08:15</p></div><Badge className="ml-auto bg-white text-[9px] text-emerald-700">Live</Badge></CardContent></Card>
        </div>
      </div>
    </div>
  );
}
