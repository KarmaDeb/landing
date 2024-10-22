import { Grid, ScrollArea, Paper, Title, Text, Group, Tabs, Badge, Anchor, rem, Spoiler, Autocomplete, MultiSelect, Card, Image } from "@mantine/core";
import { DatePickerInput, DatesRangeValue, DateValue } from "@mantine/dates";
import { FaFileCode, FaComment } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';

import { projects } from './projects.json';
import { entries } from './post.entries.json';

import SpecialContent from "../Special/SpecialContent";
import UnixDate from "../Date/UnixDate";

import { useTabContext } from '../TabContext';
import { useState } from "react";

import landingPreview from '../../assets/img/landing.preview.png';

import '@mantine/dates/styles.css';

type BadgesType = {
    readonly name: string,
    readonly color: string
}

type ProjectType = {
    readonly title: string,
    readonly target: string,
    readonly description: string[],
    readonly languages: BadgesType[],
    readonly image?: string;
}

type EntryType = {
    readonly title: string,
    readonly content: string[],
    readonly date: number,
    readonly tags: BadgesType[]
}

function Projects(): JSX.Element {
    const imageSources = {
        landingPreview: landingPreview
    }

    const [dateRange, setDateRange] = useState<DatesRangeValue|undefined>();
    const [tagsRange, setTagsRange] = useState<string[]>([]);
    const [titleFilter, setTitleFilter] = useState<string>('');

    const { tab, setTab: applyNewTab } = useTabContext();
    const iconStyle = { width: rem(25), height: rem(25) };

    function makeBadge(badge: BadgesType): JSX.Element {
        return (
            <Badge key={badge.name} color={badge.color}>{badge.name.toLowerCase()}</Badge>
        )
    }

    function matchesFilter(entry: EntryType): boolean {
        let filterPass = true;
        if (titleFilter.trim().length != 0) {
            if (entry.title.toLowerCase().replaceAll(/\s/g, '').startsWith(titleFilter.toLowerCase().replaceAll(/\s/g, ''))) filterPass = true;
            if (!filterPass) return false;
        }

        if (tagsRange.length > 0) {
            filterPass = false;

            const entryTags: string[] = entry.tags.map(e => e.name);
            for (const tag of entryTags) {
                if (tagsRange.includes(tag)) {
                    filterPass = true;
                    break;
                }
            }

            if (!filterPass) return false;
        }

        if (dateRange !== undefined) {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            
            const dateBegin: DateValue = dateRange[0];
            const dateEnd: DateValue = dateRange[1];

            if (dateBegin && dateEnd)
                filterPass = dateBegin.getTime() <= now.getTime() && dateEnd.getTime() >= now.getTime();
        }

        return filterPass;
    }

    const tags: string[] = [...new Set(entries.flatMap(e => e.tags).map(e => e.name))];

    function renderComponent(project: ProjectType): JSX.Element {
        if (project.image) {
            return (<Card m='sm' shadow="xl" radius='xl' withBorder p='sm'>
                <Card.Section>
                    <Image 
                        src={imageSources[project.image as ('landingPreview')]} 
                        height={160}
                        alt={project.image}/>
                </Card.Section>

                <Group mb='xl' justify="space-between">
                    <Title>{project.title}</Title>
                    <Group>
                        {project.languages.map((badge: BadgesType) => makeBadge(badge))}
                    </Group>
                </Group>

                <Text>
                    {project.description.join(' ')}
                </Text>
            </Card>)
        } else {
            return (<Paper m='sm' shadow="xl" radius='xl' withBorder p='sm'>
                <Group mb='xl'>
                    <Title>{project.title}</Title>
                    <Group>
                        {project.languages.map((badge: BadgesType) => makeBadge(badge))}
                    </Group>
                </Group>
                <Text>
                    {project.description.join(' ')}
                </Text>
            </Paper>)
        }
    }

    return (
        <Tabs defaultValue="projects" mt={tab === 'blog' ? 'xl' : ''}>
            <Tabs.List grow justify="center">
                <Tabs.Tab onClick={() => {applyNewTab('projects')}} value="projects" leftSection={<FaFileCode style={iconStyle} />}>
                    <Title size='xl'>Projects</Title>
                </Tabs.Tab>
                <Tabs.Tab onClick={() => {applyNewTab('blog')}} value="blog" leftSection={<FaComment style={iconStyle} />}>
                    <Title size='xl'>Blog</Title>
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="projects">
                <ScrollArea h={250} offsetScrollbars scrollbarSize={4} scrollHideDelay={0}>
                    <Grid overflow="hidden" align="stretch" grow>
                        {projects.map((project: ProjectType) => (
                            <Grid.Col key={project.title} span={4}>
                                <Anchor href={project.target} target='_blank' rel='noopener noreferrer' underline='never' style={{ color: 'var(--mantine-color-text)' }}>
                                    {renderComponent(project)}
                                </Anchor>
                            </Grid.Col>
                        ))}
                    </Grid>
                </ScrollArea>
            </Tabs.Panel>

            <Tabs.Panel value="blog">
                <Group m='md' grow>
                    <Autocomplete 
                        label='Search by title'
                        placeholder='Search'
                        value={titleFilter}
                        onChange={setTitleFilter}
                        rightSection={<FaSearch style={{ width: rem(16), height: rem(16) }} />}/>

                    <MultiSelect
                        label="Filter by tags"
                        placeholder="Select tag(s)"
                        data={tags}
                        value={tagsRange}
                        onChange={setTagsRange}
                        searchable
                        />

                    <DatePickerInput
                        value={dateRange}
                        onChange={setDateRange}
                        allowSingleDateInRange 
                        label="Filter by date"
                        placeholder="Date"
                        clearable
                        maxDate={new Date()}
                        type="range"
                        />
                </Group>
                
                <ScrollArea h='500' offsetScrollbars scrollbarSize={4} scrollHideDelay={0}>
                    {entries.map((entry: EntryType) => {
                        if (matchesFilter(entry)) {
                            return (<Paper key={entry.title} m='sm' shadow="xl" radius='sm' withBorder p='sm'>
                                <Group mb='xl'>
                                    <Title>{entry.title} <UnixDate date={entry.date} /></Title>
                                </Group>
                                <Spoiler maxHeight={120} showLabel='Show more' hideLabel='Hide'>
                                    <SpecialContent content={entry.content.join(' ')} />
                                </Spoiler>
                                <Group mt='xl'>
                                    {entry.tags.map((badge: BadgesType) => makeBadge(badge))}
                                </Group>
                            </Paper>)
                        }
                    })}
                </ScrollArea>
            </Tabs.Panel>
        </Tabs>
    );
}

export default Projects;