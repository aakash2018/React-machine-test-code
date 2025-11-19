"use client"
import { NextPage } from 'next'
import { useState } from 'react';

interface Props {
	tabsData?: { id: number; title: string; content: string,colors:string }[],
	onChange?:any,
}

const Tab: NextPage<Props> = ({ tabsData,onChange }) => {
	const [currentTab, setCurrentTab] =useState<number>(0);

	return <>
		<div className='mx-2'>
			<div className=''>
				{tabsData?.map((tab,index) => (
					<button key={tab.id}
						className={`p-1 border-2 rounded-tr-xl rounded-tl-xl border-gray-700 px-5 bg-${tab.colors}-400 hover:bg-pink-300 
						 ${index === currentTab ? "border-b-1" : "border"}
						`} onClick={()=>{setCurrentTab(index);
							onChange(index);
						}}>
						{tab.title}
					</button>
				))}
			</div>
			<div className='border-2 border-black w-101 p-1 h-44 border-t-0 flex items-center justify-center'>
				{tabsData && tabsData[currentTab] && (
					<>
						<p>{tabsData[currentTab].content}</p>
					</>
				)}		
			</div>
		</div>
	</>
}

export default Tab