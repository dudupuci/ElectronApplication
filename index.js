// const { app } = require("electron");

// Index.js => Index.html (scripts DOM);
console.log("JavaScript has been initialized")

// Initial alert - Software on test
setTimeout(() => {
    window.alert("Grupo Agathon Register APP - DEMO Version v.1.0..\nOpções Disponíveis até o momento:\n1) Registrar dados na tabela principal (duplo click em qualquer campo);\n2) Modo tela cheia (presione F11 para entrar/deixar);\n3) Observação: Caso a digitação bugue, minimize a tela e volte.\nPeço desculpas e estou resolvendo isto.")
}, 2000);

function liveViewClock() {
    var date = new Date();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var calendar = new Date();
    var day = calendar.getDay();
    var month = calendar.getMonth();
    var year = calendar.getFullYear();
    var formatedDate = (day + 24) + "/" + "0" + (month + 1) + "/" + year;
    var formatedDateApplication = document.getElementById('live-date')
    formatedDateApplication.innerHTML = formatedDate;

    // If minutes < 10, concatenate with an zero.
    if (date.getMinutes() < 10 && date.getSeconds() >= 0 && date.getSeconds() <= 9) {
        var time = hour + ":0" + minutes + ":0" + seconds;
        var timeApplication = document.getElementById('live-clock')
        timeApplication.innerHTML = time;
    } else {
        var time = hour + ":" + minutes + ":" + seconds;
        var timeApplication = document.getElementById('live-clock')
        timeApplication.innerHTML = time;
    }
}
setInterval(liveViewClock, 500);

// Functions Script DOM

function soonAlert() {
    const toAlert = document.getElementById('x')
    window.alert("Cabeçalho em desenvolvimento, guenta ai!")
}


function onClick() {
    const event = document.getElementById('teste');
    event.style.backgroundColor = 'blue';
}
// - - - - - - - - - - - - - - - - - -NOMES - - - - - - - - - - - - - - - - - -
function onDoubleClick() {
    var eventOnDblClick = document.getElementsByClassName('name-camp')[0];
    eventOnDblClick.innerHTML = '<input type="text" id="new-value" value="" placeholder="Insira o nome"> </input> <button type="submit" onclick="getValue()" class="btn-send">✔️</button>';
}
function onDoubleClick2() {
    var eventOnDblClick2 = document.getElementsByClassName('name-camp')[1];
    eventOnDblClick2.innerHTML = '<input type="text" id="new-value2" value="" placeholder="Insira o nome"> </input> <button type="submit" onclick="getValue2()" class="btn-send">✔️</button>';
}
function onDoubleClick3() {
    var eventOnDblClick3 = document.getElementsByClassName('name-camp')[2];
    eventOnDblClick3.innerHTML = '<input type="text" id="new-value3" value="" placeholder="Insira o nome"> </input> <button type="submit" onclick="getValue3()" class="btn-send">✔️</button>';
}
function onDoubleClick4() {
    var eventOnDblClick4 = document.getElementsByClassName('name-camp')[3];
    eventOnDblClick4.innerHTML = '<input type="text" id="new-value4" value="" placeholder="Insira o nome"> </input> <button type="submit" onclick="getValue4()" class="btn-send">✔️</button>';
}
function onDoubleClick5() {
    var eventOnDblClick5 = document.getElementsByClassName('name-camp')[4];
    eventOnDblClick5.innerHTML = '<input type="text" id="new-value5" value="" placeholder="Insira o nome"> </input> <button type="submit" onclick="getValue5()" class="btn-send">✔️</button>';
}

function getValue() {
    var x = document.getElementById('new-value').value;
    var y = document.getElementsByClassName('name-camp')[0]
    y.innerHTML = x;

}

function getValue2() {
    var x = document.getElementById('new-value2').value;
    var y = document.getElementsByClassName('name-camp')[1]
    y.innerHTML = x;
}
function getValue3() {
    var x = document.getElementById('new-value3').value;
    var y = document.getElementsByClassName('name-camp')[2]
    y.innerHTML = x;
}
function getValue4() {
    var x = document.getElementById('new-value4').value;
    var y = document.getElementsByClassName('name-camp')[3]
    y.innerHTML = x;
}
function getValue5() {
    var x = document.getElementById('new-value5').value;
    var y = document.getElementsByClassName('name-camp')[4]
    y.innerHTML = x;
}

