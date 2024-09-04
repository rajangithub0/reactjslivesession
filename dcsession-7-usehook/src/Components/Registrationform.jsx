import React from 'react'
import { useForm } from 'react-hook-form'

const Registrationform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log('Form Data', data);
    }
    return (
        <div>
            <h3>Registrationform</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name', { required: 'name is required' })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', { required: 'email is required', pattern: { value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'email id is invalid' } })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" {...register('password', { required: 'password is required', pattern: { value: 6, message: 'password must be six character' } })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type='submit'>Register</button>

            </form>
        </div>


    )
}

export default Registrationform