let employeeNumber;
let employeeName;
let answers = [];

window.onload = function () {
    let urlParam = location.search.substring(1).split('=');
    if(urlParam.length >= 2){
        if(urlParam[0] == "employeeId"){
            setEmployeeNumber(urlParam[1]);
        }else{
            setEmployeeNumber("");
        }
    }else{
        setEmployeeNumber("");
    }

    if (getJsonData() == true) {
        document.getElementById("employeeName").innerHTML = "";
    } else {
        document.getElementById("employeeName").innerHTML = "エラー";
        return;
    }

    dispEmployeeName();

    dispEmployeeAnswer();

}


function getJsonData() {
    let obj = new Object();
    let json;
    let jsonParse;
    obj.id = employeeNumber;
    jsonStringify = JSON.stringify(obj);
    json = getEmployeeAnswer(jsonStringify);
    jsonParse = JSON.parse(json);

    employeeName = jsonParse.name
    if (employeeName == "") {
        return false;
    }

    for (i = 0; i < jsonParse.question.length; i++) {
        q = jsonParse.question[i];
        if (q.questiontype == QUESTIONTYPE.radio) {
            for (j = 0; j < q.sub.length; j++) {
                ansId = "ans" + (i + 1) + "_" + (j + 1);
                idAndAns = { "id": ansId, "type": q.questiontype, "value": q.sub[j].select };
                answers.push(idAndAns);
            }
        }
        else if (q.questiontype == QUESTIONTYPE.check) {
            for (j = 0; j < q.sub.length; j++) {
                ansId = "ans" + (i + 1) + "_" + (j + 1);
                idAndAns = { "id": ansId, "type": q.questiontype, "value": q.sub[j].select };
                answers.push(idAndAns);
            }
        }
        else if (q.questiontype == QUESTIONTYPE.text) {
            ansId = "ans" + (i + 1) + "_1";
            idAndAns = { "id": ansId, "type": q.questiontype, "value": q.sub[0].text };
            answers.push(idAndAns);
        }
    }
    return true;
}


function setEmployeeNumber(num) {
    employeeNumber = num;
    return;
}


function dispEmployeeName() {
    document.getElementById("employeeName").innerHTML = employeeName + "さん"
    return;
}


function checkButton(radio, value) {
    if (value == 1) {
        radio.checked = true;
    } else {
        radio.checked = false;
    }
}


function dispEmployeeAnswer() {

    for (i = 0; i < answers.length; i++) {
        idElement = document.getElementById(answers[i].id);
        if (idElement == null) {
            console.log("ID不一致");
            //全クリアする？
            continue;
        }

        if (answers[i].type == QUESTIONTYPE.radio) {
            checkButton(idElement, answers[i].value);
        }
        else if (answers[i].type == QUESTIONTYPE.check) {
            checkButton(idElement, answers[i].value);
        }
        else if (answers[i].type == QUESTIONTYPE.text) {
            idElement.value = answers[i].value;
        }
    }

    checkRadioButton();

    return;
}

function checkRadioButton(){
    let a1 = document.getElementById("qId").ans1;
    let a2 = document.getElementById("qId").ans2;
    let a3 = document.getElementById("qId").ans3;

    if( (a1.value != 0) && (a2.value != 0) && (a3.value != 0) ){
        document.getElementById("sendSurvey").disabled = false;
    }else{
        document.getElementById("sendSurvey").disabled = true;
    }
}

function setEmployeeAnswer() {
    //回答を登録
    //JSONでDBに送る

    return;
}


function sendSurvery() {
    // forDebug ---
    console.log("OnButton sendSurvery");

    let a1 = document.getElementById("qId").ans1;
    let a2 = document.getElementById("qId").ans2;
    let a3 = document.getElementById("qId").ans3;
    let a4 = document.getElementById("qId").ans4;
    let a5 = document.getElementById("qId").ans5;

    console.log("Answer1 = %s", a1.value);
    console.log("Answer2 = %s", a2.value);
    console.log("Answer3 = %s", a3.value);

    for (let i = 0; i < a4.length; i++) {
        if (a4[i].checked) {
            console.log("Answer4_%d = %s", i + 1, a4[i].value);
        }
    }

    console.log("Answer5 = %s", a5.value);
    // --- forDebug

    setEmployeeAnswer();

    alert("送信しました");

    return;
}