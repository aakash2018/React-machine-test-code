import { NextPage } from 'next'

interface Props {
	color: string,
	isActive: any,
}

const TrafficSignal: NextPage<Props> = ({ color, isActive }) => {
	return (
		<>
			<div className={`h-13 w-13 rounded-full border-1 borde-black m-2`} style={{ backgroundColor: isActive ? color : 'gray',
				boxShadow: isActive ? `0 0 20px ${color}`:'none'
			 }}>
			</div>
		</>
	)
}

export default TrafficSignal