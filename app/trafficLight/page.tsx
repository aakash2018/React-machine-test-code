"use client";
import { NextPage } from 'next'
import TrafficSignal from '../component/trafficSignal'
import { useEffect, useState } from 'react'

interface Props {
	lights: string[]
}

const Page: NextPage<Props> = ({ lights = ["red", "yellow", "green"] }) => {
	const [active, setActive] = useState(0);
	const intervalId:any=useEffect(() => {
		setInterval(() => {
			setActive((prevActive) => {
				return (prevActive + 1) % lights.length;
			});
		}, 6000);

		return () => clearInterval(intervalId);
	}, [])
	return <>
		{lights.map((ele, index) => {
			return (<TrafficSignal color={ele} key={index} isActive={active === index} />)
		})}

	</>
}

export default Page