let quizData = [
    {
       question: "The penalty for an individual knowingly transmitting a false distress is:",
       options: ["the surrender of the transmitter's radio equipment.", 
        "a fine of up to $5,000 and/or imprisonment for up to 12 months.", "a fine of up to $5,000.", 
        "none are correct."
        ],
       correct: "a fine of up to $5,000 and/or imprisonment for up to 12 months.", 
    },
    {
       question: "Which of these could be the call sign of an aircraft station:",
       options: ["Mobile One", "Staff Two-Three", "Cessna 172", "CFATE"],
       correct: "CFATE", 
    },
    {
       question: "The Restricted Radiotelephone Operators Certificate is obtained by:",
       options: ["Demonstrating competence through testing.", "Installing ISED approved equipment on board.", "Demonstrating competence through your flight instructor or drone examiner.", "Paying an annual fee."],
       correct: "Demonstrating competence through testing.", 
    },
    {
       question: "The call sign used to identify a land station is",
       options: [" The name of the person or persons operating the station.", "The name of your company.", "Whatever is convenient.", "Assigned by ISED."],
       correct: "Assigned by ISED.", 
    },
    {
       question: "In case of distress, who controls communications?",
       options: ["No one station ever controls communications.", "The aircraft in distress.", "The aeronautical ground or base station.", "The nearest station, aircraft or base."],
       correct: "The aircraft in distress.", 
    },
    {
       question: "When working in different time zones, pilots and drone operators should use _____ while dispatchers should use _______.",
       options: ["local time zone time; local time zone time.", "zulu time; zulu time.", "zulu time; Eastern Standard Time.", "local time zone time; zulu time."],
       correct: "zulu time; zulu time.", 
    },
    {
       question: "During a radio check, a base station indicates a readability of 1. What does this mean?",
       options: ["bad (or unreadable).", "poor (or readable now and then).", "good (or readable).", "excellent (or perfectly intelligible)."],
       correct: "bad (or unreadable).", 
    },
    {
       question: "The order of priority for transmission in the aeronautical service is ",
       options: ["Distress, urgency and safety communication.", "Distress, urgency and communications relating to radio direction finding.", "Distress, flight safety and weather warnings.", "Distress, urgency and flight safety."],
       correct: "Distress, urgency and communications relating to radio direction finding.", 
    },
    {
       question: "The international VHF distress frequency is",
       options: ["121.9 MHz.", "121.5 MHz.", "123.2 MHz.", "123.45 MHz."],
       correct: "121.5 MHz.", 
    },
    {
       question: "Radio equipment eligible for licensing in Canada must be:",
       options: ["Certified by ISED.", "Made in Canada.", "Certified by Transport Canada.", "Approved by the UL committee of Industry Canada Standards."],
       correct: "Certified by ISED.", 
    },
    {
       question: "What does the word MAYDAY indicate?",
       options: ["a broadcast with a safety message.", "the beginning of SOS communications in which communication will become restricted.", "an urgent situation.", "a distress situation."],
       correct: "a distress situation.", 
    },
    {
       question: "A pilot wants to order a pizza over the radio and wants olives on their pizza. The ground operator is having trouble understanding the pilots request, so the pilot decides to spell the word olives. How would they do that using the phonetic alphabet?",
       options: ["Opal Lima Indigo Vince Emma Suzanne", "Organ Landing Idea Vital Eager Sugar", "Oscar Lima India Victor Echo Sierra", "Owl Light India Victory Earing Susan"],
       correct: "Oscar Lima India Victor Echo Sierra", 
    },
    {
       question: "While ordering a pizza, the pilot has the passengers constantly yelling at them in the background with their order, while talking on the radio. Someone wants a cola then changes their mind to an iced tea. To indicate an error has been made, the pilot would say:",
       options: ["'I say again.'", "'mistake.'", "nothing. The pilot would simply restate the passengers new order.", "'correction.'"],
       correct: "'correction.'", 
    },
    {
       question: "A pilot orders a pizza over the radio (true story). The pilot wishes to know when the pizza will arrive. The ground operator wants to tell the pilot it will arrive at 9:30 AM local. To say this on the radio, the ground operator will say:",
       options: ["zero nine thirty hours.", "zero nine three zero hours.", "two one three zero hours.", "twenty one thirty hours."],
       correct: "zero nine three zero hours.", 
    },
    {
       question: "The pilot wants to acknowledge that they heard the arrival time of the pizza. What word or expression would they use to indicate they have heard and understood the arrival time of the pizza?",
       options: ["10-4.", "Affirmative.", "Roger.", "I receive."],
       correct: "Roger.", 
    },
    {
       question: "The ground controller is having a hard time taking the pilot’s pizza order request. They ask the pilot to “say again.” This means:",
       options: ["there is an error in your transmission, please correct yourself.", "I will relay your message for you.", "unreadable, try again when you are closer in range to us.", "please repeat your last transmission."],
       correct: "please repeat your last transmission.", 
    },
    {
       question: "The proper method to acknowledge the receipt of a distress message from aircraft C-FADA is: (assuming your station is C-FBRD) ",
       options: ["'Mayday, C-FBRD C-FBRD C-FBRD, Received Mayday'", "'Mayday, C-FADA C-FADA C-FADA, this is C-FBRD C-FBRD C-FBRD, Mayday Relay'", "'Mayday, Mayday, Mayday, this is C-FBRD C-FBRD C-FBRD, Silence Mayday'", "'Mayday, C-FADA C-FADA C-FADA, this is C-FBRD C-FBRD C-FBRD, Received Mayday'"],
       correct: "'Mayday, C-FADA C-FADA C-FADA, this is C-FBRD C-FBRD C-FBRD, Received Mayday'", 
    },
    {
       question: "Who issues Radio Station licenses in Canada?",
       options: ["The CRTC (Canadian Radio Television and Communications Commission)", "Innovation, Science and Economic Development Canada", "Canada Post", "Transport Canada."],
       correct: "Innovation, Science and Economic Development Canada", 
    },
    {
       question: "What is an ELT?",
       options: ["an enhanced location transmission.", "an emergency landing trace.", "an expanded locate trim indicator.", "an emergency locator transmitter."],
       correct: "an emergency locator transmitter.", 
    },
    {
       question: "Before talking on the radio, you should",
       options: ["ensure you are on the correct frequency.", "ensure the frequency is clear.", "know what you want to say before you transmit.", "all are correct."],
       correct: "all are correct.", 
    },
    {
       question: "Which of the following expressions follows proper radiotelephone procedures? ",
       options: ["Affirmative, Air Bravo Four Two Three.", "Repeat please, Air Bravo Four Two Three.", "I acknowledge, Air Bravo Four Two Three.", "Over and Out, Air Bravo Four Two Three."],
       correct: "Affirmative, Air Bravo Four Two Three.", 
    },
    {
       question: "The frequency 121.9 MHz would be spoken as:",
       options: ["One twenty one niner.", "One two one niner.", "One two one decimal niner.", "One two one point niner."],
       correct: "One two one decimal niner.", 
    },
    {
       question: "Any person having become aware of a radio communication transmitted other than by a broadcasting station or an amateur station is bound by the provisions of the Radiocommunication Act to:",
       options: ["preserve the secrecy of the correspondence.", "report the use of the frequency to the nearest ISED office.", "enter the details of the intercept in the station log.", "not to record such communication."],
       correct: "preserve the secrecy of the correspondence.", 
    },
    {
       question: "Call signs should be sent",
       options: ["As often as necessary until a reply from a station is received on the frequency.", "At the discretion of the pilot in accordance with local operating procedures.", "Only once during the interaction between a pilot and a base station.", "At least on the initial call and when concluding the communications."],
       correct: "At least on the initial call and when concluding the communications.", 
    },
    {
       question: "When cancelling a distress signal, the message is addressed to",
       options: ["all stations.", "a specific station.", "all answers are correct.", "ground control stations."],
       correct: "all stations.", 
    },
];

