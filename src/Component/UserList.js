import React, { useContext } from 'react';
import UsersContext from '../context/users';
import SingleUser from '../Component/SingleUser'

function UserList() {

    const { users } = useContext(UsersContext);

    const renderHeader = () => {
        let tableHeader = Object.keys(users[0]).map(col => <th className="border-r px-6 py-4 dark:border-neutral-500" key={ col }>{ col }</th>)
        tableHeader.push(<th className="border-r px-6 py-4 dark:border-neutral-500" key={ "action" }>Action</th>)
        return tableHeader;
    }


    const renderRows = () => {
        const columns = Object.keys(users[0]);
        const c = columns.length;
        const r = users.length;
        const items = [];
        for (let i = 0; i < r; i++) {
            const col = [];
            for (let j = 0; j < c; j++) {
                col.push(<td className="border-r">
                    { users[i][columns[j]] }
                </td>)
            }
            items.push(
                <SingleUser key={ users[i].id } col={ col } userId={ users[i].id } />
            )
        }
        return items;
    }

    return (
        (
            users && users.length > 0 && (
                <div className="relative overflow-x-auto flex justify-center items-center">
                    <table className="md:w-1/3 border text-center text-sm font-light dark:border-neutral-500">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>{ renderHeader() }</tr>
                        </thead>
                        <tbody>
                            { renderRows() }
                        </tbody>
                    </table>
                </div>
            )
        )
    )
}

export default UserList;