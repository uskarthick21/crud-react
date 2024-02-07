import React, { useEffect, useContext, useState } from 'react'
import UserCreate from './Component/UserCreate';
import UserList from './Component/UserList';
import UsersContext from './context/users';
import Modal from './Component/Modal';

function App() {

    const { fetchUser, setShowModal, showModal } = useContext(UsersContext)

    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    const handleClick = () => {
        setShowModal(!showModal)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const modal = <Modal onClose={ handleClose }>
        <UserCreate />
    </Modal>

    return (
        <div>
            <div className="w-full max-w-5xl m-auto">
                <button onClick={ handleClick }>Create User</button>
            </div>

            { showModal && modal }

            <UserList />
        </div>
    )
}

export default App;