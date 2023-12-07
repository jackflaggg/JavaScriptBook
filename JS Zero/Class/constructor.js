class NewComment {
    constructor(text, vot) {
        this.text = text;
        this.vot = vot;
    }

    upvot(){
        this.vot += 1;
    }
}

const firstComment = new NewComment('hui');
console.log(firstComment);

console.log(firstComment instanceof NewComment)
console.log(firstComment instanceof Number)