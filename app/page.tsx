import { DeckList } from "@/components/deck-list"
import { decks } from "@/lib/decks"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-8 bg-background px-5 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Your decks</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick a deck to start studying. Tap a card to flip, swipe left if you knew it, right if you didn&apos;t.
        </p>
      </header>
      <DeckList decks={decks} />
    </main>
  )
}
