import React, { useEffect, useContext } from 'react'
import Form from './Component/Form';
import UserList from './Component/UserList';
import UsersContext from './context/users';
import Modal from './Component/Modal';

function App() {

    const { fetchUser, setShowModal, showModal, showCreateModal, setShowCreateModal, showUpdateModal, setShowUpdateModal, createUser, updateUser, initialState, user, userId } = useContext(UsersContext)

    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    const handleCreateUserClick = () => {
        setShowModal(!showModal);
        setShowCreateModal(!showCreateModal);
    }

    const handleClose = () => {
        setShowModal(false)
        setShowUpdateModal(false)
        setShowCreateModal(false);
    }

    let createUserModal = <Modal onClose={ handleClose }>
        <Form action={ createUser } data={ initialState } />
    </Modal>

    let updateUsermodal = <Modal onClose={ handleClose }>
        <Form action={ updateUser } data={ user } userId={ userId } />
    </Modal>


    return (
        <div className="main-container">
            <div className="action-button">
                <button className="btn btn-create" onClick={ handleCreateUserClick }>Create User</button>
            </div>

            { showModal && showCreateModal && createUserModal }
            { showModal && showUpdateModal && updateUsermodal }
            <UserList />
        </div>
    )
}

export default App;