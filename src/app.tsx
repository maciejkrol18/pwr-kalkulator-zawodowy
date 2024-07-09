import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import EntryManager from "./components/entry-manager";
import Plus from "./assets/plus.svg";
import { ExamEntry } from "./types/exam-entry";

function App() {
	const [count, setCount] = useState<number>(0);
	const [wez, setWez] = useState<number>(0);
	const [exams, setExams] = useState<ExamEntry[]>([]);

	const addExam = () => {
		const newExam: ExamEntry = {
			id: uuidv4(),
			title: "Nowy wynik",
			theory_score: 0,
			practice_score: 0,
		};
		setExams((prev) => [...prev, newExam]);
	};

	const calculateWez = () => {
		if (exams.length > 0) {
			let score = 0;
			exams.forEach((entry) => {
				console.log(
					entry.title,
					(score += 0.3 * entry.theory_score + 0.7 * entry.practice_score)
				);
				score += 0.3 * entry.theory_score + 0.7 * entry.practice_score;
			});
			console.log(score, exams.length);
			console.log(score / exams.length);
			setWez(score / exams.length);
		}
	};

	useEffect(() => {
		calculateWez();
		console.log(exams);
	}, [exams]);

	return (
		<div className="min-h-screen flex flex-col text-white bg-black font-pwr">
			<header className="flex items-end py-10 min-h-64">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl">
						Policz dodatkowe punkty z egzaminu zawodowego
					</h1>
				</div>
			</header>
			<main className="container mx-auto px-4 py-8 flex flex-col gap-8">
				<div className="p-8 border border-pwr rounded-md">
					<h2 className="text-3xl text-center">
						<span className="font-bold text-pwr-yellow">{0.5 * wez}</span>
						<br />
						dodatkowych punktów
					</h2>
				</div>
				<div className="flex justify-between">
					<h3 className="text-2xl">Wyniki kwalifikacji</h3>
					<button onClick={addExam}>
						<img src={Plus} />
					</button>
				</div>
				{exams &&
					exams.map((entry, idx) => (
						<EntryManager entry={entry} setEntries={setExams} key={idx} />
					))}
			</main>
		</div>
	);
}

export default App;
