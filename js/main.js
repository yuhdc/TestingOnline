/*
ex: testing online
author: huy
tasks:
    1. call api lấy ds câu hỏi
    2. render danh sách câu hỏi ra màn hình
    3. Tính điểm và show kết quả
*/
var questionList;
var fetchQuestion = function () {
    axios({
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
        method: "GET",
    })
        .then(function (res) {
            questionList = mapData(res.data);
            renderQuestions(questionList);
        })
        .catch(function (err) {
            console.log(err);
        });
};

fetchQuestion();

var renderQuestions = function (questionList) {
    var questionHTML = '';
    for (var i = 0; i < questionList.length; i++) {
        questionHTML += questionList[i].render();
    }
    document.querySelector('#questionList').innerHTML = questionHTML;
}

// Nhận ds câu hỏi từ backend và chuyển thành của mình
var mapData = function (dataFromDB) {
    var mappedData = [];
    for (var i = 0; i < dataFromDB.length; i++) {
        var cQuestion = dataFromDB[i];
        // kiểm tra loại câu hỏi để dùng lớp đối tượng tương ứng
        if (cQuestion.questionType === 1) {
            mappedData.push(new MultipleChoice(cQuestion.id, cQuestion.questionType, cQuestion.content, cQuestion.answers));
        } else {
            mappedData.push(new FillBlank(cQuestion.id, cQuestion.questionType, cQuestion.content, cQuestion.answers));
        }
    }
    return mappedData;
}
// declaration function
// function a(){};

// expression function
// const a = function(){};

document.querySelector('#handleResult').onclick = function () {
    let myScore = 0;
    //duyệt qua từng câu hỏi và kiểm tra
    //nếu đúng thì tăng myS lên 1
    //sai thì thôi
    questionList.forEach(question => {
        console.log('question', question);
        if (question.checkExact()) {
            myScore++;
        }
    });
    alert(`số câu đúng là : ${myScore}`);
}
