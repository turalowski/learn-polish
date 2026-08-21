export type Question = {
  id: number
  category: string
  question: string
  answer: string
}

export type Deck = {
  slug: string
  title: string
  description: string
  emoji: string
  accent: string
  questions: Question[]
}

const usefulSentences: Question[] = [
  { id: 1, category: "Useful sentences", question: "We usually rest here", answer: "Zwykle tutaj odpoczywamy" },
  { id: 2, category: "Useful sentences", question: "They live not far from here", answer: "Oni mieszkają niedaleko stąd" },
  { id: 3, category: "Useful sentences", question: "Thanks, but we are in a hurry", answer: "Dzięki, ale się spieszymy" },
  {
    id: 4,
    category: "Useful sentences",
    question: "I understand that it's important but he is resting now",
    answer: "Rozumiem, że to jest ważne, ale on teraz odpoczywa",
  },
  {
    id: 5,
    category: "Useful sentences",
    question: "I'm sorry, your flight got cancelled.",
    answer: "Przykro mi. Twój lot jest odwołany",
  },
  { id: 6, category: "Useful sentences", question: "Do you come here often?", answer: "Często tu przychodzisz?" },
  {
    id: 7,
    category: "Useful sentences",
    question: "My Polish isn't good. Do you know English?",
    answer: "Mój polski nie jest dobry. Znasz angielski?",
  },
  {
    id: 8,
    category: "Useful sentences",
    question: "We live in the city centre. At weekends, the noise is terrible.",
    answer: "Mieszkamy w centrum miasta. W weekendy hałas jest okropny.",
  },
  {
    id: 9,
    category: "Useful sentences",
    question: "Be careful. The floor is wet!",
    answer: "Uważaj! Podłoga jest mokra.",
  },
  {
    id: 10,
    category: "Useful sentences",
    question: "Your holiday was long, right?",
    answer: "Twój urlop był długi, prawda?",
  },
  { id: 11, category: "Useful sentences", question: "Call me", answer: "Zadzwoń do mnie" },
  {
    id: 12,
    category: "Useful sentences",
    question: "Fortunately, it's not a big mistake",
    answer: "Na szczęście to nie jest duży błąd",
  },
  {
    id: 13,
    category: "Useful sentences",
    question: "Excuse me, this spoon is dirty",
    answer: "Przepraszam, ta łyżka jest brudna",
  },
  {
    id: 14,
    category: "Useful sentences",
    question: "It's good to see you. I am sad when I am alone",
    answer: "Dobrze cię widzieć. Jestem smutny, kiedy jestem sam.",
  },
  {
    id: 15,
    category: "Useful sentences",
    question: "Is the shop open today? No, it's closed on Sundays",
    answer: "Czy sklep jest dzisiaj otwarty? Nie, jest zamknięty w niedziele.",
  },
  {
    id: 16,
    category: "Useful sentences",
    question: "My sister is similar to Adam.",
    answer: "Moja siostra jest podobna do Adama.",
  },
  {
    id: 17,
    category: "Useful sentences",
    question: "I can see that you are very bored.",
    answer: "Widzę, że jesteś bardzo znudzony",
  },
  {
    id: 18,
    category: "Useful sentences",
    question: "Is there an ATM nearby? I want to withdraw some money",
    answer: "Czy jest tu w pobliżu bankomat? Chcę wypłacić pieniądze.",
  },
  {
    id: 19,
    category: "Useful sentences",
    question: "Honey, is that a new handbag? Have you been shopping again?",
    answer: "Kochanie, czy to jest nowa torebka? Czy znowu coś kupiłaś?",
  },
  {
    id: 20,
    category: "Useful sentences",
    question: "I hope your residence permit card will be ready soon. Fingers crossed",
    answer: "Mam nadzieję, że Twoja karta pobytu będzie wkrótce gotowa. Trzymam kciuki.",
  },
  {
    id: 21,
    category: "Useful sentences",
    question: "Excuse me, can I borrow a pen, please?",
    answer: "Przepraszam, czy mogę pożyczyć długopis?",
  },
  {
    id: 22,
    category: "Useful sentences",
    question: "Can I have hot chocolate, please?",
    answer: "Czy mogę prosić gorącą czekoladę?",
  },
  {
    id: 23,
    category: "Useful sentences",
    question: "Can you pass me the salt and pepper, please?",
    answer: "Czy możesz mi podać sól i pieprz?",
  },
  { id: 24, category: "Useful sentences", question: "Can you bring some ketchup?", answer: "Możesz przynieść ketchup?" },
  {
    id: 25,
    category: "Useful sentences",
    question: "The only food I have is yesterday's leftovers",
    answer: "Mam tylko resztki jedzenia z wczoraj",
  },
  { id: 26, category: "Useful sentences", question: "Do you take sugar?", answer: "Słodzisz?" },
  {
    id: 27,
    category: "Useful sentences",
    question: "The crepe was tasty, thank you",
    answer: "Naleśnik był smaczny, dziękuję",
  },
  {
    id: 28,
    category: "Useful sentences",
    question: "Can I have the bill, please?",
    answer: "Czy mogę prosić o rachunek?",
  },
  {
    id: 29,
    category: "Useful sentences",
    question: "The same for me, please.",
    answer: "Poproszę to samo dla mnie.",
  },
  {
    id: 30,
    category: "Useful sentences",
    question: "My treat. Can I have the bill, please?",
    answer: "Ja stawiam. Mogę prosić o rachunek?",
  },
  { id: 31, category: "Useful sentences", question: "May I join you?", answer: "Mogę się dosiąść?" },
  { id: 32, category: "Useful sentences", question: "Shall we split the bill?", answer: "Każdy płaci osobno?" },
  { id: 33, category: "Useful sentences", question: "Hello! We want to see the menu", answer: "Cześć! Chcemy zobaczyć menu" },
  { id: 34, category: "Useful sentences", question: "I want to leave a tip", answer: "Chcę zostawić napiwek" },
  { id: 35, category: "Useful sentences", question: "Is it already dinnertime?", answer: "Czy to już pora obiadowa?" },
  {
    id: 36,
    category: "Useful sentences",
    question: "The tea is good for a cold",
    answer: "Ta herbata jest dobra na przeziębienie",
  },
  {
    id: 37,
    category: "Useful sentences",
    question: "Is this freshly squeezed juice?",
    answer: "Czy to jest świeżo wyciskany sok?",
  },
  {
    id: 38,
    category: "Useful sentences",
    question: "There's nothing better than hot chocolate.",
    answer: "Nie ma nic lepszego niż gorąca czekolada",
  },
  {
    id: 39,
    category: "Useful sentences",
    question: "It's the strawberry season now",
    answer: "Teraz jest sezon na truskawki",
  },
  {
    id: 40,
    category: "Useful sentences",
    question: "Should I buy dried or fresh tomatoes?",
    answer: "Czy kupić suszone, czy świeże pomidory?",
  },
  { id: 41, category: "Useful sentences", question: "My brother is in his 30s", answer: "Mój brat jest po trzydziestce" },
  {
    id: 42,
    category: "Useful sentences",
    question: "My mother cooks delicious food.",
    answer: "Moja mama gotuje pyszne obiady",
  },
  {
    id: 43,
    category: "Useful sentences",
    question: "My father likes cooking traditional dishes",
    answer: "Mój tata lubi gotować tradycyjne potrawy",
  },
  {
    id: 44,
    category: "Useful sentences",
    question: "Our father is very hardworking",
    answer: "Nasz ojciec jest bardzo pracowity",
  },
  {
    id: 45,
    category: "Useful sentences",
    question: "I am happy that I have such wonderful siblings",
    answer: "Jestem szczęśliwy, że mam tak wspaniałe rodzeństwo",
  },
  { id: 46, category: "Useful sentences", question: "His wife is pregnant", answer: "Jego żona jest w ciąży" },
  {
    id: 47,
    category: "Useful sentences",
    question: "My mother-in-law makes very good cakes",
    answer: "Moja teściowa robi bardzo dobre ciasta",
  },
  {
    id: 48,
    category: "Useful sentences",
    question: "Your daughter looks like a model",
    answer: "Twoja córka wygląda jak modelka",
  },
  {
    id: 49,
    category: "Useful sentences",
    question: "Your dad has his birthday soon, right?",
    answer: "Twój tata ma wkrótce urodziny, prawda?",
  },
  {
    id: 50,
    category: "Useful sentences",
    question: "I think that orange and navy blue match quite well.",
    answer: "Myślę, że pomarańczowy i granatowy pasują całkiem dobrze",
  },
  {
    id: 51,
    category: "Useful sentences",
    question: "I can't afford a new suit. Do you think my old green one will be good?",
    answer: "Nie stać mnie na nowy garnitur. Czy myślisz, że mój stary zielony będzie dobry?",
  },
  {
    id: 52,
    category: "Useful sentences",
    question: "Can I increase/decrease the temperature?",
    answer: "Czy mogę zwiększyć/zmniejszyć temperaturę?",
  },
  {
    id: 53,
    category: "Useful sentences",
    question: "I have an EU Blue Card - residence for a highly qualified worker",
    answer: "Mam niebieską kartę UE - na pobyt dla pracownika wysokokwalifikowanego",
  },
]

