import type { ExamEntry } from '../types/exam-entry'
import LetterT from '../assets/letter-t.svg'
import PenTool from '../assets/pen-tool.svg'
import Wrench from '../assets/wrench.svg'
import { useEffect, useRef } from 'react'

interface EntryManagerProps {
  entry: ExamEntry
  handleTitleChange: (title: string) => void
  handleTheoryScoreChange: (score: number) => void
  handlePracticeScoreChange: (score: number) => void
  handleEntryDeletion: (id: string) => void
}

export default function EntryManager({
  entry,
  handleTitleChange,
  handleTheoryScoreChange,
  handlePracticeScoreChange,
  handleEntryDeletion,
}: EntryManagerProps) {
  const theoryInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (theoryInputRef.current) {
      theoryInputRef.current.focus()
    }
  }, [])

  return (
    <div className="flex flex-col gap-4 px-4 py-8 rounded-md border border-pwr text-white">
      <label htmlFor={`title-${entry.id}`} className="flex gap-2">
        <img src={LetterT} alt="" className="w-6 h-6" />
        <p>Tytuł</p>
      </label>
      <input
        type="text"
        id={`title-${entry.id}`}
        value={entry.title}
        onChange={(e) => {
          handleTitleChange(e.target.value)
        }}
        className="text-black p-2 rounded-md"
      />
      <label htmlFor={`theory-${entry.id}`} className="flex gap-2">
        <img src={PenTool} alt="" className="w-6 h-6" />
        <p>Wynik z teorii</p>
      </label>
      <input
        type="number"
        id={`theory-${entry.id}`}
        min={0}
        max={100}
        value={entry.theory_score}
        onChange={(e) => {
          handleTheoryScoreChange(Number(e.target.value))
        }}
        className="text-black p-2 rounded-md"
        ref={theoryInputRef}
      />
      <label htmlFor={`practice-${entry.id}`} className="flex gap-2">
        <img src={Wrench} alt="" className="w-6 h-6" />
        <p>Wynik z praktyki</p>
      </label>
      <input
        type="number"
        id={`practice-${entry.id}`}
        min={0}
        max={100}
        value={entry.practice_score}
        onChange={(e) => {
          handlePracticeScoreChange(Number(e.target.value))
        }}
        className="text-black p-2 rounded-md"
      />
      <div className="flex mt-4 justify-end">
        <button
          type="button"
          className="py-2 px-4 rounded-md bg-pwr-violet hover:bg-pwr-violet/90"
          onClick={() => handleEntryDeletion(entry.id)}
        >
          Usuń
        </button>
      </div>
    </div>
  )
}
