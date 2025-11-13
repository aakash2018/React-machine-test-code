import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div className='flex items-center justify-center h-screen'>
    <div className='flex items-center justify-center  bg-amber-400 h-50 w-50'>Center Div</div>
  </div>
}

export default Page