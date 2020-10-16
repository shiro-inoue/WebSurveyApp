let QUESTIONTYPE = {
    radio: 1,
    check: 2,
    text: 3
}

const EMPLOYEE_DATA_PATH = "./data/employee.csv"
const SURVEY_DATA_PATH = "./data/survey.csv"
const SURVEY_RESULT_DATA_PATH = "./data/surveyResult.csv"
const MAX_SUB_QUESTION = 5;
const SUB_TITLE_NAME = "subTitle"

async function getEmployeeAnswerDB(json) {
    let jsonParse = JSON.parse(json);
    let answerObj = new Object();
    let employeeObj = await readCsv(EMPLOYEE_DATA_PATH);
    let surveyObj = await readCsv(SURVEY_DATA_PATH);
    let surveyResultObj = await readCsv(SURVEY_RESULT_DATA_PATH);
    let resultNo = -1;

    answerObj.id = "";
    answerObj.name = "";
    answerObj.question = [];

    for (let i = 0; i < employeeObj.length; i++) {
        if (employeeObj[i].id == jsonParse.id) {
            answerObj.id = employeeObj[i].id;
            answerObj.name = employeeObj[i].name;
            break;
        }
    }
    for (let i = 0; i < surveyResultObj.length; i += surveyObj.length) {
        if (surveyResultObj[i].id == jsonParse.id) {
            resultNo = i;
            break;
        }
    }
    for (let i = 0; i < surveyObj.length; i++) {
        let questionObj = new Object();
        let subQuestionNum = 0;
        questionObj.title = surveyObj[i].title;
        questionObj.questiontype = surveyObj[i].questiontype;
        questionObj.sub = [];

        if (questionObj.questiontype == QUESTIONTYPE.text) {
            subQuestionNum = 1;
        }
        else {
            for (let j = 0; j < MAX_SUB_QUESTION; j++) {
                if (surveyObj[i][SUB_TITLE_NAME + (j + 1).toString(10)] == "") {
                    break;
                }
                subQuestionNum++;
            }
        }
        for (let j = 0; j < subQuestionNum; j++) {
            let subObj = new Object();

            subObj.title = surveyObj[i][SUB_TITLE_NAME + (j + 1).toString(10)];
            if (resultNo >= 0) {
                subObj.select = (parseInt(surveyResultObj[i + resultNo].select, 10) >> j) & 1;
                subObj.text = surveyResultObj[i + resultNo].text;
            }
            else {
                subObj.select = 0
                subObj.text = ""
            }
            questionObj.sub.push(subObj);
        }
        answerObj.question.push(questionObj);
    }

    return JSON.stringify(answerObj);
}

function setEmployeeAnswerDB(json) {
    return;
}

async function getAnsweredRatedataDB() {
    let answerObj = new Object();
    let employeeObj = await readCsv(EMPLOYEE_DATA_PATH);
    let surveyObj = await readCsv(SURVEY_DATA_PATH);
    let surveyResultObj = await readCsv(SURVEY_RESULT_DATA_PATH);

    answerObj.total = employeeObj.length;
    answerObj.response = surveyResultObj.length / surveyObj.length;

    return JSON.stringify(answerObj);
}

async function getAnswerDB(json) {
    let jsonParse = JSON.parse(json);
    let answerObj = new Object();
    let employeeObj = await readCsv(EMPLOYEE_DATA_PATH);
    let surveyObj = await readCsv(SURVEY_DATA_PATH);
    let surveyResultObj = await readCsv(SURVEY_RESULT_DATA_PATH);
    let subQuestionNum = 0;

    if (jsonParse.questionId > surveyObj.length) {
        answerObj.title = "";
    }
    else {
        answerObj.title = surveyObj[jsonParse.questionId - 1].title;
        answerObj.questiontype = surveyObj[jsonParse.questionId - 1].questiontype;
        answerObj.sub = [];

        if (answerObj.questiontype == QUESTIONTYPE.text) {
            for (let i = 0; i < surveyResultObj.length; i += surveyObj.length) {
                let subObj = new Object();
                let name = "";

                for (let j = 0; j < employeeObj.length; j++) {
                    if (employeeObj[j].id == surveyResultObj[i + jsonParse.questionId - 1].id) {
                        name = employeeObj[j].name;
                        break;
                    }
                }
                subObj.text = name + " " + surveyResultObj[i + jsonParse.questionId - 1].text;
                answerObj.sub.push(subObj);
            }
        }
        else {
            for (let i = 0; i < MAX_SUB_QUESTION; i++) {
                if (surveyObj[jsonParse.questionId - 1][SUB_TITLE_NAME + (i + 1).toString(10)] == "") {
                    break;
                }
                subQuestionNum++;
            }
            for (let i = 0; i < subQuestionNum; i++) {
                let subObj = new Object();

                subObj.title = surveyObj[jsonParse.questionId - 1][SUB_TITLE_NAME + (i + 1).toString(10)];
                subObj.select = 0;
                for (let j = 0; j < surveyResultObj.length; j += surveyObj.length) {
                    subObj.select += (parseInt(surveyResultObj[j + jsonParse.questionId - 1].select, 10) >> i) & 1;
                }
                answerObj.sub.push(subObj);
            }
        }
    }

    return JSON.stringify(answerObj);
}

async function readCsv(filePath) {
    let csvObj = [];

    const res = await fetch(filePath)
    const ab = await res.arrayBuffer()
    const td = new TextDecoder("Shift_JIS")
    csvText = td.decode(ab);

    let lines = csvText.split("\r\n");
    let items = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
        let lineObj = new Object();
        let cells = lines[i].split(",");
        for (let j = 0; j < items.length; j++) {
            lineObj[items[j]] = cells[j];
        }
        csvObj.push(lineObj);
    }

    return csvObj;
}
