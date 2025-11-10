"use client"
import { NextPage } from 'next'
import { useState } from 'react';

interface Props {
	starCount?: number
}

const StarRating: NextPage<Props> = ({ starCount = 5 }) => {
	const [starValue,setStarValue]=useState<number>(0);
	const [hoverStar,setHoverStar]=useState<number>(0);
	return <>
		<div className='container'>
			{new Array(starCount).fill(0).map((_, index) => (
				<span key={index} className={hoverStar == 0 && index < starValue || index < hoverStar ? "text-yellow-400 text-2xl":"text-2xl"} onClick={()=>setStarValue(index+1)}
				onMouseEnter={()=>setHoverStar(index+1)} onMouseLeave={()=>setHoverStar(0)}
				>&#9733;</span>
			))}
		</div>
	</>
}

export default StarRating