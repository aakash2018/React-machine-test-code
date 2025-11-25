"use client";
import { NextPage } from 'next'
import Modal from '../component/modal'
import { useState } from 'react'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
  const [showModal, setShowModal] = useState(false);
  return <div>
    <h1 className="text-center font-mono text-2xl text-red-500 p-2">React Model Component</h1>
    {!showModal &&
      <button className='bg-red-400 border-red-700 text-white p-1 m-1 min-w-1/6' onClick={() => setShowModal(true)}>Open Model</button>
    }
    <Modal isOpen={showModal} closeModal={() => setShowModal(false)} />
  </div>
}

export default Page