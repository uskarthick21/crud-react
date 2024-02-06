import React, { useContext } from 'react';
import UsersContext from '../context/users';

function SingleUser(props) {
    const { col, userId } = props

    const { deleteUser } = useContext(UsersContext)
    return (

        <tr key={ userId } className="border-b dark:border-neutral-500">
            { col }
            <td className='whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500' >
                <div onClick={ () => deleteUser(userId) }>Delete</div>
                <div>Edit</div>
            </td>

        </tr>

    )
}

export default SingleUser;