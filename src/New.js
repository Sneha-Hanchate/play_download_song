import React from "react";

function New(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function(){
      if(this.status === 200){
        var users = JSON.parse(this.responseText);
        let output='';
        let news=document.getElementById('n');
        console.log(users);
        output+=`<ul>
                            <li>title:${users[0
                            ].login}</li>
                        </ul>`;
                        news.innerHTML=output;
        


    }
    }
    xhr.send();
  return(
    <div>
    <button onClick={New}>get</button>
    <div id="n"></div>
</div>
  );
  }
  export default New;
// import React from "react";

// function New(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.github.com/users', true);

//     xhr.onload = function(){
//       if(this.status === 200){
//         var users = JSON.parse(this.responseText);
//         let output='';
//         let news=document.getElementById('n');
//         console.log(users);
//         output+=`<ul>
//                             <li>title:${users[0
//                             ].login}</li>
//                         </ul>`;
//                         news.innerHTML=output;
        


//     }
//     }
//     xhr.send();
//   return(
//     <div>
//     <button onClick={New}>get</button>
//     <div id="n"></div>
// </div>
//   );
//   }
//   export default New;