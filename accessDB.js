/*
getEmployeeAnswer
{
  "id": "xxxxxx",
}
*/

var QUESTIONTYPE = { radio: 1, check: 2, text: 3};

let employeeTest1 = {
    "id": "000001",
    "name": "test1",
    "question": [
        {
            "title": "あなたは無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 1
        },
        {
            "title": "家族は無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 2
        },
        {
            "title": "明日の出勤は可能ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 3
        },
        {
            "title": "心配事があれば、選択してください（複数選択可）",
            "questiontype": QUESTIONTYPE.check,
            "data": 13
        },
        {
            "title": "会社に伝えたいこと、不安などがあれば、ご記入ください。",
            "questiontype": QUESTIONTYPE.text,
            "data": "anxiety1"
        }
    ]
}
let employeeTest2 = {
    "id": "000002",
    "name": "test2",
    "question": [
        {
            "title": "あなたは無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 0
        },
        {
            "title": "家族は無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 0
        },
        {
            "title": "明日の出勤は可能ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 0
        },
        {
            "title": "心配事があれば、選択してください（複数選択可）",
            "questiontype": QUESTIONTYPE.check,
            "data": 0
        },
        {
            "title": "会社に伝えたいこと、不安などがあれば、ご記入ください。",
            "questiontype": QUESTIONTYPE.text,
            "data": ""
        }
    ]
}
let employeeTest3 = {
    "id": "",
    "name": "",
    "question": [
        {
            "title": "あなたは無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 0
        },
        {
            "title": "家族は無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 0
        },
        {
            "title": "明日の出勤は可能ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "data": 0
        },
        {
            "title": "心配事があれば、選択してください（複数選択可）",
            "questiontype": QUESTIONTYPE.check,
            "data": 0
        },
        {
            "title": "会社に伝えたいこと、不安などがあれば、ご記入ください。",
            "questiontype": QUESTIONTYPE.text,
            "data": ""
        }
    ]
}
let answerTest = {
    "total": 200,
    "response": 50,
    "question": [
        {
            "title": "あなたは無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "sub": [
                { "title": "怪我などは無い", "select": 21 },
                { "title": "怪我をしている", "select": 29 },
            ]
        },
        {
            "title": "家族は無事ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "sub": [
                { "title": "全員無事", "select": 42 },
                { "title": "連絡が取れない家族がいる", "select": 8 },
            ]
        },
        {
            "title": "明日の出勤は可能ですか？",
            "questiontype": QUESTIONTYPE.radio,
            "sub": [
                { "title": "出勤可能", "select": 28 },
                { "title": "出勤はできない", "select": 2 },
                { "title": "わからない", "select": 20 },
            ]
        },
        {
            "title": "心配事があれば、選択してください（複数選択可）",
            "questiontype": QUESTIONTYPE.check,
            "sub": [
                { "title": "家が倒壊した", "select": 4 },
                { "title": "ペットが見つからない", "select": 2 },
                { "title": "避難所にいる", "select": 3 },
                { "title": "その他", "select": 5 },
            ]
        },
        {
            "title": "会社に伝えたいこと、不安などがあれば、ご記入ください。",
            "questiontype": QUESTIONTYPE.text,
            "sub": [
                { "text": "test1 anxiety1" },
                { "text": "test30 anxiety2" },
            ]
        }
    ]
}

function getEmployeeAnswer(json){
    let jsonParse = JSON.parse(json);

    if (jsonParse.id == "000001") {
        return JSON.stringify(employeeTest1);
    }
    else if (jsonParse.id == "000002") {
        return JSON.stringify(employeeTest2);
    }
    else {
        return JSON.stringify(employeeTest3);
    }
}

function setEmployeeAnswer(json){
    return ;
}

function getAnswer(){
    return answerTest;
}
