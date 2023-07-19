import axios from "axios";

const apiUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async (data) => {
    try {
        const url = `${apiUrl}/register`;
        const result = await axios.post(url, data) // axios(url) hace lo mismo
        return result.data;
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al registrar el usuario.")
    }
}

export const userLogin = async (data) => {
    try {
        const url = `${apiUrl}/login`;
        const result = await axios.post(url, data) // axios(url) hace lo mismo
        return result.data;
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al conectar el usuario.")
    }
}