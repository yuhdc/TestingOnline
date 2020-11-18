class MultipleChoice extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers);
    }

    checkExact() {

    }

    render() {
        var answerHTML = '';

        //tạo ra 1 dòng answer
        for (var i = 0; i < this.answers.length; i++) {
            answerHTML += `
            <div>
            <input type="radio" name="${this.id}" />
            <label>${this.answers[i].content}</label>    
            </div>
           `
        }

        return `
        <div>
        <h2>Câu hỏi ${this.id}: ${this.content}</h2>
        ${answerHTML}
        </div>
       `
    }
}

const newMC = new MultipleChoice(
    "1",
    "1",
    "hôm nay là thứ mấy?",
    [
        { content: 'thứ 2' },
        { content: 'thứ 3' },
        { content: 'thứ 7' }
    ]
);

console.log(newMC.render());

