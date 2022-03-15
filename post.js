//Counter for post number
var postCounter=1;
//Work on Post button
var postBtn=document.getElementById("postBtn");
postBtn.addEventListener('click',function (e){
    e.preventDefault();
    //text area and confirm that has a lenght
    var textAreaPost=document.getElementById("textAreaPost");
    var content=textAreaPost.value.trim();
    if(content.length<=0) {
        return;
    }

    var post=new Post(content);
    //get parent of card to insert html elements inside it
    var publishcontent=document.getElementById("publishContent");
    publishcontent.insertAdjacentHTML('afterbegin',post.generateHTML());
    //work on delete buttton
    var DeleteBtn=document.getElementById("DeleteBtn-"+ postCounter);
    DeleteBtn.addEventListener('click',function (e){
        e.preventDefault();
        var check=confirm("Are You Sure?");
        if(check===false){
            return;
        }
        var n="post-"+e.target.id.split("-")[1];
        document.getElementById(n).remove();
    });

    postCounter++;
    textAreaPost.value="";

});

//prototype for post standard
function Post(content){
    this.content=content;
    this.date=new Date().toLocaleString();
}

//share generate Html method to optimize space in memory
Post.prototype.generateHTML=function (){
    return '<div id="post-'+ postCounter
        +'"class="card shadow shadow-lg border mt-3">' +
        '                <div class="card-body ">' +
        '                    <button id="DeleteBtn-'+ postCounter
        +'" class="btn btn-sm btn-danger float-end" >' +
        '                        Delete' +
        '                    </button>' +
        '                    <p class="card-text text-start m-0">' + this.content +
        '                    </p>' +
        '                    <hr>' +
        '                    <p class="m-0 text-muted fst-italic small">' + this.date +
        '                    </p>' +
        '                </div>' +
        '            </div>';
};