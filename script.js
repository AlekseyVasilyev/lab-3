var userName = new Array();
var commentId = new Array();
var userID = new Array(0);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Вывод в консоль users - массива пользователей.
    console.log(users);
    
    for(var key in users)
    {
      userName[key]=users[key].name;
    }

  });

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    // Вывод в консоль comments - массива комментариев.
    console.log(comments);
    commentId=comments;

  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    // Вывод в консоль posts - массива постов.
    console.log(posts);

    var comment;

    for(var buf in posts)
    {
      var elem = document.createElement("div");
      document.body.appendChild(elem);
      elem.classList.add('class');

      var id = posts[buf].userId;

      var author = elem.appendChild(document.createElement("p"));
      var header_text = elem.appendChild(document.createElement("h3"));
      var body = elem.appendChild(document.createElement("p"));

      author.appendChild(document.createTextNode("Author: "+userName[id-1]));
      header_text.appendChild(document.createTextNode("#"+posts[buf].id+" "+posts[buf].title));
      body.appendChild(document.createTextNode(posts[buf].body));

      comment = document.createElement("div");
      comment.classList.add('class1');
      elem.appendChild(comment);
      n=0;

      for(var k in commentId)
      {
        if(commentId[k].postId==posts[buf].id)
        {
          var cmt_head = comment.appendChild(document.createElement("h4"));
          cmt_head.appendChild(document.createTextNode(commentId[k].name));

          var cmt_body = comment.appendChild(document.createElement("p"));
          cmt_body.appendChild(document.createTextNode(commentId[k].body));

          n++;
        }
      }
      var numb = comment.appendChild(document.createElement("p")); 
      numb.appendChild(document.createTextNode("Comments: "+n));
      comment.insertBefore(numb,comment.firstChild);
    }
  });
  

  