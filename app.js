document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://catfact.ninja/fact';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const dataDiv = document.getElementById('data');
            dataDiv.innerHTML = `<h3>Random Fact:</h3><p>${data.fact}</p>`;
            
            document.getElementById('api-description').textContent = 
                'The Cat Facts API provides random interesting facts about cats.';
            document.getElementById('api-source').textContent = 
                'Source: https://catfact.ninja/';
            document.getElementById('api-parameters').textContent = 
                'No parameters required for this GET request.';
            document.getElementById('api-applications').textContent = 
                'Applications: This API could be used in animal welfare websites or fun fact generators.';
        })
        .catch(error => console.error('Error fetching data:', error));
});