function action() {
    var h = document.getElementsByClassName('only')[0];
    var i = document.getElementById('k');
    i.innerHTML = '<input type="text" value=""> </input> <button type="submit" onclick="getValue6()">✔️</button>'
}
// - - - - - - - - - - - - - - - - -CURSOS - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function cursoDoubleClick() {
    var eventOnDblClick = document.querySelector('#curso1');
    eventOnDblClick.innerHTML = '<input type="text" id="new-value" value="" placeholder="Insira o nome do curso"> </input> <button type="submit" onclick="getCurso()" class="btn-send">✔️</button>';
}
function cursoDoubleClick2() {
    var eventOnDblClick2 = document.querySelector('#curso2');
    eventOnDblClick2.innerHTML = '<input type="text" id="new-value2" value="" placeholder="Insira o nome do curso"> </input> <button type="submit" onclick="getCurso2()" class="btn-send">✔️</button>';
}
function cursoDoubleClick3() {
    var eventOnDblClick3 = document.querySelector('#curso3');
    eventOnDblClick3.innerHTML = '<input type="text" id="new-value3" value="" placeholder="Insira o nome do curso"> </input> <button type="submit" onclick="getCurso3()" class="btn-send">✔️</button>';
}
function cursoDoubleClick4() {
    var eventOnDblClick4 = document.querySelector('#curso4');
    eventOnDblClick4.innerHTML = '<input type="text" id="new-value4" value="" placeholder="Insira o nome do curso"> </input> <button type="submit" onclick="getCurso4()" class="btn-send">✔️</button>';
}
function cursoDoubleClick5() {
    var eventOnDblClick5 = document.querySelector('#curso5');
    eventOnDblClick5.innerHTML = '<input type="text" id="new-value5" value="" placeholder="Insira o nome do curso"> </input> <button type="submit" onclick="getCurso5()" class="btn-send">✔️</button>';
}


function getCurso() {
    var x = document.getElementById('new-value').value;
    var y = document.querySelector('#curso1')
    y.innerHTML = x;

}

function getCurso2() {
    var x = document.getElementById('new-value2').value;
    var y = document.querySelector('#curso2')
    y.innerHTML = x;
}
function getCurso3() {
    var x = document.getElementById('new-value3').value;
    var y = document.querySelector('#curso3')
    y.innerHTML = x;
}
function getCurso4() {
    var x = document.getElementById('new-value4').value;
    var y = document.querySelector('#curso4')
    y.innerHTML = x;
}
function getCurso5() {
    var x = document.getElementById('new-value5').value;
    var y = document.querySelector('#curso5')
    y.innerHTML = x;
}





// - - - - - - - - - - - - - - - - -PAGAMENTOS - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function statusDoubleClick() {
    var eventOnDblClick = document.querySelector('#status1');
    eventOnDblClick.innerHTML = '<input type="text" id="new-value" value="" placeholder="Insira o status"> </input> <button type="submit" onclick="getStatus()" class="btn-send">✔️</button>';
}
function statusDoubleClick2() {
    var eventOnDblClick2 = document.querySelector('#status2');
    eventOnDblClick2.innerHTML = '<input type="text" id="new-value2" value="" placeholder="Insira o status"> </input> <button type="submit" onclick="getStatus2()" class="btn-send">✔️</button>';
}
function statusDoubleClick3() {
    var eventOnDblClick3 = document.querySelector('#status3');
    eventOnDblClick3.innerHTML = '<input type="text" id="new-value3" value="" placeholder="Insira o status"> </input> <button type="submit" onclick="getStatus3()" class="btn-send">✔️</button>';
}
function statusDoubleClick4() {
    var eventOnDblClick4 = document.querySelector('#status4');
    eventOnDblClick4.innerHTML = '<input type="text" id="new-value4" value="" placeholder="Insira o status"> </input> <button type="submit" onclick="getStatus4()" class="btn-send">✔️</button>';
}
function statusDoubleClick5() {
    var eventOnDblClick5 = document.querySelector('#status5');
    eventOnDblClick5.innerHTML = '<input type="text" id="new-value5" value="" placeholder="Insira o status"> </input> <button type="submit" onclick="getStatus5()" class="btn-send">✔️</button>';
}


function getStatus() {
    var x = document.getElementById('new-value').value;
    var y = document.querySelector('#status1')
    y.innerHTML = x;
}
function getStatus2() {
    var x = document.getElementById('new-value2').value;
    var y = document.querySelector('#status2')
    y.innerHTML = x;
}
function getStatus3() {
    var x = document.getElementById('new-value3').value;
    var y = document.querySelector('#status3')
    y.innerHTML = x;
}
function getStatus4() {
    var x = document.getElementById('new-value4').value;
    var y = document.querySelector('#status4')
    y.innerHTML = x;
}
function getStatus5() {
    var x = document.getElementById('new-value5').value;
    var y = document.querySelector('#status5')
    y.innerHTML = x;
}
