import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "assets/css/visually-impaired.css";
function App() {
    const commands = [
        {
            command: "pay water bill",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('water bill paid'));
            },
        },
        {
            command: "pay electricity bill",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('electricity bill paid'));
            },
        },
        {
            command: "pay gas bill",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Gas Bill paid'));
            },
        },
        {
            command: "pay credit card bill",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Credit card bill paid'));
            },
        },
        {
            command: "transfer money",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Money transferred'));
            },
        },
        {
            command: "close account",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Account closed'));
            },
        },
        {
            command: "open account",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Our skilled team of software engineers will be in contact with you shortly to help you apply for a new account'));
            },
        },
        {
            command: "report credit card",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Our skilled team of software engineers will be in contact with you shortly to hear about your issues'));
            },
        },
        {
            command: "remind me to pay bill",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('reminder set'));
            },
        },
        {
            command: "apply for a new credit card",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Our skilled team of software engineers will be in contact with you shortly to help you apply for a credit card'));
            },
        },
        {
            command: "redeem points",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('points redeemed'));
            },
        },
        {
            command: "transfer money",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('money transfered'));
            },
        },
        {
            command: "apply for loan",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Our skilled team of software engineers will be in contact with you shortly to help you apply for a loan'));
            },
        },
        {
            command: "pay loan installment",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('water bill paid'));
            },
        },
        {
            command: "report technical issue",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Our skilled team of software engineers will be in contact with you shortly to hear about your issues'));
            },
        },
        {
            command: "reset",
            callback: () => {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Reset'));
                console.log("reset");
                handleReset();
            },
        },


    ];
    const { transcript, resetTranscript } = useSpeechRecognition({ commands });
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className="mircophone-container">
                Browser is not Support Speech Recognition.
            </div>
        );
    }
    const handleListing = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
        });
    };
    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
    };
    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };
    return (
        <div className="microphone-wrapper">
            <div className="mircophone-container">
                <div
                    className="microphone-icon-container"
                    ref={microphoneRef}
                    onClick={handleListing}
                >

                </div>
                <div className="microphone-status">
                    {isListening ? "Listening........." : "Click to start Listening"}
                </div>
                {isListening && (
                    <button className="microphone-stop btn" onClick={stopHandle} style={{ color: 'black' }}>
                        Stop
                    </button>
                )}
            </div>
            {transcript && (
                <div className="microphone-result-container">
                    <div className="microphone-result-text">{transcript}</div>
                    <button className="microphone-reset btn" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
}
export default App;