const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors()); 

const questions = [
    {
        question: 'What is the capital of India?',
        answers: [
            { text: 'Delhi', isCorrect: true },
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false },
            { text: 'Rome', isCorrect: false }
        ]
    },
    {
        question: 'Who wrote JAVA?',
        answers: [
            { text: 'Babbage', isCorrect: false },
            { text: 'James Gosling', isCorrect: true },
            { text: 'Barne stroutstrop', isCorrect: false },
            { text: 'Gray Steve', isCorrect: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', isCorrect: false },
            { text: 'Indian Ocean', isCorrect: false },
            { text: 'Arctic Ocean', isCorrect: false },
            { text: 'Pacific Ocean', isCorrect: true }
        ]
    },
    {
        question: 'What is the freezing point of water?',
        answers: [
            { text: '0°C', isCorrect: true },
            { text: '100°C', isCorrect: false },
            { text: '50°C', isCorrect: false },
            { text: '25°C', isCorrect: false }
        ]
    },
    {
        question: 'Largest exporter of spices?',
        answers: [
            { text: 'Italy', isCorrect: false },
            { text: 'Japan', isCorrect: false },
            { text: 'India', isCorrect: true },
            { text: 'USA', isCorrect: false }
        ]
    }
];

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
