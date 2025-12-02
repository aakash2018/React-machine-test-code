"use client";
import { NextPage } from 'next'
import Progressbar from '../component/progressbar'
import { useState } from 'react';

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const [show,setShow] = useState(false);
    return <div>
        {show ? <Progressbar /> :""}
        <button onClick={()=>setShow(!show)} className='m-3 text-amber-50 bg-fuchsia-800 p-1 h-1/12 w-1/5'>Toggle</button>
    </div>
}

export default Page