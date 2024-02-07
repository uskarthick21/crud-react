import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const UsersContext = createContext();

function Provider({ children }) {

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();

    const initialState = {
        name: '',
        email: '',
        employment: '',
        gender: '',
        languages: [],
        comment: ''
    };


    const createUser = async (formData) => {
        const response = await axios.post('http://localhost:3002/users', {
            name: formData.name,
            email: formData.email,
            employment: formData.employment,
            gender: formData.gender,
            languages: formData.languages,
            comment: formData.comment
        })
        setUsers([...users, response.data]);
    }

    const fetchUser = useCallback(async () => {
        const response = await axios.get('http://localhost:3002/users');
        setUsers(response.data);
    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:3002/users/${ userId }`)
        const updateUser = users.filter((user) => {
            return user.id !== userId
        })
        setUsers(updateUser)
    }

    const updateUser = async (userId, user) => {
        console.log({ userId, user })
        const response = await axios.put(`http://localhost:3002/users/${ userId }`, {
            name: user.name,
            email: user.email,
            employment: user.employment,
            gender: user.gender,
            languages: user.languages,
            comment: user.comment
        })
        const userUpdate = users.map((user) => {
            if (user.id === userId) {
                return { ...user, ...response.data }
            }
            return user
        })
        setUsers(userUpdate)
    }

    const valuesToShare = {
        initialState,
        users,
        createUser,
        fetchUser,
        deleteUser,
        showModal,
        setShowModal,
        showCreateModal,
        setShowCreateModal,
        showUpdateModal,
        setShowUpdateModal,
        user,
        setUser,
        updateUser,
        userId,
        setUserId
    }

    return (
        <UsersContext.Provider value={ valuesToShare }>
            { children }
        </UsersContext.Provider>
    )
}

export { Provider }
export default UsersContext;