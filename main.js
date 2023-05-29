import './style.css'
import axios from 'axios';

window.onload = function () {
    document.getElementById('chatForm').onsubmit = function (e) {
        e.preventDefault();

        const prompt = document.getElementById('prompt').value;
        const responseElement = document.getElementById('response');

        axios.post('http://http://165.22.102.61:3000/api/chat', { prompt: prompt })
            .then(function (response) {
                responseElement.innerHTML = response.data.choices[0].message.content;
            })
            .catch(function (error) {
                console.error('Error:', error);
                responseElement.textContent = 'Error: ' + error.message;
            });
    };
    
};