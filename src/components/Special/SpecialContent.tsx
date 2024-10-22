import { Anchor, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

type TextPart = {
    rawText: string,
    type: ('url'|'raw'|'linebreak'),
    target: string|null
}

function SpecialContent({ content }: { content: string }): JSX.Element {
    const parseContent = (text: string): TextPart[] => {
        const parts: TextPart[] = [];
        const regex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)|(\n)/g;
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(text)) !== null) {
            const [fullMatch, linkText, url, linebreak] = match;

            if (match.index > lastIndex) {
                parts.push({
                    rawText: text.slice(lastIndex, match.index),
                    type: 'raw',
                    target: null
                });
            }

            if (linebreak) {
                parts.push({
                    rawText: '',
                    type: 'linebreak',
                    target: null
                });
            } else {
                parts.push({
                    rawText: linkText,
                    type: 'url',
                    target: url
                });
            }
            
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            parts.push({
                rawText: text.slice(lastIndex),
                type: 'raw',
                target: null
            });
        }

        return parts;
    };

    const [textParts, setTextParts] = useState<TextPart[]>([]);

    useEffect(() => {
        const parts = parseContent(content);
        setTextParts(parts);
    }, [content]);

    return (<>
        {textParts.map((part, index) =>
            {
                if (part.type === 'url') {
                    return (
                        <Anchor key={index} href={part.target!} target="_blank" rel="noopener noreferrer">
                            {part.rawText}
                        </Anchor>
                    )
                } else if (part.type === 'linebreak') {
                    return (<br key={index} />)
                } else if (part.type === 'raw') {
                    return (
                        <Text component='span' key={index}>{part.rawText}</Text>
                    )
                }
            }
        )}
    </>);
}

export default SpecialContent;