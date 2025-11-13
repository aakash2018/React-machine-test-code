import { NextPage } from 'next'
import { useState } from 'react';

interface FileNode {
	id?: number;
	name: string;
	type: string | 'file' | 'folder';
	children?: FileNode[];
}

interface Props {
	folderData: FileNode;
}


const FileExplorer: NextPage<Props> = ({ folderData }) => {
	const [showChildren, setShowChildren] = useState(true);

	const toggleChildren = () => {
		setShowChildren(!showChildren);
	}

	return <div className='container border-l-2 pl-4 mt-2 mx-1.5'>
		<h5 className=''>
			{folderData?.type === 'folder' ? '📁' : '📄'}
			<span onClick={()=>toggleChildren()}>
				{folderData.name}
			</span></h5>
		{showChildren &&
			<>
				{folderData && folderData.children && folderData?.children?.map((child,index) => (
						<FileExplorer key={index} folderData={child} />
				))}
			</>
		}
	</div>
}

export default FileExplorer