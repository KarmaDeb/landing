import { Group } from '@mantine/core';
import './schedule.css';

function Schedule(): JSX.Element {
    return (<>
        <Group m='xl' align='center' justify='center'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15:00<br />15:55</td>
                        <td rowSpan={2} className="text-secondary class-client-web-dev">
                            <span className="class">Client web development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                        <td rowSpan={3} className="text-secondary class-enterprise">
                            <span className="class">Company initiative</span>
                            <span className="teacher">Miquel A. Ferrer</span>
                        </td>
                        <td rowSpan={3} className="text-secondary class-server-web-dev">
                            <span className="class">Server web development</span>
                            <span className="teacher">Pere Negre</span>
                        </td>
                        <td rowSpan={3} className="text-secondary class-server-web-dev">
                            <span className="class">Server web development</span>
                            <span className="teacher">Pere Negre</span>
                        </td>
                        <td rowSpan={2} className="text-secondary web-design-dev">
                            <span className="class">Web interface development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                    </tr>
                    <tr>
                        <td>15:55<br />16:00</td>
                    </tr>
                    <tr>
                        <td>16:00<br />17:45</td>
                        <td className="text-secondary web-design-dev">
                            <span className="class">Web interface development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                        <td className="text-secondary class-client-web-dev">
                            <span className="class">Client web development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                    </tr>
                    <tr id="time-break-row">
                        <td>17:45<br />18:15</td>
                        <td colSpan={5} className="time-break">Time break</td>
                    </tr>
                    <tr>
                        <td>18:15<br />19:10</td>
                        <td className="text-secondary web-design-dev">
                            <span className="class">Web interface development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                        <td rowSpan={3} className="text-secondary class-server-web-dev">
                            <span className="class">Server web development</span>
                            <span className="teacher">Pere Negre</span>
                        </td>
                        <td rowSpan={3} className="text-secondary class-web-app-deploy">
                            <span className="class">Web app deployment</span>
                            <span className="teacher">Manuel Martinez</span>
                        </td>
                        <td className="text-secondary class-server-web-dev">
                            <span className="class">Server web development</span>
                            <span className="teacher">Pere Negre</span>
                        </td>
                        <td rowSpan={3} className="text-secondary class-client-web-dev">
                            <span className="class">Client web development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                    </tr>
                    <tr>
                        <td>19:10<br />20:05</td>
                        <td rowSpan={2} className="text-secondary class-web-app-deploy">
                            <span className="class">Web app deployment</span>
                            <span className="teacher">Manuel Martinez</span>
                        </td>
                        <td rowSpan={2} className="text-secondary web-design-dev">
                            <span className="class">Web interface development</span>
                            <span className="teacher">Artem Rudenko</span>
                        </td>
                    </tr>
                    <tr>
                        <td>20:05<br />20:45</td>
                    </tr>
                </tbody>
            </table>
        </Group>
    </>)
}

export default Schedule;