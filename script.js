"use strict";


/* =========================================================
   NEO MORSE 1.1
   Основная логика приложения
========================================================= */


/* =========================================================
   АЛФАВИТЫ
========================================================= */

const MORSE = {

    en: {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    },


    ru: {
        А: ".-",
        Б: "-...",
        В: ".--",
        Г: "--.",
        Д: "-..",
        Е: ".",
        Ё: ".",
        Ж: "...-",
        З: "--..",
        И: "..",
        Й: ".---",
        К: "-.-",
        Л: ".-..",
        М: "--",
        Н: "-.",
        О: "---",
        П: ".--.",
        Р: ".-.",
        С: "...",
        Т: "-",
        У: "..-",
        Ф: "..-.",
        Х: "....",
        Ц: "-.-.",
        Ч: "---.",
        Ш: "----",
        Щ: "--.-",
        Ъ: "--.--",
        Ы: "-.--",
        Ь: "-..-",
        Э: "..-..",
        Ю: "..--",
        Я: ".-.-",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    },


    az: {
        A: ".-",
        B: "-...",
        C: "-.-.",
        Ç: "-.-.",
        D: "-..",
        E: ".",
        Ə: ".-..-",
        F: "..-.",
        G: "--.",
        Ğ: "--.",
        H: "....",
        X: "....",
        I: "..",
        İ: "..",
        J: ".---",
        K: "-.-",
        Q: "--.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        Ö: "---.",
        P: ".--.",
        R: ".-.",
        S: "...",
        Ş: "...-",
        T: "-",
        U: "..-",
        Ü: "..--",
        V: "...-",
        Y: "-.--",
        Z: "--..",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    },


    tr: {
        A: ".-",
        B: "-...",
        C: "-.-.",
        Ç: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        Ğ: "--.",
        H: "....",
        I: "..",
        İ: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        Ö: "---.",
        P: ".--.",
        R: ".-.",
        S: "...",
        Ş: "...-",
        T: "-",
        U: "..-",
        Ü: "..--",
        V: "...-",
        Y: "-.--",
        Z: "--..",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    },


    de: {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",

        Ä: ".-.-",
        Ö: "---.",
        Ü: "..--",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    },


    fr: {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",

        À: ".--.-",
        Ç: "-.-..",
        È: ".-..-",
        É: "..-..",
        Ê: "..-..",
        Ô: "---.",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    },


    es: {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        Ñ: "--.--",

        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----."
    }

};


/* =========================================================
   ЭЛЕМЕНТЫ
========================================================= */

const language =
    document.getElementById("language");

const input =
    document.getElementById("input");

const result =
    document.getElementById("result");

const counter =
    document.getElementById("counter");

const encodeMode =
    document.getElementById("encodeMode");

const decodeMode =
    document.getElementById("decodeMode");

const inputLabel =
    document.getElementById("inputLabel");

const resultLabel =
    document.getElementById("resultLabel");

const playButton =
    document.getElementById("playButton");

const stopButton =
    document.getElementById("stopButton");

const copyButton =
    document.getElementById("copyButton");

const clearInputButton =
    document.getElementById("clearInput");

const resetButton =
    document.getElementById("resetButton");

const themeButton =
    document.getElementById("themeButton");

const speed =
    document.getElementById("speed");

const frequency =
    document.getElementById("frequency");

const speedValue =
    document.getElementById("speedValue");

const frequencyValue =
    document.getElementById("frequencyValue");

const status =
    document.getElementById("status");

const guide =
    document.getElementById("guide");


/* =========================================================
   СОСТОЯНИЕ
========================================================= */

let currentMode = "encode";

let audioContext = null;

let oscillator = null;

let gainNode = null;

let playbackToken = 0;


/* =========================================================
   ОБРАТНЫЕ ТАБЛИЦЫ
========================================================= */

const REVERSE = {};


for (const languageName in MORSE) {

    REVERSE[languageName] = {};

    const alphabet =
        MORSE[languageName];

    for (const character in alphabet) {

        const code =
            alphabet[character];

        if (!REVERSE[languageName][code]) {

            REVERSE[languageName][code] =
                character;
        }
    }
}


/* =========================================================
   STATUS
========================================================= */

