import { ExamEntry } from "../types/exam-entry";
import LetterT from "../assets/letter-t.svg";
import PenTool from "../assets/pen-tool.svg";
import Wrench from "../assets/wrench.svg";
import { useEffect, useRef } from "react";

interface EntryManagerProps {
	entry: ExamEntry;
	setEntries: React.Dispatch<React.SetStateAction<ExamEntry[]>>;
}

export default function EntryManager({ entry, setEntries }: EntryManagerProps) {
	const theoryInputRef = useRef<HTMLInputElement | null>(null);

	const handleTitleChange = (newTitle: string) => {
		setEntries((prev) =>
			prev.map((el) =>
				el.id === entry.id ? { ...entry, title: newTitle } : el
			)
		);
	};

	const handleTheoryScoreChange = (score: number) => {
		setEntries((prev) =>
			prev.map((el) =>
				el.id === entry.id ? { ...entry, theory_score: score } : el
			)
		);
	};

	const handlePracticeScoreChange = (score: number) => {
		setEntries((prev) =>
			prev.map((el) =>
				el.id === entry.id ? { ...entry, practice_score: score } : el
			)
		);
	};

	const handleEntryDeletion = () => {
		setEntries((prev) => prev.filter((el) => el.id !== entry.id));
	};

	useEffect(() => {
		if (theoryInputRef.current) {
			theoryInputRef.current.focus();
		}
	}, []);

	return (
		<div className="flex flex-col gap-4 px-4 py-8 rounded-md border border-pwr text-white">
			<div className="flex gap-2">
				<img src={LetterT} alt="" className="w-6 h-6" />
				<p>Tytuł</p>
			</div>
			<input
				type="text"
				defaultValue={entry.title}
				onChange={(e) => handleTitleChange(e.target.value)}
				className="text-black p-2 rounded-md"
			/>
			<div className="flex gap-2">
				<img src={PenTool} alt="" className="w-6 h-6" />
				<p>Wynik z teorii</p>
			</div>
			<input
				type="number"
				min={0}
				max={100}
				defaultValue={entry.theory_score}
				onChange={(e) => handleTheoryScoreChange(Number(e.target.value))}
				className="text-black p-2 rounded-md"
				ref={theoryInputRef}
			/>
			<div className="flex gap-2">
				<img src={Wrench} alt="" className="w-6 h-6" />
				<p>Wynik z praktyki</p>
			</div>
			<input
				type="number"
				min={0}
				max={100}
				defaultValue={entry.practice_score}
				onChange={(e) => handlePracticeScoreChange(Number(e.target.value))}
				className="text-black p-2 rounded-md"
			/>
			<div className="flex mt-4 justify-end">
				<button
					className="py-2 px-4 rounded-md bg-pwr-violet hover:bg-pwr-violet/90"
					onClick={handleEntryDeletion}
				>
					Usuń
				</button>
			</div>
		</div>
	);
}
