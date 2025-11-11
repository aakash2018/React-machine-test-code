"use client"
import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

interface Props { }

const CountDownTimer: NextPage<Props> = ({ }) => {
	const [time, setTime] = useState<{
		hours: string | number | any,
		minutes: string | number | any,
		seconds: string | number | any
	}>({
		hours: "",
		minutes: "",
		seconds: ""
	});

	const [isRunning, setIsRunning] = useState<boolean>(false);

	const intervalRef = useRef<NodeJS.Timeout | null | void | any>(null);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, unit: "hour" | "minute" | "seconds") => {
		const value = Number(parseInt(e.target.value));
		if (isNaN(value) || value < 0) {
			return;
		}
		const copyTime = { ...time };
		copyTime[unit === "hour" ? "hours" : unit === "minute" ? "minutes" : "seconds"] = Number(value);

		copyTime.minutes += copyTime.seconds >= 60 ? Number(Math.floor(copyTime.seconds / 60)) : "";
		copyTime.seconds = Number(copyTime.seconds % 60);

		copyTime.hours += copyTime.minutes >= 60 ? Number(Math.floor(copyTime.minutes / 60)) : "";
		copyTime.minutes = Number(copyTime.minutes % 60);


		setTime(copyTime);
	}

	const handleStart = () => {
		// Logic to start the countdown
		setIsRunning(!isRunning);
	}

	const handleReset = () => {
		// Logic to reset the countdown
		clearInterval(intervalRef.current);
		setIsRunning(false);
		setTime({
			hours: "",
			minutes: "",
			seconds: ""
		});
		

	}
	useEffect(() => {
		if (isRunning) {
			if (time.hours.length === 0 && time.minutes.length === 0 && time.seconds.length === 0) {
				return;
			}
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => {
					const copyPrevTime = { ...prevTime };
					copyPrevTime.seconds -= 1;
					if (copyPrevTime.seconds < 0) {
						copyPrevTime.seconds = 59;
						copyPrevTime.minutes -= 1;
					}
					if (copyPrevTime.minutes < 0) {
						copyPrevTime.minutes = 59;
						copyPrevTime.hours -= 1;
					}
					if (copyPrevTime.hours < 0) {
						clearInterval(intervalRef.current);
						setIsRunning(false);
						return { hours: "", minutes: "", seconds: "" };
					}
					return copyPrevTime
				})
			}, 1000);
		}
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [isRunning]);

	return <>
		<div className="container">
			<div className='flex gap-2 p-2'>
				<input
					id="hours"
					type="text"
					inputMode="numeric"
					placeholder='HH'
					className="border-amber-950 border-2 p-1 w-20 h-20"
					value={time.hours}
					disabled={isRunning}
					onChange={(e) => handleChange(e, "hour")}
				/>
				<span className="font-extrabold py-5">:</span>
				<input
					type="text"
					id="minutes"
					placeholder='MM'
					className='border-amber-950 border-2 p-1 w-20 h-20'
					value={time.minutes}
					disabled={isRunning}
					onChange={(e) => handleChange(e, "minute")}
				/>
				<span className="font-extrabold py-5">:</span>
				<input
					type="text"
					id="seconds"
					placeholder='SS'
					className='border-amber-950 border-2 p-1 w-20 h-20'
					value={time.seconds}
					disabled={isRunning}
					onChange={(e) => handleChange(e, "seconds")}
				/>
			</div>
			<div className='inline-flex gap-2 p-2'>
				<button id="startButton" className={`${!isRunning ? 'bg-teal-400' : 'bg-amber-400'} p-2 w-30`} onClick={() => handleStart()}>
					{!isRunning ? 'Start' : 'Pause'}
				</button>
				<button id="resetButton" className='bg-red-400 p-2 w-30' onClick={() => handleReset()}>Reset</button>
			</div>
		</div>
	</>
}

export default CountDownTimer