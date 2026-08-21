import Link from "next/link"
import {
  Brain,
  Globe,
  FlaskConical,
  BookOpen,
  Languages,
  Building2,
  Stethoscope,
  Plane,
  UtensilsCrossed,
  ShoppingBag,
  Bus,
  Layers,
  ChevronRight,
} from "lucide-react"
import type { Deck } from "@/lib/decks"

const iconMap: Record<string, typeof Brain> = {
  brain: Brain,
  globe: Globe,
  flask: FlaskConical,
  book: BookOpen,
  languages: Languages,
  building: Building2,
  hospital: Stethoscope,
  plane: Plane,
  utensils: UtensilsCrossed,
  shopping: ShoppingBag,
  bus: Bus,
}

export function DeckList({ decks }: { decks: Deck[] }) {
  return (
    <ul className="flex w-full max-w-md flex-col gap-3">
      {decks.map((deck) => {
        const Icon = iconMap[deck.emoji] ?? Layers
        return (
          <li key={deck.slug}>
            <Link
              href={`/deck/${deck.slug}`}
              className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-4 shadow-sm ring-1 ring-black/5 transition-colors hover:bg-accent"
            >
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-white"
                style={{ backgroundColor: deck.accent }}
                aria-hidden="true"
              >
                <Icon className="size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="truncate font-semibold text-card-foreground">{deck.title}</h2>
                  <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                    {deck.questions.length} cards
                  </span>
                </div>
                <p className="mt-0.5 line-clamp-2 text-pretty text-sm text-muted-foreground">{deck.description}</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
