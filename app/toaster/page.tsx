import { NextPage } from 'next'
import ToastContainer from '../component/ToastContainer'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div>
    <div>
      <ToastContainer />
    </div>
  </div>
}

export default Page