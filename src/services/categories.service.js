const apiUrl = import.meta.env.VITE_API_URL;

export const getCategoriesService = async () => {
    try {
        const url = `${apiUrl}/list.php?c=list`;
        const res = await fetch(url)
        const  data  = await res.json() // axios(url) hace lo mismo
        return data.drinks || [];
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al obtener las categorias.")
    }
}