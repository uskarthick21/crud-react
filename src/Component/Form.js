import React, { useState, useContext } from 'react';
import UsersContext from '../context/users'

function Form({ action, data, userId = null }) {
    const { initialState, setShowModal, setShowUpdateModal, setShowCreateModal } = useContext(UsersContext)
    const [formData, setFormData] = useState(data);


    const handleOnChange = (e) => {
        if (e.target.type === 'checkbox') {
            let stateCopy = { ...formData }
            if (e.target.checked) {
                stateCopy.languages.push(e.target.value)
            } else {
                stateCopy.languages = stateCopy.languages.filter((language) => {
                    return language !== e.target.value
                })
            }
            setFormData(stateCopy)
        } else {
            const { value, name } = e.target;
            setFormData((state) => ({
                ...state,
                [name]: value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userId ? action(userId, formData) : action(formData);
        setFormData({ ...initialState, languages: [] });
        setShowModal(false);
        setShowUpdateModal(false)
        setShowCreateModal(false);
    }

    return (
        <form onSubmit={ handleSubmit } className="form__container">
            <div className="form__element">
                <label className="font-semibold" htmlFor="userName">Name</label>
                <input className="px-2 w-full border rounded py-2 text-gray-700 focus:outline-none items-center" id="name" onChange={ handleOnChange } name="name" value={ formData.name } />
            </div>
            <div className="form__element">
                <label className="font-semibold" htmlFor="email">Email</label>
                <input className="px-2 w-full border rounded py-2 text-gray-700 focus:outline-none items-center" id="email" onChange={ handleOnChange } name="email" value={ formData.email } />
            </div>
            <div className="form__element">
                <label className="font-semibold" htmlFor="employment">Employment</label>
                <select className="px-2 py-2 border rounded w-full text-gray-700 focus:outline-none items-center" onChange={ handleOnChange } value={ formData.employment } name="employment" id="employment">
                    <option value="select">--Select--</option>
                    <option value="software">Software</option>
                    <option value="chef">Chef</option>
                    <option value="accountant">Accountant</option>
                </select>
            </div>
            <div className="form__element form__radio">
                <fieldset>
                    <legend className="font-semibold">Gender</legend>
                    <div className=" mb-1">
                        <input onChange={ handleOnChange } type="radio" value="male" id="male" name="gender" checked={ formData.gender === "male" } />
                        <label className="px-2" htmlFor="male">Male</label>
                    </div>
                    <div className="mb-1">
                        <input onChange={ handleOnChange } type="radio" value="female" id="female" name="gender" checked={ formData.gender === "female" } />
                        <label className="px-2" htmlFor="female">Female</label>
                    </div>
                </fieldset>
            </div>
            <div className="form__element form__checkbox">
                <fieldset>
                    <legend className="font-semibold">Employment</legend>
                </fieldset>
                <div className="mb-1">
                    <input onChange={ handleOnChange } type="checkbox" value="tamil" name="languages" id="tamil"
                        checked={ formData.languages?.indexOf("tamil") !== -1 }
                    />
                    <label className="px-2" htmlFor="tamil">Tamil</label>
                </div>
                <div className="mb-1">
                    <input onChange={ handleOnChange } type="checkbox" value="english" name="languages" id="english"
                        checked={ formData.languages?.indexOf("english") !== -1 }
                    />
                    <label className="px-2" htmlFor="english">English</label>
                </div>
                <div className="mb-1">
                    <input onChange={ handleOnChange } type="checkbox" value="hindi" name="languages" id="hindi"
                        checked={ formData.languages?.indexOf("hindi") !== -1 }
                    />
                    <label className="px-2" htmlFor="hindi">Hindi</label>
                </div>
            </div>
            <div className="form__element">
                <label className="font-semibold" htmlFor="comment">
                    Comments
                </label>
                <textarea className="px-2 py-2 rounded border text-gray-700 focus:outline-none items-center w-full" onChange={ handleOnChange } value={ formData.comment } name="comment" id="comment" >
                </textarea>
            </div>

            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Submit</button>

        </form>


    )
}

export default Form;