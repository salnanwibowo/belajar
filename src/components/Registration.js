import React, { useState} from "react";

const Registration = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost/belajar/registration.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        const result = await response.json();
        if (result.status === "success") {
            alert("Pendaftaran berhasil");
        } else {
            alert("Terjadi kesalahan. Silahkan coba lagi");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
          <h2>Formulir Pendaftaran</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Daftar</button>
        </form>
    );
};
export default Registration;