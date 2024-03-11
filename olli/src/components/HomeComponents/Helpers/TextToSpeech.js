import { useState } from 'react';

const useSpeechSynthesis = () => {
    const [speaking, setSpeaking] = useState(false);

    const speak = (text) => {
        if (!speaking) {
            setSpeaking(true);

            const utterance = new SpeechSynthesisUtterance(text);
            const voices = window.speechSynthesis.getVoices();
            utterance.voice = voices[0]; // Choose a specific voice

            window.speechSynthesis.speak(utterance);

            utterance.onend = () => {
                setSpeaking(false);
            };
        }
    };

    return speak;
};

export default useSpeechSynthesis;