const atTheOffice: Question[] = [
  { id: 1, category: "At the office", question: "I would like to submit an application.", answer: "Chciałbym złożyć wniosek." },
  { id: 2, category: "At the office", question: "Which counter should I go to?", answer: "Do którego okienka mam podejść?" },
  { id: 3, category: "At the office", question: "Do I need to make an appointment?", answer: "Czy muszę umówić się na wizytę?" },
  { id: 4, category: "At the office", question: "What documents do I need?", answer: "Jakie dokumenty są potrzebne?" },
  { id: 5, category: "At the office", question: "Where can I get a queue number?", answer: "Gdzie mogę pobrać numerek?" },
  { id: 6, category: "At the office", question: "I want to register my residence.", answer: "Chcę się zameldować." },
  { id: 7, category: "At the office", question: "Is this form filled in correctly?", answer: "Czy ten formularz jest wypełniony poprawnie?" },
  { id: 8, category: "At the office", question: "How long will it take?", answer: "Jak długo to potrwa?" },
  { id: 9, category: "At the office", question: "Can I pay the fee by card?", answer: "Czy mogę zapłacić opłatę kartą?" },
  { id: 10, category: "At the office", question: "I need to renew my residence card.", answer: "Muszę przedłużyć kartę pobytu." },
  { id: 11, category: "At the office", question: "Where can I make a photocopy?", answer: "Gdzie mogę zrobić kserokopię?" },
  { id: 12, category: "At the office", question: "Please sign here.", answer: "Proszę podpisać tutaj." },
]

