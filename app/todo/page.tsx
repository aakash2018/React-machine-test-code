import { NextPage } from 'next'
import Todo from '../component/todo'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    return <div>
        <h1 className="text-center font-mono text-2xl text-red-500 p-2">Todo List </h1>
        <Todo />
    </div>
}

export default Page