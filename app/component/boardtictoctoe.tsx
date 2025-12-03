"use client";
import { NextPage } from 'next'

interface Props {
	size: number,
	board: any[],
	handleClick: any
}

const Boardtictoctoe: NextPage<Props> = ({ size, board, handleClick }) => {
	return <div className='grid' style={{ gridTemplateColumns: `repeat(${size},50px)` }}>
		{board.map((row: any, rowNo: number) => {
			return row.map((cell: any, colNo: number) => (
				<div key={rowNo + '' + colNo} onClick={() => handleClick(rowNo, colNo)} className="h-10 w-10 m-2 border-1 border-black flex justify-center items-center">
					{cell}
				</div>
			))
		})}
	</div>
}

export default Boardtictoctoe