const atTheDoctor: Question[] = [
  { id: 1, category: "At the doctor", question: "I don't feel well.", answer: "Źle się czuję." },
  { id: 2, category: "At the doctor", question: "I have a headache.", answer: "Boli mnie głowa." },
  { id: 3, category: "At the doctor", question: "I have a fever.", answer: "Mam gorączkę." },
  { id: 4, category: "At the doctor", question: "I would like to make an appointment with a doctor.", answer: "Chciałbym umówić się do lekarza." },
  { id: 5, category: "At the doctor", question: "Where is the emergency room?", answer: "Gdzie jest izba przyjęć?" },
  { id: 6, category: "At the doctor", question: "I am allergic to penicillin.", answer: "Jestem uczulony na penicylinę." },
  { id: 7, category: "At the doctor", question: "I have a sore throat.", answer: "Boli mnie gardło." },
  { id: 8, category: "At the doctor", question: "Do I need a prescription?", answer: "Czy potrzebuję recepty?" },
  { id: 9, category: "At the doctor", question: "How often should I take this medicine?", answer: "Jak często mam brać to lekarstwo?" },
  { id: 10, category: "At the doctor", question: "I have been coughing for a week.", answer: "Kaszlę od tygodnia." },
  { id: 11, category: "At the doctor", question: "Can you call an ambulance?", answer: "Czy może pan wezwać karetkę?" },
  { id: 12, category: "At the doctor", question: "Where is the nearest pharmacy?", answer: "Gdzie jest najbliższa apteka?" },
]

