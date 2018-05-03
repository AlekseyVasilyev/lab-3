fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Вывод в консоль users - массива пользователей.
    console.log(users);
    
    // Обработка полученных данных.
    // ...

    

    for(var key in users)
    {
      userName[key]=users[key].name;
      // userID[key]=users[key];
    }

    // Вывод данных на страницу.
    // ...
  });

  var userName = new Array();
  var postId = new Array();
  var commentId = new Array();
  var comment_name = new Array();
  var comment_body = new Array();
  // var userID = new Array(0);

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    // Вывод в консоль comments - массива комментариев.
    console.log(comments);
    
    // Обработка полученных данных.
    // ...

    for(var value in comments)
    {
      postId[value]=comments[value].postId;
      commentId[value]=comments[value].id;
      comment_name[value]=comments[value].name;
      comment_body[value]=comments[value].body;
    }

    // Вывод данных на страницу.
    // ...
  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    // Вывод в консоль posts - массива постов.
    console.log(posts);
    
    // Обработка полученных данных.
    // ...
    /* for(var getPost in posts)
    {
         console.log(posts[getPost].userId);
         console.log(posts[getPost].id);
         console.log(posts[getPost].title);
         console.log(posts[getPost].body);
    }*/

    // Вывод данных на страницу.
    // ...

    var i=0;
    var j=0;
    var comment;

    for(var buf in posts)
    {
      var first=document.getElementById("first");
      var elem = document.body.querySelector('#first')
      var clone = elem.cloneNode(true);

      document.body.appendChild(clone);
      clone.classList.add('class');
      var id = posts[buf].userId;

      comment = document.createElement("div");
      comment.classList.add('class1');

      var author = clone.appendChild(document.createElement("p"));
      var header_text = clone.appendChild(document.createElement("h3"));
      var body = clone.appendChild(document.createElement("p"));

      author.appendChild(document.createTextNode("Author: "+userName[id-1]));
      header_text.appendChild(document.createTextNode("#"+posts[buf].id+" "+posts[buf].title));
      body.appendChild(document.createTextNode(posts[buf].body));

      i++;
    }

    for(var val in commentId)
      {
        for(var hz in postId)
        {
          // [val]
          var cmt_name = comment_name[hz];
          var cmt_body = comment_body[val][hz];
          // var cmt_h3 = ;
          var cmt_p = document.createElement("p");
          // var 
          var cmt_h3 = comment.appendChild(document.createElement("h3"));
          // var cmt_header = document.createTextNode(cmt_name);
          cmt_h3.appendChild(document.createTextNode(cmt_name));
          // console.log(cmt_name);
        }
        // 
      }


    
    document.body.removeChild(first);

  });
  

  