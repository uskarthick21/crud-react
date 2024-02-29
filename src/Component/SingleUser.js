import React, { useContext } from 'react';
import UsersContext from '../context/users';
import { MdEdit, MdDelete } from "react-icons/md";



function SingleUser(props) {
    const { col, userId, user } = props

    const { deleteUser, setShowUpdateModal, showUpdateModal, setShowModal, showModal, setUser, setUserId } = useContext(UsersContext)

    const handleUpdateUser = (userId) => {
        setUser(user);
        setUserId(userId)
        setShowUpdateModal(!showUpdateModal);
        setShowModal(!showModal);
    }
    return (

        <tr key={ userId } className="border-b dark:border-neutral-500">
            { col }
            <td className='whitespace-nowrap border-r px-3 py-3 font-medium dark:border-neutral-500' >
                <div className="btn btn-delete" onClick={ () => deleteUser(userId) }><MdDelete /></div>
                <div className="btn btn-edit" onClick={ () => handleUpdateUser(userId) }><MdEdit /></div>
            </td>

        </tr>

    )
}

export default SingleUser;