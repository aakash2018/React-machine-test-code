import { NextPage } from 'next'
import CountDownTimer from '../component/countDownTimer'

interface Props { }

const CountTimer: NextPage<Props> = ({ }) => {
    return <>
        <div className='justify-center items-center flex flex-col gap-4 p-4'>
            <h1 className="font-bold text-4xl">Timer</h1>
            <CountDownTimer />
        </div>
    </>
}

export default CountTimer