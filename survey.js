
let employeeNumber;

//社員名と登録済み回答はDBから取得する

function setEmployeeNumber(num){
    //変数に社員番号を渡す
    employeeNumber = num;
    return;
}


function dispEmployeeName(name){
    //社員名 + さん を表示する
    document.getElementById("employeeName").innerHTML = name + "さん"
    return;
}


function dispEmployeeAnswer(){
    //登録済みの回答を画面に反映する
    //質問1 ラジオボタン 2択
    //質問2 ラジオボタン 2択
    //質問3 ラジオボタン 3択
    //質問4 チェックボックス 4つ
    //質問5 テキストボックス テキスト

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