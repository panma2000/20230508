import express from 'express';
import axios from 'axios';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
"use strict";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'docs')));
app.use(express.json());
app.use(cors());

app.get('/', () => {
    res.render('/docs/index.html');
});

app.post('/chat', (req, res) => {
    const prompt = req.body.prompt;
    try {
        axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": prompt}]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
                }
            }  
        ).then((response) => {
            res.json(response.data);
        })
    } catch (error) {
        console.log(error.message);
        res.json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(PORT);
});