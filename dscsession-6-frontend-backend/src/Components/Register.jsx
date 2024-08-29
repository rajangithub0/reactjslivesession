import axios from "axios";
import { useState } from "react";

function Register() {
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '', confirmPassword: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password === user.confirmPassword) {
            try {
                const resp = await axios.post('http://localhost:5000/api/user', user);
                console.log(resp);

                if (resp.status == 201) {
                    alert('User registered..');
                    fetchData();
                    setUser({ name: '', email: '', username: '', password: '', confirmPassword: '' });
                } else {
                    alert("error in registration")
                }
            } catch (error) {
                console.log(error);
                alert(error.response.data.message)

            }

        } else {
            alert("password and confirm password is mismatch")
        }
        const resp = await axios.post('http://localhost:5000/api/auth/register', user);
        console.log(resp);

        if (resp.status == 201) {
            alert('User registered..');
            fetchData();
            setUser({ name: '', email: '', username: '', password: '', confirmPassword: '' });
        } else {
            alert("error in registration")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" placeholder="Enter name" className="form-control"
                        value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label>user Name</label>
                    <input type="text" placeholder="username" className="form-control"
                        value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"
                        value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control"
                        value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label>Confim Password</label>
                    <input type="password" placeholder="Confim Password" className="form-control"
                        value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </form>
        </div>
    );
}

export default Register;