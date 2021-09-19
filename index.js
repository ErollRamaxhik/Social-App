'use strict'

const postR = document.querySelector('.post');

//GET
function fetchAll(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
        
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {

        fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(comments =>{
            
            users.forEach(user => {
                let html='',html2='',html3='',html4='';

                 html = `<div class="card mb-4 p-0 shadow-sm post">
                 <div class="post-author m-3">
                     <i class="fas fa-user-circle fa-3x "></i>
                     <div class="post-author-info">
                         <h4 class="mb-1 user-name">${user.name}</h4>
                         <h5 class="text-muted user-email">${user.email}</h5>
                     </div>
                     <i class="ms-auto fas fa-ellipsis-v my-auto"></i>
                 </div>
                 <hr class="mt-0 comment-start">
                 <div class="post-content m-4">
                     <p class="post-title fw-bold">${posts[user.id*10-10].title}</p>
                     <p class="text-muted">${posts[user.id*10-10].body}</p>
                     <div class="input-group">
                         <input type="text" class="mx-2 form-control rounded-pill bg-light" placeholder="Posto fotografi apo artikull"> 
                     </div>`;
                    
                     let comment_count =0;

                        comments.forEach(comment => {
                            if(comment.postId=== user.id){
                                comment_count++;
                            }

                        })

                    html2=`<div class="m-2 comment-number text-center">
                    <p class="count text-muted">${comment_count} Komente</p>
                    </div>
                    <hr>`

                    comments.forEach(comment => {

                        if(comment.postId=== user.id){
                            html3 += `<div class="post-comments mx-4">
                            <div class="post-user">
                                <p class="mb-2 fw-bold">${comment.email}</p>
                                <p class="text-muted">${comment.body}</p>
                                <i class="text-muted post-user-options ms-auto fas fa-ellipsis-v"></i>
                            </div>
                            <hr>
                        </div>`
                        }
                        

                    })
                html4 = `</div>
                    <div class="show-more text-center m-2">
                        <a class="show" href="">Shiko me shume kommente</a>
                    </div>
                </div>`;

             postR.insertAdjacentHTML('beforebegin',html+html2+html3+html4)
            })

               const profileLink = document.querySelectorAll('.fa-user-circle');
               const profileName = document.querySelectorAll('.user-name');
               const profileEmail = document.querySelectorAll('.user-email');
               const profilePost = document.querySelectorAll('.post-title');
               const showMore = document.querySelectorAll('.show');

               profileLink.forEach(link =>{
                   link.addEventListener('click', e => {
                       const name = e.target.nextElementSibling.childNodes[1].innerText
                        localStorage.setItem('userName',name);
                       window.document.location= './profile.html';
                   })
               })

               profileName.forEach(link =>{
                    link.addEventListener('click', e => {
                        const name = e.target.innerText
                        localStorage.setItem('userName',name);
                        window.document.location= './profile.html';
                    })
                })

                profileEmail.forEach(link =>{
                    link.addEventListener('click', e => {
                        const name = e.target.previousElementSibling.childNodes[0].data
                        localStorage.setItem('userName',name);
                        window.document.location= './profile.html';
                    })
                })

                profilePost.forEach(link =>{
                    link.addEventListener('click', e => {

                        const name = e.target.parentElement.parentElement.childNodes[1].childNodes[3].children[0].innerText
                        localStorage.setItem('userName',name);
                        window.document.location= './post.html';
                    })
                })

                showMore.forEach(link =>{
                    link.addEventListener('click',e =>{
                        console.log(e)
                        e.preventDefault();
                        e.target.parentElement.previousElementSibling.classList.toggle("show");
                    })
                })
                
            })
        })
        
    })
}


// POST

const form = document.getElementById('form');

function postOne(){
    form.addEventListener('submit',e =>{
        e.preventDefault();
    
        const title ='sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
        const body ='quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';
    
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body:JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json()).then(json => console.log(json));
    })
}

fetchAll();
postOne();