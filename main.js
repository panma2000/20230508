import './style.css'
import axios from 'axios';

window.onload = function () {
    document.getElementById('chatform').onsubmit = function (e) {
        e.preventDefault();

        const prompt = document.getElementById('prompt').value;
        const responseElement = document.getElementById('response');

        axios.post('http://localhost:3000/chat', { prompt: prompt })
            .then(function (response) {
                responseElement.innerHTML = response.data.choices[0].message.content;
            })
            .catch(function (error) {
                console.error('Error:', error);
                responseElement.textContent = 'Error: ' + error.message;
            });
    };
    
};