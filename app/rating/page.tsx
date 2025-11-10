import { NextPage } from 'next'
import App from 'next/app'
import StarRating from '../component/starRating'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    return <>
        <StarRating starCount={10}/>
    </>
}

export default Page