class NewComment {
    constructor(text, vot) {
        this.text = text;
        this.vot = 0;
    }

    upvot(){
        this.vot += 1;
    }
}

const firstComment = new NewComment('hui');
console.log(firstComment.vot);
console.log(firstComment.upvot());

Object.keys(firstComment).forEach((element) =>{
    console.log(element)
})

console.log(firstComment instanceof NewComment)
console.log(firstComment instanceof Number)