"use client";
import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

interface Props {
	otpLength?: number
}

const Otp: NextPage<Props> = ({ otpLength }) => {
	const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
	const ref = useRef<any>([]);
	const handleKeyDown = (e: any, index: number) => {
		const key = e.key;
		const copyOtpFields = [...otpFields];
		if (key === "Backspace") {
			copyOtpFields[index] = "";
			setOtpFields(copyOtpFields);
			if (index > 0) {
				ref.current[index - 1].focus();
			}
			return;
		}
		if (key === "ArrowLeft") {
			if (index > 0) {
				ref.current[index - 1].focus();
			}
			return;
		}
		if (key === "ArrowRight") {
			if (index + 1 < otpFields.length) {
				ref.current[index + 1].focus();
			}
			return;
		}
		if (isNaN(key)) {
			return;
		}
		copyOtpFields[index] = key;
		if (index + 1 < otpFields.length) {
			ref.current[index + 1].focus();
		}
		setOtpFields(copyOtpFields);
	}

	useEffect(() => {
		ref.current["0"].focus();
	}, []);
	return (
		<div className='container'>
			<div className="flex gap-1 mx-2">
				{otpFields?.map((value, index) =>
				(<input key={index} type="text" className='w-8 h-8 border-1 border-gray-500 justify-items-center p-0.5'
					ref={(currentInput: any) => (ref.current[index] as any) = currentInput}
					onKeyDown={(e) => handleKeyDown(e, index)}
					value={value as any}
					readOnly
				/>
				)
				)}
			</div>
		</div>
	)
}

export default Otp