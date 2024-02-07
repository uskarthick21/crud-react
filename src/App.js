import React, { useEffect, useContext, useState } from 'react'
import UserCreate from './Component/UserCreate';
import UpdateUser from './Component/UpdateUser';
import UserList from './Component/UserList';
import UsersContext from './context/users';
import Modal from './Component/Modal';

function App() {

    const { fetchUser, setShowModal, showModal, showCreateModal, setShowCreateModal, showUpdateModal, setShowUpdateModal, user } = useContext(UsersContext)

    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    const handleCreateUserClick = () => {
        setShowModal(!showModal);
        setShowCreateModal(!showCreateModal);
        setShowUpdateModal(false)
    }

    const handleClose = () => {
        setShowModal(false)
        setShowUpdateModal(false)
        setShowCreateModal(false);
    }



    let createUserModal = <Modal onClose={ handleClose }>
        <UserCreate />
    </Modal>

    let updateUsermodal = <Modal onClose={ handleClose }>
        <UpdateUser user={ user } />
    </Modal>


    return (
        <div>
            <div className="w-full max-w-5xl m-auto">
                <button onClick={ handleCreateUserClick }>Create User</button>
            </div>

            { showModal && showCreateModal && createUserModal }
            { showModal && showUpdateModal && updateUsermodal }
            <UserList />
        </div>
    )
}

export default App;