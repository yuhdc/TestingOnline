class FillBlank extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers);
    }

    checkExact() {

    }

    render() {
        var answerHTML = '';

        return `
        <div>
        <h3>Câu hỏi ${this.id}: ${this.content}</h3>
        <input type="text" />
        </div>
        `
    }
}


const newFB = new FillBlank(
    "1",
    "1",
    "hôm nay là thứ mấy?",
    [
        { content: 'thứ 2' },
    ]
);

console.log(newFB.render());
