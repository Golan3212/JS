'use strict'
class Post {
    constructor(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
edit (text) {
    text = this.text;
       console.log(this.author +" skazal " +text);
}

}


class AttachedPost extends Post{
    constructor ( author, text, date){
    super(author, text, date);
    this.highlighted  = false;
    }
    makeTextHighlighted (text) {
        text = this.text;
        this.highlighted = true;
        console.log(this.author +" ispravil na " +text);
    }
    }
    
let first = new AttachedPost("Ivan", "lorem ipsum", 12.12);
let second = new AttachedPost("Alesha", "ipsum Lorem", 13.12);
first.edit();
first.makeTextHighlighted();
second.makeTextHighlighted();

