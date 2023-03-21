import React, {useState} from "react";

const Belajarlagi = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const handlename = (e) => {
        setNama(e.target.value);
    }
    const handleemail = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <label>Nama {nama}</label>
            <input type="text" id="nama" name="nama" value={nama} onChange={handlename}></input>

            <label>Email {email}</label>
            <input type="text" id="email" name="email" value={email} onChange={handleemail}></input>
        </div>
    )
}

export default Belajarlagi;