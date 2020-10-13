function dispResponseRate() {
    document.getElementById('responseRate').innerHTML = "<p>回答率：７０％</p>";
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

    document.getElementById('dateTime').innerHTML = year + "/" + month + "/" + date + " " + hour + ":" + min + "現在";
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