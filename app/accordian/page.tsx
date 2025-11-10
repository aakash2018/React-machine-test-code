import { NextPage } from 'next';
import Accordian from '../component/accordian';
import data from '../json/faq.json';
interface Props { }

const Page: NextPage<Props> = ({ }) => {
    return <>
        <h1 className='text-5xl font-extrabold flex justify-center'>FAQ's</h1>
        {data.faqs && data.faqs.length > 0 && data.faqs.map((item, index) => (
            <>
                {index < 10 &&
                    <Accordian qna={item} />
                }
            </>
        ))}
    </>
}

export default Page