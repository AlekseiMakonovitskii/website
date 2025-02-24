'use client'

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaCheck } from "react-icons/fa6";

interface CopyProps {
    text: string
    children: React.ReactNode
}

function Copy(props: CopyProps) {
    const { text, children } = props;

    const [isCopied, setCopied] = useState(false);

    const onCopy = () => setCopied(true);

    return (
        <CopyToClipboard text={text}>
            <Button onClick={onCopy}>
                {isCopied ? <FaCheck /> : <FaCopy />}
                {children}
            </Button>
        </CopyToClipboard>
    )
}

export default Copy