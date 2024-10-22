import { useEffect, useState } from 'react';

function DateFrom({ date }: { date: string }): JSX.Element {
    const [yearsPassed, setYearsPassed] = useState<string | number | null>(null);

    useEffect(() => {
        const parsedDate: Date|null = parseDate(date);
        if (parsedDate) {
            const years: number = calculateYearsSince(parsedDate);
            setYearsPassed(years);
        } else {
            setYearsPassed('Invalid date');
        }
    }, [date]);

    const parseDate = (dateStr: string): Date|null => {
        const [day, month, year] = dateStr.split('-').map(Number);
        if (!day || !month || !year) return null;

        return new Date(year, month - 1, day);
    };

    const calculateYearsSince = (date: Date): number => {
        const now = new Date();
        let years = now.getFullYear() - date.getFullYear();
        const isBeforeBirthday = now.getMonth() < date.getMonth() ||
            (now.getMonth() === date.getMonth() && now.getDate() < date.getDate());

        if (isBeforeBirthday) {
            years--;
        }

        return years;
    };

    return (<>
        {yearsPassed !== null ? yearsPassed : ''}
    </>);
}

export default DateFrom;