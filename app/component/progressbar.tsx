"use client";
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface Props { }

const Progressbar: NextPage<Props> = ({ }) => {
	const [bar, setBar] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setBar((prevBarValue) => {
				if (prevBarValue >= 100) {
					clearInterval(interval);
					return prevBarValue;
				}
				return Math.min(prevBarValue + 5, 100)
			});
		}, 150)

		return () => {
			clearInterval(interval);
		}
	}, [])

	return <>
			<div className='m-3 h-5 w-90 border-1 border-green-600 rounded-full overflow-hidden relative'>
			<div
				style={{ width: `${bar}%` }}
				className='h-full bg-green-600 rounded-full absolute'>
			</div>
			<p className='mx-2 text-black text-xs absolute'>progress {bar}%</p>
		</div>
	</>
}

export default Progressbar