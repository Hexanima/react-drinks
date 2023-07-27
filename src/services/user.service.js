const apiUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async (data) => {
    try {
        const url = `${apiUrl}/register`;
        const res = await fetch(url, {
            body: data
        })
        /* const  data  = await res.json() // axios(url) hace lo mismo
        const result = await axios.post(url, data) // axios(url) hace lo mismo */
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al registrar el usuario.")
    }
}

export const userLogin = async (data) => {
    try {
        const url = `${apiUrl}/login`;
        const res = await fetch(url, {
            body: data
        })
        /* const  data  = await res.json() // axios(url) hace lo mismo
        const result = await axios.post(url, data) // axios(url) hace lo mismo */
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al conectar el usuario.")
    }
}