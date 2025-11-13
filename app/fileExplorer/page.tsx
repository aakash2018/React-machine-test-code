"use client";

import { NextPage } from 'next'
import FileExplorer from '../component/fileExplorer'
import folderData from '../json/fileexplorer.json'

interface Props {

}

const Page: NextPage<Props> = ({}) => {
  return <>
    <FileExplorer folderData={folderData as any}/>
  </>
}

export default Page