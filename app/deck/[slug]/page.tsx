import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { QuizDeck } from "@/components/quiz-deck"
import { decks, getDeck } from "@/lib/decks"

export function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }))
}

export default async function DeckPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const deck = getDeck(slug)

  if (!deck) notFound()

  return (
    <main className="flex min-h-svh flex-col items-center gap-8 bg-background px-5 py-8">
      <header className="flex w-full max-w-sm flex-col gap-4">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All decks
        </Link>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">{deck.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground text-pretty">{deck.description}</p>
        </div>
      </header>
      <QuizDeck questions={deck.questions} title={deck.title} />
    </main>
  )
}
