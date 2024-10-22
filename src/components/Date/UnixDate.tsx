import { Text } from '@mantine/core';
import { useEffect, useState } from 'react';

function UnixDate({ date }: { date: number }): JSX.Element {
    const [formattedDate, setFormattedDate] = useState<string>("");

    useEffect(() => {
        const formatUnixDate = (unixTimestamp: number): string => {
            const d = new Date(unixTimestamp * 1000);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            const seconds = String(d.getSeconds()).padStart(2, '0');
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        };

        setFormattedDate(formatUnixDate(date));
    }, [date]);

    return (<Text>On {formattedDate}</Text>);
}

export default UnixDate;