const onHoliday: Question[] = [
  { id: 1, category: "On holiday", question: "Where is the nearest beach?", answer: "Gdzie jest najbliższa plaża?" },
  { id: 2, category: "On holiday", question: "How do I get to the city centre?", answer: "Jak dojść do centrum miasta?" },
  { id: 3, category: "On holiday", question: "Do you have a room available?", answer: "Czy mają państwo wolny pokój?" },
  { id: 4, category: "On holiday", question: "What time is check-out?", answer: "O której godzinie jest wymeldowanie?" },
  { id: 5, category: "On holiday", question: "Can you recommend a good restaurant?", answer: "Czy może pan polecić dobrą restaurację?" },
  { id: 6, category: "On holiday", question: "Is breakfast included?", answer: "Czy śniadanie jest wliczone?" },
  { id: 7, category: "On holiday", question: "How much is a ticket to the museum?", answer: "Ile kosztuje bilet do muzeum?" },
  { id: 8, category: "On holiday", question: "Where can I rent a bike?", answer: "Gdzie mogę wypożyczyć rower?" },
  { id: 9, category: "On holiday", question: "What's the weather forecast for tomorrow?", answer: "Jaka jest prognoza pogody na jutro?" },
  { id: 10, category: "On holiday", question: "We are lost, can you help us?", answer: "Zgubiliśmy się, czy może nam pan pomóc?" },
  { id: 11, category: "On holiday", question: "Can I take a photo here?", answer: "Czy mogę tu zrobić zdjęcie?" },
  { id: 12, category: "On holiday", question: "What time does the last bus leave?", answer: "O której godzinie odjeżdża ostatni autobus?" },
]

const atTheRestaurant: Question[] = [
  { id: 1, category: "At the restaurant", question: "A table for two, please.", answer: "Poproszę stolik dla dwóch osób." },
  { id: 2, category: "At the restaurant", question: "Can I see the menu, please?", answer: "Czy mogę prosić menu?" },
  { id: 3, category: "At the restaurant", question: "What do you recommend?", answer: "Co pan poleca?" },
  { id: 4, category: "At the restaurant", question: "I am a vegetarian.", answer: "Jestem wegetarianinem." },
  { id: 5, category: "At the restaurant", question: "Does this dish contain nuts?", answer: "Czy to danie zawiera orzechy?" },
  { id: 6, category: "At the restaurant", question: "I would like to order now.", answer: "Chciałbym teraz zamówić." },
  { id: 7, category: "At the restaurant", question: "Can I have a glass of water, please?", answer: "Czy mogę prosić o szklankę wody?" },
  { id: 8, category: "At the restaurant", question: "This is not what I ordered.", answer: "To nie jest to, co zamówiłem." },
  { id: 9, category: "At the restaurant", question: "The food is delicious.", answer: "Jedzenie jest pyszne." },
  { id: 10, category: "At the restaurant", question: "Can I have the bill, please?", answer: "Czy mogę prosić o rachunek?" },
  { id: 11, category: "At the restaurant", question: "Is service included?", answer: "Czy obsługa jest wliczona?" },
  { id: 12, category: "At the restaurant", question: "Can we sit outside?", answer: "Czy możemy usiąść na zewnątrz?" },
]

const shopping: Question[] = [
  { id: 1, category: "Shopping", question: "How much does it cost?", answer: "Ile to kosztuje?" },
  { id: 2, category: "Shopping", question: "Do you have this in a bigger size?", answer: "Czy jest to w większym rozmiarze?" },
  { id: 3, category: "Shopping", question: "Can I try it on?", answer: "Czy mogę to przymierzyć?" },
  { id: 4, category: "Shopping", question: "Where is the fitting room?", answer: "Gdzie jest przymierzalnia?" },
  { id: 5, category: "Shopping", question: "Do you accept card payments?", answer: "Czy przyjmujecie płatność kartą?" },
  { id: 6, category: "Shopping", question: "Is there a discount on this?", answer: "Czy jest na to zniżka?" },
  { id: 7, category: "Shopping", question: "I'm just looking, thank you.", answer: "Tylko oglądam, dziękuję." },
  { id: 8, category: "Shopping", question: "Can I get a receipt?", answer: "Czy mogę dostać paragon?" },
  { id: 9, category: "Shopping", question: "Where is the checkout?", answer: "Gdzie jest kasa?" },
  { id: 10, category: "Shopping", question: "Do you have this in another colour?", answer: "Czy jest to w innym kolorze?" },
  { id: 11, category: "Shopping", question: "It's too expensive.", answer: "To jest za drogie." },
  { id: 12, category: "Shopping", question: "I would like to return this.", answer: "Chciałbym to zwrócić." },
]

