"use client"
import { time } from 'console';
import { NextPage } from 'next'
import { useRef, useState } from 'react';


interface Props {
	Toast?: Toast[];
}

interface Toast {
	id: number;
	message: string;
	type: string;
}


const ToastContainer: NextPage<Props> = ({ Toast }) => {
	const [toast, setToasts] = useState<Toast[]>([]);
	const timerRef = useRef<any>({});
	const handleAdd = (message: string, type: string) => {
		const id = new Date().getTime();
		const newToasts = [...toast, { id, message, type }];
		setToasts(newToasts);
		timerRef.current[id]=setTimeout(() => {
			handleClose(id);
		}, 3000);
	}

	const handleClose = (id: number) => {
		clearTimeout(timerRef.current[id]);
		delete timerRef.current[id];

		const filteredArr = setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
		return filteredArr;
	}

	return <>
		<div className='container'>
			<div className={`fixed top-0.5 right-0.5 ${toast.length >= 1 ? "translate-x-0 opacity-100  duration-1000" : "translate-x-4 opacity-0"} transition-all duration-1000`}>
				{toast.map(({ id, message, type }) => {
					return (
						<div key={id} className={`${type} text-zinc-100  rounded-lg border border-stone-600 text-shadow-white w-60 p-2 relative transform m-0.5
					`}>
							{message} <span className='absolute right-4 cursor-pointer' onClick={() => handleClose(id)}>X</span>
						</div>
					)
				})
				}
			</div>
			<div className='btn-container mx-auto flex gap-0.5'>
				<button className="bg-teal-400 border border-stone-600 p-1" onClick={() => handleAdd('Success', 'bg-teal-400')}>Success Toast</button>
				<button className="bg-blue-400 border border-stone-600 p-1" onClick={() => handleAdd('Info', 'bg-blue-400')}>Info Toast</button>
				<button className="bg-yellow-400 border  border-stone-600 p-1" onClick={() => handleAdd('Warning', 'bg-yellow-400')}>Warning Toast</button>
				<button className="bg-red-500 border border-stone-600 p-1" onClick={() => handleAdd('Error', 'bg-red-500')}>Error Toast</button>
			</div>
		</div>
	</>
}

export default ToastContainer