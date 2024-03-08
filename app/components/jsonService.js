class JsonService {

    URL_API = "http://localhost:3000/"

    HEADERS = {
        "Content-Type": "application/json",
    }

    async loadData(endPoint){
        try {
            const data = await fetch(`${this.URL_API}${endPoint}s`,{
                method: "GET",
                headers: this.HEADERS
            }).then(data => data.json())
            return data
        } catch (error) {
            return []
        }

    }

    async loadDataId(endPoint, id){
        try {
            const data = await fetch(`${this.URL_API}${endPoint}s/${id}`,{
                method: "GET",
                headers: this.HEADERS
            }).then(data => data.json())
            return data 
        } catch (error) {
            return {}
        }

    }

    async saveData(endPoint, object){
        try {
            const data = await fetch(`${this.URL_API}${endPoint}s`,{
                method: "POST",
                headers: this.HEADERS,
                body: JSON.stringify(object)
            })
            return data
        } catch (error) {
            return {}
        }

    }

    async updateData(endPoint, object){
        try {
            const data = await fetch(`${this.URL_API}${endPoint}/${object.id}`,{
                method: "PUT",
                headers: this.HEADERS,
                body: JSON.stringify(object)
            })
            console.log(data)
            return data
        } catch (error) {
            return {}
        }

    }

    async deleteData(endPoint, id){
        try {
            const data = await fetch(`${this.URL_API}${endPoint}/${id}`,{
                method: "DELETE",
                headers: this.HEADERS
            })
            console.log(data)
            return data
        } catch (error) {
            return {}
        }

    }
}

export const jsonService = new JsonService()

//hacer try cath, si falla retornar un objeto o un arreglo vacio