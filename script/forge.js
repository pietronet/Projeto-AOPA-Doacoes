const url = "https://forge.withub.ai/api/triggers/5257a02d-c19b-4969-ab81-2206de86082c/execute/66f815983976c19201c855b4";

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({}) // Corpo vazio, conforme o comando curl
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Se espera uma resposta JSON
    })
    .then(data => {
        console.log('Success:', data); // Processar os dados retornados
    })
    .catch(error => {
        console.error('Error:', error); // Captura de erros
        
    });