function showStatus(
    message,
    type = ""
) {

    status.textContent = message;

    status.className = "status";

    if (type) {
        status.classList.add(type);
    }
}


/* =========================================================
   АЛФАВИТ
========================================================= */

function getAlphabet() {

    return MORSE[language.value];
}


/* =========================================================
   ТЕКСТ → МОРЗЕ
========================================================= */

function textToMorse(text) {

    const alphabet =
        getAlphabet();

    const output = [];


    for (const character of text.toUpperCase()) {

        if (character === " ") {

            output.push("/");

            continue;
        }


        if (alphabet[character]) {

            output.push(
                alphabet[character]
            );

            continue;
        }


        /*
         * Если символ не поддерживается,
         * оставляем его как ?.
         */

        if (
            /[^\s]/.test(character)
        ) {

            output.push("?");
        }
    }


    return output.join(" ");
}


/* =========================================================
   МОРЗЕ → ТЕКСТ
========================================================= */

function morseToText(text) {

    const table =
        REVERSE[language.value];


    if (!text.trim()) {
        return "";
    }


    const words =
        text
            .trim()
            .split("/");


    const resultWords = [];


    for (const word of words) {

        if (!word.trim()) {

            resultWords.push("");

            continue;
        }


        const letters =
            word
                .trim()
                .split(/\s+/);


        let decoded = "";


        for (const code of letters) {

            if (table[code]) {

                decoded +=
                    table[code];

            } else {

                decoded += "?";
            }
        }


        resultWords.push(decoded);
    }


    return resultWords.join(" ");
}


/* =========================================================
   ПЕРЕВОД
========================================================= */

function translate() {

    counter.textContent =
        input.value.length;


    if (!input.value.trim()) {

        result.textContent =
            "Здесь появится результат";

        result.classList.add("empty");

        showStatus("");

        return;
    }


    let translated;


    if (currentMode === "encode") {

        translated =
            textToMorse(input.value);

    } else {

        translated =
            morseToText(input.value);
    }


    if (!translated) {

        result.textContent =
            "Нет результата";

    } else {

        result.textContent =
            translated;
    }


    result.classList.remove("empty");

    showStatus(
        "Готово",
        "success"
    );
}


/* =========================================================
   РЕЖИМЫ
========================================================= */

function setMode(mode) {

    currentMode = mode;


    encodeMode.classList.toggle(
        "active",
        mode === "encode"
    );


    decodeMode.classList.toggle(
        "active",
        mode === "decode"
    );


    if (mode === "encode") {

        inputLabel.textContent =
            "ТЕКСТ";

        resultLabel.textContent =
            "АЗБУКА МОРЗЕ";

        input.placeholder =
            "Напишите сообщение...";

    } else {

        inputLabel.textContent =
            "АЗБУКА МОРЗЕ";

        resultLabel.textContent =
            "ТЕКСТ";

        input.placeholder =
            "Например: .... . .-.. .-.. ---";
    }


    translate();
}


/* =========================================================
   AUDIO CONTEXT
========================================================= */

function getAudioContext() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContext) {

            throw new Error(
                "Web Audio API не поддерживается."
            );
        }


        audioContext =
            new AudioContext();
    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();
    }


    return audioContext;
}


/* =========================================================
   ЗВУК ON
========================================================= */

function startTone() {

    const context =
        getAudioContext();


    oscillator =
        context.createOscillator();


    gainNode =
        context.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.value =
        Number(frequency.value);


    gainNode.gain.value =
        0.15;


    oscillator.connect(
        gainNode
    );


    gainNode.connect(
        context.destination
    );


    oscillator.start();
}


/* =========================================================
   ЗВУК OFF
========================================================= */

function stopTone() {

    if (!oscillator) {
        return;
    }


    try {

        oscillator.stop();

    } catch (error) {
        /* Уже остановлен */
    }


    try {

        oscillator.disconnect();

    } catch (error) {
        /* Уже отключен */
    }


    oscillator = null;


    if (gainNode) {

        try {
            gainNode.disconnect();
        } catch (error) {}
    }


    gainNode = null;
}


/* =========================================================
   ЗАДЕРЖКА
========================================================= */

function wait(milliseconds) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );
}


/* =========================================================
   ТАЙМИНГ МОРЗЕ
========================================================= */

