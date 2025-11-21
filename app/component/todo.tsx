"use client";
import { NextPage } from 'next'
import { useState } from 'react'

interface Props { }

const Todo: NextPage<Props> = ({ }) => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState<any>([]);
	console.log(taskList);
	const handleChange = (e: any) => {
		setTask(e.target.value)
	};
	const addTodo = () => {
		const newTodos = taskList.map((ele: any) => {
			return { ...ele };
		})
		newTodos.push({ value: task, isCompleted: false, id: new Date().getTime() });
		setTaskList(newTodos);
		setTask("");
	};
	const handlekeyDown = (e: any) => {
		if (e.key === "Enter") {
			addTodo();
		}

	};
	const handleDelete = (id: number) => {
		const filteredTodo = taskList.filter((ele: any) => {
			return ele.id !== id;
		})
		setTaskList(filteredTodo);
	};
	const handleComplete = (id: number) => {
		const newTodos = taskList.map((ele: any) => {
			return { ...ele };
		});
		newTodos.forEach((element: any) => {
			if (element.id === id) {
				element.isCompleted = !element.isCompleted;
			}
		});
		setTaskList(newTodos);
	};
	return <div className=''>
		<div className='flex justify-center gap-2'>
			<input type="text" className="border-1 border-black w-1/3 px-2 py-1"
				value={task}
				onChange={handleChange}
				onKeyDown={handlekeyDown}
			/>
			<button type="button" className='bg-blue-300 p-1 w-1/6'
				onClick={addTodo}
			>Add</button>
		</div>
		<div className='mx-44'>
			{
				taskList.map((ele: any) => {
					return (
						<div key={ele.id} className=' '>
							<p className={`${ele.isCompleted ?'line-through':''}`}>{ele.value}</p>
							<div className='absolute end-1/5 flex gap-2'>
								<div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => handleComplete(ele.id)}>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
										viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
											d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<p className="text-gray-500 hover:text-red-500 right-19 cursor-pointer" onClick={() => handleDelete(ele.id)}>X</p>
							</div>
						</div>
					)
				})
			}
		</div>
	</div>

}

export default Todo