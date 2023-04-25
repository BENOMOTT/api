const accessKey = '97737fa8-8208-4677-93f4-f082fa239260';

const headers = {
    'X-Meteum-API-Key': accessKey
};

fetch('https://api.meteum.ai/v1/forecast?lat=52.37125&lon=4.89388', { headers })
    .then(response => response.json())
    .then(json => console.log(json));
