import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const UsersContext = createContext();

function Provider({ children }) {

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    const valuesToShare = {
        initialState,
        users,
        createUser,
        fetchUser,
        deleteUser,
        showModal,
        setShowModal

    }

    return (
        <UsersContext.Provider value={ valuesToShare }>
            { children }
        </UsersContext.Provider>
    )
}

export { Provider }
export default UsersContext;