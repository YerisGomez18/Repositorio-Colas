export class getValues{
    constructor(){
        
    }
    getValuesUnfila(servers: number, arrivals: number, services: number){
        const suma = servers + arrivals +  services
        return suma;
    }

    getValuesMMInf(arrivals: number, services: number){
        console.log('here', services, arrivals);
    }

    getValuesKClientes(servers: number, capacity: number, arrivals: number, services: number){
        console.log(servers, capacity, arrivals, services);
    }

    getValuesMClientes(servers: number, population: number, arrivals: number, services: number){
        console.log(servers, population, arrivals, services);
    }


    
}