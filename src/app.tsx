import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import EntryManager from "./components/entry-manager";
import Plus from "./assets/plus.svg";
import { ExamEntry } from "./types/exam-entry";

function App() {
	const [wez, setWez] = useState<number>(0);
	const [exams, setExams] = useState<ExamEntry[]>([]);

	const addExam = () => {
		const newExam: ExamEntry = {
			id: uuidv4(),
			title: `Kwalifikacja #${exams.length + 1}`,
			theory_score: 0,
			practice_score: 0,
		};
		setExams((prev) => [...prev, newExam]);
	};

	const calculateWez = () => {
		if (exams.length > 0) {
			let score = 0;
			for (let i = 0; i < exams.length; i++) {
				score += 0.3 * exams[i].theory_score + 0.7 * exams[i].practice_score;
			}
			setWez(score / exams.length);
		} else {
			setWez(0);
		}
	};

	useEffect(() => {
		calculateWez();
	}, [exams]);

	return (
		<div className="min-h-screen flex flex-col text-white bg-black font-pwr">
			<header className="flex items-end py-10 min-h-64 bg-pwr-gradient">
				<div className="flex flex-col gap-2 container mx-auto px-4 text-center">
					<h1 className="text-5xl leading-snug">
						Policz dodatkowe punkty z egzaminu zawodowego
					</h1>
					<p className="text-sm leading-snug">
						Strona nie jest powiązana z Politechniką Wrocławską
					</p>
				</div>
			</header>
			<main className="container mx-auto max-w-2xl px-4 py-8 flex flex-col gap-8">
				<div className="p-8 border border-pwr rounded-md">
					<h2 className="text-3xl text-center">
						<span className="font-bold text-pwr-yellow">
							{Math.round(0.5 * wez * 100) / 100}
						</span>
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
				{exams.length > 0 ? (
					exams.map((entry, idx) => (
						<EntryManager entry={entry} setEntries={setExams} key={idx} />
					))
				) : (
					<p className="text-muted">
						Brak wyników. Dodaj nowy klikając w powyższy plus
					</p>
				)}
			</main>
		</div>
	);
}

export default App;
