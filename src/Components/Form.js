import React, {useState, useRef, useEffect} from 'react'

const Form = () => {


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword , setCPassword] = useState('')
    const [Errorusername, setErrorUsername] = useState('')
    const [Erroremail, setErrorEmail] = useState('')
    const [Errorpassword, setErrorPassword] = useState('')
    const [Errorcpassword , setErrorCPassword] = useState('')
    const [FormValidate , setFormValidate] = useState(false)
    

    const validateName = (e) => {
        let formValid = FormValidate
        let nameError = Errorusername

        if(e === ''){
            nameError = 'This is required'
            formValid = false
        }
        else if (e.trim() === '')
        {
            nameError = 'This is required'
            formValid = false
        }
        else if (e.trim().length < 5)
        {
            nameError = 'Must contain atleast 5 characters'
            formValid = false
        }
        else
        {
            nameError = ''
            formValid = true
        }

        setErrorUsername(nameError)
        setFormValidate(formValid)
        setUsername(e)

        return formValid
    }

    const validatePassword = (e) => {
        let formValid = FormValidate
        let passwordError = Errorpassword
        const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
        let cpasswordError = Errorcpassword

        if(e != cpassword && cpassword )
        {
            cpasswordError = 'Both passwords must be the same'
            formValid = false
        }
        else
        {
            cpasswordError = ''
            formValid = true
        }
        if (e.trim() === '')
        {
            passwordError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            passwordError = 'Must contain atleast one letter and one number'
            formValid = false
        }
        else if (e.trim().length < 8)
        {
            passwordError = 'Minimum of 8 characters'
            formValid = false
        }
        else
        {
            passwordError = ''
            formValid = true
        }
        setErrorPassword(passwordError)
        setErrorCPassword(cpasswordError)
        setFormValidate(formValid)
        setPassword(e)
        return formValid
    }

    const validateCPassword = (e) => {
        let formValid = FormValidate
        let cpasswordError = Errorcpassword

        if (e.trim() === '')
        {
            cpasswordError = 'This is required'
            formValid = false
        }
        else if (e != password)
        {
            cpasswordError = 'Both passwords must be the same'
            formValid = false
        }
        
        else
        {
            cpasswordError = ''
            formValid = true
        }

        setErrorCPassword(cpasswordError)
        setFormValidate(formValid)
        setCPassword(e)

        return formValid
    }

    const validateEmail = (e) => {
        let formValid =FormValidate
        let emailError = Erroremail
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (e.trim() === '')
        {
            emailError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            emailError = 'Invalid Email Address'
            formValid = false
        }
        else
        {
            emailError = ''
            formValid = true
        }

        setErrorEmail(emailError)
        setFormValidate(formValid)
        setEmail(e)

        return formValid
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            validateName(username) &&
            validateEmail(email) &&
            validatePassword(password) &&
            validateCPassword(cpassword)
        )
        {
            alert('Form is submitted')
            setUsername('')
            setEmail('')
            setPassword('')
            setCPassword('')
            setFormValidate(false)
        }
    }

    return(
        <div className="container pt-5">
                <form className="border rounded p-3 mt-5 row mt-3" onSubmit={(e) => handleSubmit(e)}>
                    <h4 className="mb-3">Sign up</h4>
                    <label className="mb-1">Username</label>
                    <input id="name" className="form-control" type="text" value={username} onChange={(e) => {setUsername(e.target.value);validateName(e.target.value);}}/>
                    <label className="w-100 text-danger mb-2">{Errorusername}</label>
                    <label className="mb-1">Email</label>
                    <input id="email" className="form-control" type="text" value={email} onChange={(e) => {setEmail(e.target.value);validateEmail(e.target.value)}}/>
                    <label className="w-100 text-danger mb-2">{Erroremail}</label>
                    <label className="mb-1">Password</label>
                    <input id="password" className="form-control" type="password" value={password} onChange={(e) => {setPassword(e.target.value); validatePassword(e.target.value)}}/>
                    <label className="w-100 text-danger mb-2">{Errorpassword}</label>
                    <label className="mb-1">Confirm Password</label>
                    <input id="cpassword" className="form-control" type="password" value={cpassword} onChange={(e) => {setCPassword(e.target.value); validateCPassword(e.target.value)}}/>
                    <label className="w-100 text-danger mb-2">{Errorcpassword}</label>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}

export default Form