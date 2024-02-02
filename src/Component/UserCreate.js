import React, { useState } from 'react';

function UserCreate() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        employment: 'chef',
        gender: 'female',
        languages: ['english'],
        comment: ''
    })

    const handleOnChange = (e) => {
        console.log(e)

        if (e.target.type === 'checkbox') {
            console.log("yes")
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
        console.log("forms:", formData)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="userName">Name</label>
                <input id="name" onChange={ handleOnChange } name="name" value={ formData.name } />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" onChange={ handleOnChange } name="email" value={ formData.email } />
            </div>
            <div>
                <label htmlFor="employment">Employment</label>
                <select onChange={ handleOnChange } value={ formData.employment } name="employment" id="employment">
                    <option value="software">Software</option>
                    <option value="chef">Chef</option>
                    <option value="accountant">Accountant</option>
                </select>
            </div>
            <div>
                <div>
                    <input onChange={ handleOnChange } type="radio" value="male" id="male" name="gender" checked={ formData.gender === "male" } />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input onChange={ handleOnChange } type="radio" value="female" id="female" name="gender" checked={ formData.gender === "female" } />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <div>
                <div>
                    <input onChange={ handleOnChange } type="checkbox" value="tamil" name="languages" id="tamil"
                        checked={ formData.languages.indexOf('tamil') !== -1 }
                    />
                    <label htmlFor="tamil">Tamil</label>
                </div>
                <div>
                    <input onChange={ handleOnChange } type="checkbox" value="english" name="languages" id="english"
                        checked={ formData.languages.indexOf('english') !== -1 }
                    />
                    <label htmlFor="english">English</label>
                </div>
                <div>
                    <input onChange={ handleOnChange } type="checkbox" value="hindi" name="languages" id="hindi"
                        checked={ formData.languages.indexOf('hindi') !== -1 }
                    />
                    <label htmlFor="hindi">Hindi</label>
                </div>
            </div>
            <div>
                <label htmlFor="comment">
                    Comments
                </label>
                <textarea onChange={ handleOnChange } rows="4" cols="50" value={ formData.comment } name="comment" id="comment" >
                </textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default UserCreate;