const gettingAround: Question[] = [
  { id: 1, category: "Getting around", question: "Where is the nearest bus stop?", answer: "Gdzie jest najbliższy przystanek autobusowy?" },
  { id: 2, category: "Getting around", question: "One ticket to Kraków, please.", answer: "Poproszę jeden bilet do Krakowa." },
  { id: 3, category: "Getting around", question: "Which platform does the train leave from?", answer: "Z którego peronu odjeżdża pociąg?" },
  { id: 4, category: "Getting around", question: "Is this seat taken?", answer: "Czy to miejsce jest zajęte?" },
  { id: 5, category: "Getting around", question: "Does this bus go to the centre?", answer: "Czy ten autobus jedzie do centrum?" },
  { id: 6, category: "Getting around", question: "What time is the next train?", answer: "O której jest następny pociąg?" },
  { id: 7, category: "Getting around", question: "How much is a taxi to the airport?", answer: "Ile kosztuje taksówka na lotnisko?" },
  { id: 8, category: "Getting around", question: "I would like to buy a monthly ticket.", answer: "Chciałbym kupić bilet miesięczny." },
  { id: 9, category: "Getting around", question: "Where do I have to change?", answer: "Gdzie muszę się przesiąść?" },
  { id: 10, category: "Getting around", question: "Is this the right way to the station?", answer: "Czy to jest dobra droga na dworzec?" },
  { id: 11, category: "Getting around", question: "My train is delayed.", answer: "Mój pociąg jest opóźniony." },
  { id: 12, category: "Getting around", question: "Can you tell me when to get off?", answer: "Czy może mi pan powiedzieć, kiedy wysiąść?" },
]

const verbs: Question[] = [
  { id: 1, category: "Odwiedzać — to visit", question: "I often visit my family on weekends.", answer: "Często odwiedzam rodzinę w weekendy." },
  { id: 2, category: "Odwiedzać — to visit", question: "I rarely visit friends because everyone is busy with work.", answer: "Rzadko odwiedzam znajomych, bo wszyscy są zajęci pracą." },
  { id: 3, category: "Zwiedzać — to explore", question: "Yesterday I toured the new contemporary art museum.", answer: "Wczoraj zwiedzałem nowe muzeum sztuki współczesnej." },
  { id: 4, category: "Zwiedzać — to explore", question: "I like to explore cities on foot because I see the most that way.", answer: "Lubię zwiedzać miasta pieszo, bo wtedy widzę najwięcej." },
  { id: 5, category: "Dzielić — to share", question: "I like to share food with my friends.", answer: "Lubię dzielić się jedzeniem z przyjaciółmi." },
  { id: 6, category: "Dzielić — to share", question: "We need to share the responsibilities at home equally.", answer: "Musimy równo dzielić obowiązki w domu." },
  { id: 7, category: "Dzielić — to share", question: "When I was a child, I had to share a room with my brother.", answer: "Kiedy byłem dzieckiem, musiałem dzielić pokój z bratem." },
  { id: 8, category: "Kłaść — to put, place", question: "I’m putting the book on the table.", answer: "Kładę książkę na stole." },
  { id: 9, category: "Kłaść — to put, place", question: "Every day I put the plates on the table before dinner.", answer: "Codziennie kładę talerze na stół przed kolacją." },
  { id: 10, category: "Kłaść — to put, place", question: "I usually go to bed at midnight.", answer: "Zwykle kładę się spać o północy." },
  { id: 11, category: "Narzekać — to complain", question: "He always complains about food in restaurants.", answer: "On zawsze narzeka na jedzenie w restauracjach." },
  { id: 12, category: "Narzekać — to complain", question: "Recently he’s been complaining about his health.", answer: "Ostatnio często narzeka na zdrowie." },
  { id: 13, category: "Narzekać — to complain", question: "Stop complaining about the situation and try to change something.", answer: "Przestań narzekać na sytuację i spróbuj coś zmienić." },
  { id: 14, category: "Nosić — to carry, wear", question: "I like wearing comfortable clothes.", answer: "Lubię nosić wygodne ubrania." },
  { id: 15, category: "Nosić — to carry, wear", question: "I always carry my bag on my left hand.", answer: "Zawsze noszę torbę na lewej ręce." },
  { id: 16, category: "Wynosić — to take out", question: "I have to take out the trash every other day.", answer: "Muszę wynosić śmieci co drugi dzień." },
  { id: 17, category: "Wynosić — to take out", question: "I’ll help you carry things out of the car.", answer: "Pomogę ci wynosić rzeczy z samochodu." },
  { id: 18, category: "Odkrywać — to discover", question: "I like discovering new places in the city.", answer: "Lubię odkrywać nowe miejsca w mieście." },
  { id: 19, category: "Odkrywać — to discover", question: "The teacher helped him discover his talent for music.", answer: "Nauczyciel pomógł mu odkrywać jego talent do muzyki." },
  { id: 20, category: "Poznawać — to meet, learn", question: "I enjoy meeting new people at events.", answer: "Lubię poznawać nowych ludzi na wydarzeniach." },
  { id: 21, category: "Poznawać — to meet, learn", question: "I’m learning Polish step by step.", answer: "Poznaję polski krok po kroku." },
  { id: 22, category: "Nienawidzić — to hate", question: "He hates winter because he’s always cold.", answer: "On nienawidzi zimy, bo zawsze marznie." },
  { id: 23, category: "Nienawidzić — to hate", question: "I hate waiting in long lines.", answer: "Nienawidzę czekać w długich kolejkach." },
  { id: 24, category: "Niszczyć — to destroy", question: "Children shouldn’t destroy their toys.", answer: "Dzieci nie powinny niszczyć swoich zabawek." },
  { id: 25, category: "Niszczyć — to destroy", question: "We need to destroy old company documents.", answer: "Musimy niszczyć stare dokumenty firmowe." },
]

