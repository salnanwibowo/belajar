import React, { useState} from "react";

const Belajar = () => {
    const [nama,setName] = useState("salnan");
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(nama=="") {
            alert("Masukan Nama");
        }
        else{
            alert("done");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Masukan Nama {nama}</h1>
            <input type="text" name="nama" id="nama" value={nama} onChange={handleChange}></input>
            <button type="submit">Daftar</button>
        </form>
    );
}
export default Belajar;