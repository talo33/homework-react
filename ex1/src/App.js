import { useState } from "react";
import Drum from "./components/Drum";

function App() {
	const [sounds, setSounds] = useState([
		{
			name: "w",
			sound: require("./sounds/w.mp3").default,
			key: "W",
		},
		{
			name: "a",
			sound: require("./sounds/a.mp3").default,
			key: "A",
		},
		{
			name: "s",
			sound: require("./sounds/s.mp3").default,
			key: "S",
		},
		{
			name: "d",
			sound: require("./sounds/d.mp3").default,
			key: "D",
		},
		{
			name: "j",
			sound: require("./sounds/j.mp3").default,
			key: "J",
		},
		{
			name: "k",
			sound: require("./sounds/k.mp3").default,
			key: "K",
		},
		{
			name: "l",
			sound: require("./sounds/l.mp3").default,
			key: "L",
		},
		{
			name: "g",
			sound: require("./sounds/g.mp3").default,
			key: "G",
		},
		{
			name: "f",
			sound: require("./sounds/f.mp3").default,
			key: "F",
		},
		{
			name: "p",
			sound: require("./sounds/p.mp3").default,
			key: "P",
		},
	]);

	return (
		<div className="App">
			<h1>Drum Kit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} />
				))}
			</div>
		</div>
	);
}

export default App;
