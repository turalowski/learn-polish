"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Check, RotateCcw, X, MousePointerClick, ArrowLeft, ListChecks, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Question } from "@/lib/decks"

type Result = { correct: number; wrong: number }

const SWIPE_THRESHOLD = 120

export function QuizDeck({ questions, title }: { questions: Question[]; title: string }) {
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [drag, setDrag] = useState(0)
  const [leaving, setLeaving] = useState<"left" | "right" | null>(null)
  const [result, setResult] = useState<Result>({ correct: 0, wrong: 0 })

  const dragging = useRef(false)
  const startX = useRef(0)
  const moved = useRef(false)

  const current = questions[index]
  const total = questions.length
  const finished = index >= total

  const commit = useCallback((direction: "left" | "right") => {
    setLeaving(direction)
    setResult((r) => ({
      correct: r.correct + (direction === "left" ? 1 : 0),
      wrong: r.wrong + (direction === "right" ? 1 : 0),
    }))
    // let the exit animation play, then advance to the next card
    window.setTimeout(() => {
      setIndex((i) => i + 1)
      setFlipped(false)
      setDrag(0)
      setLeaving(null)
    }, 260)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    if (leaving) return
    dragging.current = true
    moved.current = false
    startX.current = e.clientX
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || leaving) return
    const dx = e.clientX - startX.current
    if (Math.abs(dx) > 4) moved.current = true
    setDrag(dx)
  }

  const onPointerUp = () => {
    if (!dragging.current || leaving) return
    dragging.current = false
    if (drag <= -SWIPE_THRESHOLD) {
      commit("left")
    } else if (drag >= SWIPE_THRESHOLD) {
      commit("right")
    } else {
      // treat a small movement as a tap → flip the card
      if (!moved.current) setFlipped((f) => !f)
      setDrag(0)
    }
  }

  const restart = () => {
    setStarted(false)
    setIndex(0)
    setFlipped(false)
    setDrag(0)
    setLeaving(null)
    setResult({ correct: 0, wrong: 0 })
  }

  const cardStyle = useMemo(() => {
    if (leaving) {
      const dir = leaving === "left" ? -1 : 1
      return {
        transform: `translateX(${dir * 500}px) rotate(${dir * 18}deg)`,
        opacity: 0,
        transition: "transform 260ms ease-in, opacity 260ms ease-in",
      } as React.CSSProperties
    }
    return {
      transform: `translateX(${drag}px) rotate(${drag * 0.04}deg)`,
      transition: dragging.current ? "none" : "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
    } as React.CSSProperties
  }, [drag, leaving])

  const intent = drag <= -40 ? "correct" : drag >= 40 ? "wrong" : null

  const backToOverview = () => {
    setStarted(false)
    setIndex(0)
    setFlipped(false)
    setDrag(0)
    setLeaving(null)
    setResult({ correct: 0, wrong: 0 })
  }

  const finishEarly = () => {
    setIndex(total)
    setFlipped(false)
    setDrag(0)
    setLeaving(null)
  }

  if (!started) {
    return (
      <div className="flex w-full max-w-sm flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{total} cards</p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground">Before you start</h2>
          </div>
          <ListChecks className="size-6 text-primary" />
        </div>
        <div className="max-h-[58svh] overflow-y-auto rounded-2xl border border-border bg-card">
          <ol className="divide-y divide-border">
            {questions.map((question, questionIndex) => (
              <li key={question.id} className="flex gap-3 p-4">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                  {questionIndex + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">{question.category}</p>
                  <p className="mt-1 text-sm leading-6 text-card-foreground">{question.question}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Button onClick={() => setStarted(true)} size="lg" className="w-full gap-2">
          Start quiz
          <ArrowLeft className="size-4 rotate-180" />
        </Button>
        <Button asChild variant="ghost" className="w-full gap-2 text-muted-foreground">
          <Link href="/"><ArrowLeft className="size-4" /> All decks</Link>
        </Button>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-8" />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{index === total && result.correct + result.wrong < total ? "Quiz paused" : "Deck complete"}</h2>
          <p className="text-sm text-muted-foreground">
            {index === total && result.correct + result.wrong < total
              ? `You answered ${result.correct + result.wrong} of ${total} cards.`
              : `You went through all ${total} cards.`}
          </p>
        </div>
        <div className="flex w-full gap-3">
          <div className="flex-1 rounded-2xl border border-border bg-card p-4">
            <p className="text-2xl font-semibold text-emerald-600">{result.correct}</p>
            <p className="text-xs text-muted-foreground">Correct</p>
          </div>
          <div className="flex-1 rounded-2xl border border-border bg-card p-4">
            <p className="text-2xl font-semibold text-destructive">{result.wrong}</p>
            <p className="text-xs text-muted-foreground">Wrong</p>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <Button onClick={restart} className="flex-1 gap-2" size="lg">
            <RotateCcw className="size-4" />
            Restart deck
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1 gap-2 bg-transparent">
            <Link href="/">
              <ArrowLeft className="size-4" />
              All decks
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <div className="flex w-full items-center justify-between">
        <Button variant="ghost" size="sm" onClick={backToOverview} className="gap-1.5 px-2 text-muted-foreground">
          <ArrowLeft className="size-4" /> Questions
        </Button>
        <Button variant="ghost" size="sm" onClick={finishEarly} className="gap-1.5 px-2 text-muted-foreground">
          <Flag className="size-4" /> Finish early
        </Button>
      </div>

      {/* Progress */}
      <div className="flex w-full items-center justify-between text-sm">
        <span className="font-medium text-muted-foreground">
          Card {index + 1} of {total}
        </span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-600">
            <Check className="size-4" /> {result.correct}
          </span>
          <span className="flex items-center gap-1 text-destructive">
            <X className="size-4" /> {result.wrong}
          </span>
        </div>
      </div>

      {/* Card stage */}
      <div className="relative w-full" style={{ perspective: "1200px" }}>
        {/* Directional hints */}
        <div
          className={cn(
            "pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 transition-opacity",
            intent === "correct" ? "opacity-100" : "opacity-0",
          )}
        >
          <Check className="size-3.5" /> Correct
        </div>
        <div
          className={cn(
            "pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive transition-opacity",
            intent === "wrong" ? "opacity-100" : "opacity-0",
          )}
        >
          <X className="size-3.5" /> Wrong
        </div>

        <div
          role="button"
          tabIndex={0}
          aria-label={`${title} quiz card. Tap to flip, drag left if you got it right, drag right if wrong.`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              setFlipped((f) => !f)
            }
            if (e.key === "ArrowLeft") commit("left")
            if (e.key === "ArrowRight") commit("right")
          }}
          className="relative h-80 w-full cursor-grab touch-none select-none outline-none active:cursor-grabbing"
          style={cardStyle}
        >
          <div
            className="relative h-full w-full transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front — question */}
            <div
              className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/5"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {current.category}
              </span>
              <p className="text-balance text-2xl font-semibold leading-snug tracking-tight text-card-foreground">
                {current.question}
              </p>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <MousePointerClick className="size-4" /> Tap to reveal the answer
              </span>
            </div>

            {/* Back — answer */}
            <div
              className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-primary p-6 text-primary-foreground shadow-sm"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="inline-flex w-fit rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                Answer
              </span>
              <p className="text-balance text-xl font-medium leading-relaxed">{current.answer}</p>
              <span className="text-xs text-primary-foreground/70">
                Drag left if you got it right, right if wrong
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Manual controls */}
      <div className="flex w-full items-center justify-between gap-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 gap-2 border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600"
          onClick={() => commit("left")}
        >
          <Check className="size-4" /> Correct
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex-1 gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={() => commit("right")}
        >
          <X className="size-4" /> Wrong
        </Button>
      </div>
    </div>
  )
}
