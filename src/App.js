import React, { useEffect, useContext } from 'react'
import UserCreate from './Component/UserCreate';
import UserList from './Component/UserList';
import UsersContext from './context/users';

function App() {
    const { fetchUser } = useContext(UsersContext)
    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div>
            <UserCreate />
            <UserList />
        </div>
    )
}

export default App;