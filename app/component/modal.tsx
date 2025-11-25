"use client";
import { NextPage } from 'next'
import useClickOutSide from '../hooks/use-click-outside';
import { useRef } from 'react';

interface Props {
	isOpen: boolean,
	closeModal: any
}

const Modal: NextPage<Props> = ({ isOpen, closeModal }) => {

	const modalRef = useRef<any>(null);
	useClickOutSide(modalRef, closeModal);
	
	if (!isOpen) {
		return null;
	}

	return <div ref={modalRef} className='fixed border-1 border-black p-4 left-1/4 top-1/3 -translate-x-1/18 -translate-y-1/8 w-1/2' >
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros libero, hendrerit et arcu porttitor, varius ullamcorper purus. Quisque dignissim, justo a semper congue, diam arcu egestas nunc, nec condimentum massa felis quis leo.
		</p>
		<button className="bg-amber-200 text-white p-2 mt-2 min-w-1/6" onClick={closeModal}>Close</button>
	</div>
}

export default Modal