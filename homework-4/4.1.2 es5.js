'use strict'
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
 text = this.text;
    console.log(this.author +" skazal " +text);
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

function AttachedPost (author, text, date) {
    Post.call(this, author, text, date);
    this.text = text;
    this.highlighted  = false;
    
}
AttachedPost.prototype.makeTextHighlighted = function (text) {
    text = this.text;
    this.highlighted = true;
    console.log(this.author +" ispravil na " +text);
}
let first = new AttachedPost("Ivan", "lorem ipsum", 12.12);
let second = new AttachedPost("Alesha", "ipsum Lorem", 13.12);
first.edit();
first.makeTextHighlighted();
second.makeTextHighlighted();

