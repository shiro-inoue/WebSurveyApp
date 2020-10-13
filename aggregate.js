function dispResponseRate() {
    let staffTotalNum = 800;
    let respNum = 503;
    responseRate = respNum / staffTotalNum * 100;
    console.log("responseRate = " + responseRate);
    // 回答率は、少数第一位まで、以下は切り捨て
    responseRate = Math.floor(responseRate * 10) / 10;
    console.log("responseRate = " + responseRate);
    document.getElementById('responseRate').innerHTML = "<p>回答率：" + responseRate + "％</p>";
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

    document.getElementById('dateTime').innerHTML = "<p>" + year + "/" + month + "/" + date + " " + hour + ":" + min + "現在" + "</p>";
}

function dispAnswer() {
    let qId = new Array("q1", "q2", "q3", "q4", "q5");
    qId.forEach((id, index) => {
        console.log("getAnswer(" + `${id}` + ")");
        // getAnswer(`${id}`);
    });
}

function editDataFormat(data) {
    console.log("In  data = " + data);
    // 文字列で扱えたらlengthが使える？
    if (data < "10") {
        data = "0" + data;
    }
    console.log("Out data = " + data);
    return data;
}