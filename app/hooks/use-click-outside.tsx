"use client";
import { useEffect } from "react";
export default function useClickOutSide(elementRef: any, handler: any) {
	useEffect(() => {
		const isCheck = (e: any) => {
			if (!elementRef?.current?.contains(e.target)) {
				handler();
			}
		};
		document.addEventListener("click", isCheck);
		return () => {
			document.removeEventListener("click", isCheck);
		}
	}, [elementRef, handler])
}