let questionNumber = 0;
let score = 0;
let MAX_QUESTIONS = 25;
let question;
let options;
let nextBtn;
let startBtn;
let quizResult;
let quizContainer;
let quizContent;
let timerElement;
let timerInterval;
let timeLeft = 25 * 60;
let userAnswer;

window.onload = function() {
    quizContainer = document.querySelector(".quiz-container");
    quizContent = document.querySelector(".quiz-content");
    question = document.querySelector(".question");
    options = document.querySelector(".options");
    nextBtn = document.querySelector(".next-btn");
    startBtn = document.querySelector("#start-exam-btn");
    quizResult = document.querySelector(".quiz-result");
    timerElement = document.querySelector(".timer");
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", displayNextQuestion);
};

const shuffleArray = array => {
    return array.slice().sort(() => Math.random() - 0.5);
};

const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const startTimer = () => {
    if (!timerElement) return;
    timerElement.classList.remove("danger");
    timerElement.textContent = `Time left: ${formatTime(timeLeft)}`;
    timerInterval = setInterval(() => {
        timeLeft -= 1;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time left: 0:00";
            timerElement.classList.remove("danger");
            displayQuizResult();
            return;
        }
        timerElement.textContent = `Time left: ${formatTime(timeLeft)}`;
        if (timeLeft < 60) {
            timerElement.classList.add("danger");
        }
    }, 1000);
};

