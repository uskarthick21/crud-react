import { createContext, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext();

function Provider({ children }) {

    const [users, setUsers] = useState([]);

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

    const fetchUser = async () => {
        const response = await axios.get('http://localhost:3002/users');
        console.log({ response })
        setUsers(response.data);
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:3002/users/${ userId }`)
        const updateUser = users.filter((user) => {
            return user.id !== userId
        })
        setUsers(updateUser)
    }

    const valuesToShare = {
        initialState,
        createUser,
        fetchUser,
        deleteUser
    }

    return (
        <UsersContext.Provider value={ valuesToShare }>
            { children }
        </UsersContext.Provider>
    )
}

export { Provider }
export default UsersContext;