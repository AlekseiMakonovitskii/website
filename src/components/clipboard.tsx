import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../core/button';
import { FaCopy } from "react-icons/fa";
import { FcOk } from "react-icons/fc";

interface ClipboardProps {
	children: string
}

function Clipboard(props: ClipboardProps) {
	const { children } = props;

	const [state, setState] = useState({
		value: children,
		copied: false,
	})

	return (
		<Button>
			<CopyToClipboard
				text={state.value}
				onCopy={() => setState({ ...state, copied: true })}
			>
				<div className='flex gap-1 items-center'>
					<span>{children}</span>
					<span className='text-gray-500'>
						{state.copied ? <FcOk /> : <FaCopy/>}
					</span>
				</div>
			</CopyToClipboard>
		</Button>
	)
}

export default Clipboard