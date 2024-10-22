import { Title, Group, Paper, Container, useMantineColorScheme, List, ThemeIcon, ScrollArea, Divider, Autocomplete, Checkbox, Blockquote } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { migrations } from './supported.plugin.migrations.json'; 
import { useState } from "react";

type PluginMigration = {
    plugin: string,
    supported: boolean
}

function AuthLockHome(): JSX.Element {
    const [plugin, setPlugin] = useState<string>('');
    const [supportedOnly, setSupportedOnly] = useState<boolean>(false);

    const preferredColorScheme = useColorScheme();
    const { colorScheme } = useMantineColorScheme();

    const check = <ThemeIcon color="teal" size={24} radius='xl'>
        <FaCheckCircle size={16} />
    </ThemeIcon>;
    const cross = <ThemeIcon color="darkred" size={24} radius='xl'>
        <RxCrossCircled size={16} />
    </ThemeIcon>;
    const info = <ThemeIcon color="darkcyan" size={24} radius='xl'>
        <FaInfoCircle size={16} />
    </ThemeIcon>;

    function filterPlugin(element: PluginMigration): boolean {
        let filters = true;
        if (plugin.trim().length !== 0) {
            filters = plugin.trim().length === 0 || cleanName(element.plugin).startsWith(cleanName(plugin)) || 
                cleanName(element.plugin).includes(cleanName(plugin));

            if (!filters) return false;
        }

        if (supportedOnly) {
            filters = element.supported;
        }

        return filters;
    }

    function cleanName(name: string): string {
        return name.toLowerCase().replaceAll(/\s/g, '');
    }

    return (<>
        <Container>
            <Title ml='sm' c='darkcyan' ta='center' mt='xl'>
                AuthLock
            </Title>

            <Group justify="space-between" wrap="nowrap" w='100%' grow>
                <Paper p='md' mah={500} bg={colorScheme === 'dark' ? '#2a2a2a' : colorScheme === 'auto' ? preferredColorScheme === 'dark' ? '#2a2a2a' : '#E7E9E6' : '#E7E9E6'} mt='xl' radius='md'>
                    <Title ta='center' order={2}>Features</Title>
                    <Divider my='sm'/>

                    <List
                        spacing='xs'
                        size='sm'
                        center
                        icon={check}>
                        <ScrollArea h={400} offsetScrollbars scrollbarSize={4} scrollHideDelay={0}>
                            <List.Item>MySQL support</List.Item>
                            <List.Item>SQLite support</List.Item>
                            <List.Item>Spigot support</List.Item>
                            <List.Item>BungeeCord support</List.Item>
                            <List.Item icon={cross}>Velocity support</List.Item>
                            <List.Item>Integration with any CMS</List.Item>
                            <List.Item>TOTP support</List.Item>
                            <List.Item>Password and pin support</List.Item>
                        </ScrollArea>
                    </List>   
                </Paper>

                <Paper p='md' mah={500} bg={colorScheme === 'dark' ? '#2a2a2a' : colorScheme === 'auto' ? preferredColorScheme === 'dark' ? '#2a2a2a' : '#E7E9E6' : '#E7E9E6'} mt='xl' radius='md'>
                    <Title ta='center' order={2}>Migrations</Title>
                    <Divider my='sm'/>

                    <Group justify="space-between" wrap="nowrap">
                        <Autocomplete
                            w='70%'
                            placeholder="Plugin name"
                            value={plugin}
                            onChange={setPlugin}
                            />
                        
                        <Checkbox checked={supportedOnly} onChange={(event) => setSupportedOnly(event.currentTarget.checked)} label={check} />
                    </Group>

                    <List
                        mt='md'
                        spacing='xs'
                        size='sm'
                        center
                        icon={check}>
                        <ScrollArea h={350} offsetScrollbars scrollbarSize={4} scrollHideDelay={0}>
                            {migrations.filter(e => filterPlugin(e)).map((element: PluginMigration, index: number) => {
                                if (element.supported) {
                                    return (<List.Item key={index} icon={check}>{element.plugin}</List.Item>)
                                } else {
                                    return (<List.Item key={index} icon={cross}>{element.plugin}</List.Item>)
                                }
                            })}
                        </ScrollArea>
                    </List>   
                </Paper>
            </Group>
            <Blockquote color="blue" icon={info} mt="xl">
                Features/Migrations pinned with {cross} are planned features which are currently not implemented
            </Blockquote>
        </Container>
    </>)
}

export default AuthLockHome;