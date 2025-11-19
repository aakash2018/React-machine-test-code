"use client";
import { NextPage } from 'next'
import Tab from '../component/tab'

interface Props {}

const tabsData = [
  { id: 1, title: 'Profile', content: 'Content for Profile',colors:'red' },
  { id: 2, title: 'Dashboard', content: 'Content for Dashboard',colors:'blue' },
  { id: 3, title: 'Settings', content: 'Content for Settings',colors:'teal' },
  { id: 4, title: 'Invoice', content: 'Content for Invoice',colors:'yellow' },
]

const Page: NextPage<Props> = ({}) => {
    const onTabChangeHandler = (index: number) => {
        console.log("Selected Tab Index:", index);
    }
  return <div>
    <h1 className="text-center font-mono text-2xl text-red-500 p-2">React Tab Component</h1>
     <Tab tabsData={tabsData} onChange={onTabChangeHandler}/>
  </div>
}

export default Page