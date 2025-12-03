"use client";
import { NextPage } from 'next'
import Boardtictoctoe from './boardtictoctoe'
import { useState } from 'react';
import { checkWinner, initialState } from './../Utils/tictoctoeUtils';

interface Props {
	size: number
}


const Tictoctoe: NextPage<Props> = ({ size }) => {
	const [board, setBoard] = useState(
		initialState(size)
	);

	const [turnX, setTurnX] = useState(true);

	const status = turnX ? "Player X turn" : "Player O turn";
	const winner = checkWinner(board, size);

	const handleClick = (rowIndex: number, colIndex: number) => {
		if (board[rowIndex][colIndex] || winner) {
			return;
		}
		const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
		deepCopyOfBoard[rowIndex][colIndex] = turnX ? 'X' : 'O';
		setBoard(deepCopyOfBoard);
		setTurnX(!turnX);
	}

	const resetBoard = () => {
		setBoard(initialState(size))
		setTurnX(!turnX);
	}

	return <div className='container'>
		<div className='board p-2'>
			<Boardtictoctoe handleClick={handleClick} board={board} size={size} />
		</div>
		{winner ? <div className='status p-2'>Winner is {winner}</div> :
			<div className='status p-2'>{status}</div>
		}
		<button type="button" onClick={() => resetBoard()} className="bg-amber-300 w-30 text-amber-50 mx-2">Reset</button>
	</div>
}

export default Tictoctoe