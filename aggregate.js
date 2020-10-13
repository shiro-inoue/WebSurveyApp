function dispResponseRate() {
    let staffTotalNum = 800;
    let respNum = 503;
    let responseRate = respNum / staffTotalNum * 100;
    // console.log("responseRate = " + responseRate);
    // 回答率は、少数第一位まで、以下は切り捨て
    responseRate = Math.floor(responseRate * 10) / 10;
    // console.log("responseRate = " + responseRate);

    return responseRate;
}

function dispDayTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();

    month = editDataFormat(month);
    date = editDataFormat(date);
    hour = editDataFormat(hour);
    min = editDataFormat(min);

    let dayTime = year + "/" + month + "/" + date + " " + hour + ":" + min;
    return dayTime;
}

function dispAnswer() {
    let text = "";
    let html = "";
    let qId = new Array("q1", "q2", "q3", "q4", "q5");
    qId.forEach((id, i) => {
        // console.log("getAnswer(" + `${id}` + ")");
        text = getAnswerDummy(`${id}`);
        // console.log("text = " + text);
        const messages = text.split('\n');
        // console.log(messages);
        html += "<div>"
        messages.forEach((answer, j) => {
            // 先頭に空行が入っている
            if (j != 0) {
                if (j == 1) {
                    html += "<h4>" + answer + "</h4>";
                }
                else {
                    html += "<pre>" + answer + "</pre>";
                    // html += "<p>" + answer + "</p>";
                    // const moge = answer.split(' ');
                    // html += "<table><tr>" + "<td>" + moge[0] + "</td>" + "<td>" + moge[1] + "</td>" + "</tr></table>";
                }
            }
        });
        html += "<br></div>";
    });
    document.getElementById('answer').innerHTML = html;
}

function editDataFormat(data) {
    // console.log("In  data = " + data);
    // 文字列で扱えたらlengthが使える？
    if (data < "10") {
        data = "0" + data;
    }
    // console.log("Out data = " + data);
    return data;
}

function getAnswerDummy(qid) {
    let text;
    switch (qid) {
        case "q1":
            text = `
Q1．あなたは無事ですか？
怪我などは無い 65%
怪我をしている 15%`;
            break;
        case "q2":
            text = `
Q2．ご家族は無事ですか？
全員無事 78%
連絡が取れない家族がいる 2%`;
            break;
        case "q3":
            text = `
Q3．明日の出勤は可能ですか？
出勤可能 44%
出勤はできない 16%
わからない 20%`;
            break;
        case "q4":
            text = `
Q4．心配事があれば、選択してください（複数選択可）
家が倒壊した 4件
ペットが見つからない 2件
避難所にいる 2件
その他 8件`;
            break;
        case "q5":
        default:
            text = `
Q5．会社に伝えたいこと、不安などがあれば、ご記入ください。
────────────────────────────────────────
ソーバル太郎
不安事項。不安事項。不安事項。不安事項。不安
不安事項。不安事項。不安事項。不安事項。不安
事項。事項。
────────────────────────────────────────
ソーバル太郎
不安事項。不安事項。不安事項。不安事項。不安
不安事項。不安事項。不安事項。不安事項。不安
事項。事項。
────────────────────────────────────────`;
            break;
    }
    return text;
}