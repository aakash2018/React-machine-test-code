"use client"
import { NextPage } from 'next'
import { useState } from 'react';

interface Props {
	qna: QnA
}

interface QnA {
	question: string;
	A: string;
	B: string;
	C: string;
	D: string;
	answer: string;
}

const Accordian: NextPage<Props> = ({ qna }) => {
	const [isOpen, setIsOpen] = useState<Boolean>(false);
	return <div className='container'>
		<div className='border-2 border-black m-4 p-4 rounded-none shadow-lg'>
			<h2 className='font-bold text-xl relative'>{qna?.question}
				<span className='absolute right-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>+</span>
			</h2>
			{isOpen &&
				<>
				 {["A", "B", "C", "D"].map(opt => (
					<p className='mt-2'  key={opt} >{opt === qna?.answer ? qna[opt as keyof QnA] :""}</p>
					))}
				</>
			}
		</div>
	</div>
}


export default Accordian