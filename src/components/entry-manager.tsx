import { ExamEntry } from "../types/exam-entry";

interface EntryManagerProps {
	entry: ExamEntry;
	setEntries: React.Dispatch<React.SetStateAction<ExamEntry[]>>;
}

export default function EntryManager({ entry, setEntries }: EntryManagerProps) {
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
		console.log("CHANGING PRATICE SCORE", score, entry.title);
		setEntries((prev) =>
			prev.map((el) =>
				el.id === entry.id ? { ...entry, practice_score: score } : el
			)
		);
	};

	return (
		<div className="flex flex-col gap-4 p-4 rounded-md bg-pwr-dark text-white">
			<p>Tytuł</p>
			<input
				type="text"
				defaultValue={entry.title}
				onChange={(e) => handleTitleChange(e.target.value)}
				className="text-black p-2 rounded-md"
			/>
			<p>Wynik z teorii</p>
			<input
				type="text"
				defaultValue={entry.theory_score}
				onChange={(e) => handleTheoryScoreChange(parseInt(e.target.value))}
				className="text-black p-2 rounded-md"
			/>
			<p>Wynik z praktyki</p>
			<input
				type="text"
				defaultValue={entry.practice_score}
				onChange={(e) => handlePracticeScoreChange(parseInt(e.target.value))}
				className="text-black p-2 rounded-md"
			/>
		</div>
	);
}
