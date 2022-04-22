function Audio1() {
    document.getElementById("A trapped boy").play();
    stopPlaying();
};

function Audio2() {
    document.getElementById("Aqua").play();
    stopPlaying();
};

function Audio3() {
    document.getElementById("Bird noise").play();
    stopPlaying();
};

function Audio4() {
    document.getElementById("Cashback").play();
    stopPlaying();
};

function Audio5() {
    document.getElementById("do you like owls").play();
    stopPlaying();
};

function Audio6() {
    document.getElementById("forget it").play();
    stopPlaying();
};

function Audio7() {
    document.getElementById("ping").play();
    stopPlaying();
};

function Audio8() {
    document.getElementById("superb").play();
    stopPlaying();
};

function Audio9() {
    document.getElementById("whos he").play();
    stopPlaying();
};

function stopPlaying() {
    document.getElementById("lists");
    audio.pause();
    audio.currentTime = 0;
}


function Audio10() {
    document.getElementById("Ah Ha").play();
    stopPlaying();
};

function Audio11() {
    document.getElementById("Dan").play();
    stopPlaying();
};

function Audio12() {
    document.getElementById("Back of the net").play();
    stopPlaying();
};

function Audio13() {
    document.getElementById("Bang out of order").play();
    stopPlaying();
};

function Audio14() {
    document.getElementById("Jurrassic park").play();
    stopPlaying();
};

function Audio15() {
    document.getElementById("smell my cheese").play();
    stopPlaying();
};

function Audio16() {
    document.getElementById("goal").play();
    stopPlaying();
};

function Audio17() {
    document.getElementById("kiss my face").play();
    stopPlaying();
};

function Audio18() {
    document.getElementById("hello partridge").play();
    stopPlaying();
};

function stopPlaying() {
    document.getElementById("lists");
    audio.pause();
    audio.currentTime = 0;
}


function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 10;
    window.speechSynthesis.speak(speech);
}

function Audio19() {
    document.getElementById("bestfriend").play();
    stopPlaying();
};

function Audio20() {
    document.getElementById("bangkok").play();
    stopPlaying();
};

function Audio21() {
    document.getElementById("first class").play();
    stopPlaying();
};

function Audio22() {
    document.getElementById("thank you").play();
    stopPlaying();
};

function Audio23() {
    document.getElementById("why").play();
    stopPlaying();
};

function Audio24() {
    document.getElementById("you people").play();
    stopPlaying();
};

function Audio25() {
    document.getElementById("how old are you").play();
    stopPlaying();
};

function Audio26() {
    document.getElementById("japan").play();
    stopPlaying();
};

function Audio27() {
    document.getElementById("nirvana").play();
    stopPlaying();
};