function getTiming() {

    const wpm =
        Number(speed.value);


    /*
     * Стандартная формула
     * для приблизительного WPM.
     */

    const dot =
        1200 / wpm;


    return {

        dot: dot,

        dash: dot * 3,

        symbolGap: dot,

        letterGap: dot * 3,

        wordGap: dot * 7
    };
}


/* =========================================================
   ВОСПРОИЗВЕДЕНИЕ
========================================================= */

async function playMorse() {

    stopMorse();


    let morse;


    if (currentMode === "encode") {

        morse =
            textToMorse(
                input.value
            );

    } else {

        morse =
            input.value.trim();
    }


    if (
        !morse ||
        !/[.-]/.test(morse)
    ) {

        showStatus(
            "Нет корректной азбуки Морзе.",
            "error"
        );

        return;
    }


    let context;


    try {

        context =
            getAudioContext();

    } catch (error) {

        showStatus(
            "Аудио не поддерживается.",
            "error"
        );

        return;
    }


    const timing =
        getTiming();


    const token =
        ++playbackToken;


    playButton.disabled =
        true;

    stopButton.disabled =
        false;


    showStatus(
        "Воспроизведение..."
    );


    try {

        for (
            let i = 0;
            i < morse.length;
            i++
        ) {

            if (
                token !==
                playbackToken
            ) {

                return;
            }


            const symbol =
                morse[i];


            if (symbol === ".") {

                startTone();

                await wait(
                    timing.dot
                );

                stopTone();

                await wait(
                    timing.symbolGap
                );

            }


            else if (symbol === "-") {

                startTone();

                await wait(
                    timing.dash
                );

                stopTone();

                await wait(
                    timing.symbolGap
                );

            }


            else if (symbol === " ") {

                /*
                 * Между буквами уже была
                 * задержка после символа.
                 */

                await wait(
                    timing.letterGap -
                    timing.symbolGap
                );

            }


            else if (symbol === "/") {

                await wait(
                    timing.wordGap -
                    timing.letterGap
                );
            }
        }


        if (
            token ===
            playbackToken
        ) {

            showStatus(
                "Воспроизведение завершено.",
                "success"
            );
        }

    } catch (error) {

        stopTone();

        showStatus(
            "Ошибка воспроизведения.",
            "error"
        );
    }


    if (
        token ===
        playbackToken
    ) {

        playButton.disabled =
            false;

        stopButton.disabled =
            true;
    }
}


/* =========================================================
   ОСТАНОВКА
========================================================= */

function stopMorse() {

    playbackToken++;


    stopTone();


    playButton.disabled =
        false;


    stopButton.disabled =
        true;
}


/* =========================================================
   КОПИРОВАНИЕ
========================================================= */

async function copyResult() {

    const text =
        result.textContent;


    if (
        !text ||
        result.classList.contains("empty")
    ) {

        showStatus(
            "Нечего копировать.",
            "error"
        );

        return;
    }


    try {

        await navigator.clipboard.writeText(
            text
        );


        showStatus(
            "Скопировано.",
            "success"
        );

    } catch (error) {

        /*
         * Запасной вариант для старых браузеров.
         */

        const temporary =
            document.createElement(
                "textarea"
            );


        temporary.value =
            text;


        document.body.appendChild(
            temporary
        );


        temporary.select();


        try {

            document.execCommand(
                "copy"
            );


            showStatus(
                "Скопировано.",
                "success"
            );

        } catch {

            showStatus(
                "Не удалось скопировать.",
                "error"
            );
        }


        temporary.remove();
    }
}


/* =========================================================
   ТАБЛИЦА МОРЗЕ
========================================================= */

function renderGuide() {

    guide.innerHTML = "";


    const alphabet =
        getAlphabet();


    for (
        const character in alphabet
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "guide-item";


        const letter =
            document.createElement(
                "span"
            );


        letter.textContent =
            character;


        const code =
            document.createElement(
                "span"
            );


        code.className =
            "guide-code";


        code.textContent =
            alphabet[character];


        item.appendChild(
            letter
        );


        item.appendChild(
            code
        );


        guide.appendChild(
            item
        );
    }
}


/* =========================================================
   ТЕМА
========================================================= */

function tog
