import axios from "axios";
import { useState } from "react";
import styles from"./styles.module.css"


const apiUrl = "http://localhost:5000/";
const Main = () => {

    const updateUser = (id, data) => {
        return axios.put(`${apiUrl}/${id}`, data);
    };

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = () => {

    };
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return(
        <><div className={styles.main_Container}>
            <nav className={styles.navbar}>
                <h1>Welcome</h1>
                <button className={styles.white_btn} onClick={handleLogout}>Logout</button>
            </nav>
        </div>
        
        <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={user.firstName}
                        required
                        className={styles.input} />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={user.lastName}
                        required
                        className={styles.input} />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={user.email}
                        required
                        className={styles.input} />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={user.password}
                        required
                        className={styles.input} />

                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.green_btn}>
                        Sign Up
                    </button>
                </form>
            </div></>
    )
};

export default Main