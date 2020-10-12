function dispResponseRate() {
    document.getElementById('responseRate').innerHTML = "<p>回答率：７０％</p>";
}

function dispDayTime() {
    document.getElementById('dateTime').innerHTML = "<p>2020/10/12 16:25現在</p>";
}

function dispAnswer() {
    let qId = new Array("q1", "q2", "q3", "q4", "q5");

    qId.forEach((id, index) => {
        console.log("getAnswer(" + `${id}` + ")");
        // getAnswer(`${id}`);
    });
}
