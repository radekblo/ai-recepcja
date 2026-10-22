export const chatbotFlow = [
  { step: "01", title: "Powitanie", detail: "Przywitaj klienta i zapytaj, w czym możesz pomóc.", type: "Start" },
  { step: "02", title: "Rozpoznaj potrzebę", detail: "Dopasuj odpowiedź do intencji klienta.", type: "AI" },
  { step: "03", title: "Zaproponuj termin", detail: "Pokaż dostępne terminy w kalendarzu.", type: "Akcja" },
  { step: "04", title: "Potwierdź rezerwację", detail: "Podsumuj szczegóły i wyślij potwierdzenie.", type: "Koniec" },
] as const;

export const botSettings = [
  { title: "Ton komunikacji", detail: "Przyjazny i profesjonalny", enabled: true },
  { title: "Rezerwacja wizyt", detail: "Pozwól klientom umawiać wizyty przez chat", enabled: true },
  { title: "Przekazanie do człowieka", detail: "Przekaż rozmowę, gdy klient tego potrzebuje", enabled: true },
  { title: "Zbieranie danych kontaktowych", detail: "Zapytaj o imię i adres e-mail", enabled: false },
] as const;

export const callActivity = [
  { time: "09:42", caller: "Anna Nowak", reason: "Rezerwacja wizyty", duration: "2:34", status: "Obsłużone" },
  { time: "09:18", caller: "Numer prywatny", reason: "Pytanie o ofertę", duration: "1:48", status: "Obsłużone" },
  { time: "08:56", caller: "Piotr Zieliński", reason: "Prośba o kontakt", duration: "3:12", status: "Przekazane" },
] as const;

export const weeklyCallVolume = [
  { day: "Pon", value: 46 },
  { day: "Wt", value: 62 },
  { day: "Śr", value: 53 },
  { day: "Czw", value: 79 },
  { day: "Pt", value: 68 },
  { day: "Sob", value: 37 },
  { day: "Nd", value: 28 },
] as const;

export const analyticsSeries = [
  { day: "16 paź", value: 38 },
  { day: "17 paź", value: 52 },
  { day: "18 paź", value: 45 },
  { day: "19 paź", value: 72 },
  { day: "20 paź", value: 61 },
  { day: "21 paź", value: 84 },
  { day: "22 paź", value: 68 },
] as const;

export const analyticsChannels = [
  { name: "Chat na stronie", value: 58, color: "bg-primary" },
  { name: "Telefon", value: 27, color: "bg-sky-400" },
  { name: "WhatsApp", value: 15, color: "bg-emerald-400" },
] as const;
