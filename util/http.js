import axios from 'axios';

export async function storeInst(instData) {
    const response = await axios.post('https://appointment-scheduler-2b0e4-default-rtdb.firebaseio.com/institutions.json', 
    instData
    );
    const id = response.data.name;
    return id;
}

export async function storeProf(profData) {
    const response = await axios.post('https://appointment-scheduler-2b0e4-default-rtdb.firebaseio.com/professionals.json', 
    profData
    );
    const id = response.data.name;
    return id;
}

export async function fetchInstitutions(){
    const response = await axios.get('https://appointment-scheduler-2b0e4-default-rtdb.firebaseio.com/institutions.json');
    
    const results = [];
    for(const key in response.data){
        const object = {
            id: key,
            color: response.data[key].color,
            image: response.data[key].image,
            name: response.data[key].name,
        };
        results.push(object);
    }
    return results;
}

export async function fetchProfessionals(){
    const response = await axios.get('https://appointment-scheduler-2b0e4-default-rtdb.firebaseio.com/professionals.json');
    const results = [];
    for(const key in response.data){
        const object = {
            id: key,
            address: response.data[key].address,
            image: response.data[key].image,
            institutionIds: response.data[key].institutionIds,
            name: response.data[key].name,
            rating: response.data[key].rating,
            schedule: response.data[key].schedule,
            sector: response.data[key].sector
        }
        results.push(object);
    }
    return results;
}