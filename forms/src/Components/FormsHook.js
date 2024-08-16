import React from 'react'
import { useForm } from 'react-hook-form'

const FormsHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleregistration = (data) => console.log(data);
    const handleErrors = (errors) => { };
    const registerOptions = {
        name: { required: "name is required" },
        email: { required: "email is required" },
        password: {
            required: "password is required",
            minLength: {
                value: 8,
                message: "password shoud be atlest 8 character"
            }
        }
    }
    return (
        <div>
            <h1>FormsHook</h1>
            <form onSubmit={handleSubmit(handleregistration, handleErrors)}>
                <label htmlFor="name">Name</label>
                <input type='text' name='name' {...register('name', registerOptions.name)} /><br /><br />
                <small>{errors?.name && errors.name.message}</small>
                <label htmlFor='email'>email</label>
                <input type='email' name='email' {...register('email', registerOptions.email)} /><br /><br />
                <small>{errors?.email && errors.email.message}</small>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' {...register('password', registerOptions.password)} /><br /><br />
                <small>{errors?.password && errors.password.message}</small>
                <button>submit</button>
            </form>
        </div>
    )
}

export default FormsHook