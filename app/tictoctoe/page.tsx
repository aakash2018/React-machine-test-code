import { NextPage } from 'next'
import Tictoctoe from '../component/tictoctoe'

interface Props {
	size: number
}

const Page: NextPage<Props> = ({ size = 3 }) => {
	return <div>
		<Tictoctoe size={size} />
	</div>
}

export default Page