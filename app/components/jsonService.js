class JsonService {

    URL_API = "http://localhost:3000/"

    HEADERS = {
        "Content-Type": "application/json",
    }
    
    async loadData(endPoint){
        const data = await fetch(`${this.URL_API}${endPoint}`,{
            method: "GET",
            headers: this.HEADERS
        }).then(data => data.json())
        return data
    }

}

export const jsonService = new JsonService()

//crear un saveData el cual funciones de forma similar al loadData, Debe tomar el endPoint y tener agregado un objeto Dato, Debe cargarse el cuerpo del objeto sego la data