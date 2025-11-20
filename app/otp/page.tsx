import { NextPage } from 'next'
import Otp from '../component/otp'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <>
    <h1 className="text-center font-mono text-2xl text-red-500 p-2">React Otp </h1>
    <Otp otpLength={6}/>
  </>
}

export default Page