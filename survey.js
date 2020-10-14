

let employeeName;
let employeeNumber;
let ans1;
let ans2;
let ans3;
let ans4;
let ans5;



window.onload = function() {
    //社員名と登録済み回答はDBから取得する
    //まずは固定値で確認
    employeeName = "ソーバル太郎"
    ans1 = 1;
    ans2 = 2;
    ans3 = 3;
    ans4 = 13;
    ans5 = "心配事サンプル";

    dispEmployeeName()
    dispEmployeeAnswer();
}


function setEmployeeNumber(){
    //変数に社員番号を渡す
    //入力の番号はどこから取得する？
    //とりあえず固定値
    employeeNumber = 1;
    return;
}


function dispEmployeeName(){
    document.getElementById("employeeName").innerHTML = employeeName + "さん"
    return;
}

function checkRadio(radio, value){
    if(value == 0){
        for(i=0; i<radio.length; i++){
            radio[i].checked = false;
        }
        return;
    }

    for(i=0; i<radio.length; i++){
        if(i+1==value){
            radio[i].checked = true;
        }else{
            radio[i].checked = false;
        }
    }
}


function dispEmployeeAnswer(){
    let qIdElement = document.getElementById("qId");

    checkRadio(qIdElement.ans1, ans1);
    checkRadio(qIdElement.ans2, ans2);
    checkRadio(qIdElement.ans3, ans3);

    for(i=0; i<qIdElement.ans4.length; i++){
        if(ans4&(2**i)){
            qIdElement.ans4[i].checked = true;
        }else{
            qIdElement.ans4[i].checked = false;
        }
    }

    qIdElement.ans5.value = ans5;

    return;
}


function setEmployeeAnswer(){
    //回答を登録
    //JSONでDBに送る

    return;
}


function sendSurvery(){
    console.log("OnButton sendSurvery");

    let a1 = document.getElementById("qId").ans1;
    let a2 = document.getElementById("qId").ans2;
    let a3 = document.getElementById("qId").ans3;
    let a4 = document.getElementById("qId").ans4;
    let a5 = document.getElementById("qId").ans5;

    console.log("Answer1 = %s", a1.value);
    console.log("Answer2 = %s", a2.value);
    console.log("Answer3 = %s", a3.value);

    for(let i=0; i<a4.length; i++){
        if(a4[i].checked){
            console.log("Answer4_%d = %s", i+1, a4[i].value);
        }
    }

    console.log("Answer5 = %s", a5.value);


    setEmployeeAnswer()


    return;
}