export const decks: Deck[] = [
  {
    slug: "verbs",
    title: "Verbs (czasowniki)",
    description: "Learn useful Polish verbs through natural, everyday sentences.",
    emoji: "book",
    accent: "oklch(0.55 0.16 260)",
    questions: verbs,
  },
  {
    slug: "useful-sentences",
    title: "Useful sentences",
    description: "Everyday Polish phrases for real conversations.",
    emoji: "languages",
    accent: "oklch(0.62 0.19 27)",
    questions: usefulSentences,
  },
  {
    slug: "at-the-office",
    title: "At the office (w urzędzie)",
    description: "Handle paperwork, applications and residence formalities.",
    emoji: "building",
    accent: "oklch(0.55 0.16 260)",
    questions: atTheOffice,
  },
  {
    slug: "at-the-doctor",
    title: "At the doctor (u lekarza)",
    description: "Describe symptoms and get help at the clinic or hospital.",
    emoji: "hospital",
    accent: "oklch(0.6 0.13 175)",
    questions: atTheDoctor,
  },
  {
    slug: "on-holiday",
    title: "On holiday (na wakacjach)",
    description: "Getting around, hotels and sightseeing while travelling.",
    emoji: "plane",
    accent: "oklch(0.7 0.15 70)",
    questions: onHoliday,
  },
  {
    slug: "at-the-restaurant",
    title: "At the restaurant (w restauracji)",
    description: "Order food, ask about dishes and pay the bill.",
    emoji: "utensils",
    accent: "oklch(0.65 0.18 40)",
    questions: atTheRestaurant,
  },
  {
    slug: "shopping",
    title: "Shopping (zakupy)",
    description: "Prices, sizes, fitting rooms and paying at the checkout.",
    emoji: "shopping",
    accent: "oklch(0.55 0.2 300)",
    questions: shopping,
  },
  {
    slug: "getting-around",
    title: "Getting around (transport)",
    description: "Buses, trains, tickets and asking for directions.",
    emoji: "bus",
    accent: "oklch(0.55 0.15 230)",
    questions: gettingAround,
  },
]

export function getDeck(slug: string): Deck | undefined {
  return decks.find((d) => d.slug === slug)
}