const startQuiz = () => {
    startBtn.style.display = "none";
    quizContent.classList.remove("hidden");
    timeLeft = 25 * 60;
    if (timerElement) {
        timerElement.classList.remove("danger");
        timerElement.textContent = `Time left: ${formatTime(timeLeft)}`;
    }
    questionNumber = 0;
    score = 0;
    createQuestion();
    startTimer();
};

quizData = shuffleArray(quizData);

const resetLocalStorage = () => {
    for (let i = 0; i < MAX_QUESTIONS; i++) {
        localStorage.removeItem(`userAnswer_${i}`);
    };
};

resetLocalStorage();

const checkAnswer = (e) => {
    userAnswer = e.target.textContent;
    if (userAnswer === quizData[questionNumber].correct) {
        score++;
        e.target.classList.add("correct");
    } else{
        e.target.classList.add("incorrect");
    };

    localStorage.setItem(`userAnswer_${questionNumber}`, userAnswer);
    let allOptions = document.querySelectorAll(".option");
    allOptions.forEach((o) => {
        o.classList.add("disabled");
    });
};
const createQuestion = () => {
    options.innerHTML = "";
    question.innerHTML = `<span class='question-number'>${questionNumber + 1}/${MAX_QUESTIONS}</span>${quizData[questionNumber].question}`;

    const shuffledOptions = shuffleArray(quizData[questionNumber].options);

    shuffledOptions.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click", (e) => {
            checkAnswer(e);
        });
        options.appendChild(option);
    });
};

const retakeQuiz = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    questionNumber = 0;
    score = 0;
    quizData = shuffleArray(quizData);
    resetLocalStorage();
    quizResult.style.display = "none";
    quizContainer.style.display = "block";
    quizContent.classList.add("hidden");
    startBtn.style.display = "inline-block";
    timeLeft = 25 * 60;
    if (timerElement) {
        timerElement.classList.remove("danger");
        timerElement.textContent = `Time left: ${formatTime(timeLeft)}`;
    }
};

const displayQuizResult = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    quizResult.style.display = "flex";
    quizContainer.style.display = "none";
    quizResult.innerHTML = "";

    const resultHeading = document.createElement("h2");
    resultHeading.innerHTML = `Your Score: ${score}/${MAX_QUESTIONS},   ${Math.round((score / MAX_QUESTIONS) * 100)}%`;
    quizResult.appendChild(resultHeading);

    for (let i = 0; i < MAX_QUESTIONS; i++) {
        const resultItem = document.createElement("div");
        resultItem.classList.add("question-container");

        const userAnswer = localStorage.getItem(`userAnswer_${i}`);
        const correctAnswer = quizData[i].correct;

        let answeredCorrectly = userAnswer === correctAnswer;

        if(!answeredCorrectly) {
            resultItem.classList.add("incorrect");
        }

        resultItem.innerHTML = `<div class="question">Question ${i + 1}: ${quizData[i].question}</div>
        <div class="user-answer">Your answer: ${userAnswer || "Not answered"}</div>
        <div class="correct-answer">Correct answer: ${correctAnswer}</div>`;

        quizResult.appendChild(resultItem);
    };

    const retakeBtn = document.createElement("button");
    retakeBtn.classList.add("retake-btn");
    retakeBtn.innerHTML = "Retake Exam";
    retakeBtn.addEventListener("click", retakeQuiz); 
    quizResult.appendChild(retakeBtn);
};

const displayNextQuestion = () => {
    if (questionNumber >= MAX_QUESTIONS - 1) {
        displayQuizResult();
        return;
    };
    questionNumber++;
    createQuestion();
};