'use strict'

const postR = document.querySelector('.row');

const userName = localStorage.getItem('userName');


function fetchAll() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {

    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts =>{

        fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(comments =>{

            users.forEach(user => {

                if(user.name === userName){
                    let html='',html2='',html3='',html4='';
                    html = `<div class="card p-0 shadow-sm post">
                        <div class="post-author m-3">
                            <i class="fas fa-user-circle fa-3x "></i>
                            <div class="post-author-info">
                                <h4 class="mb-1">${user.name}</h4>
                                <h5 class="text-muted">${user.email}</h5>
                            </div>
                            <i class="ms-auto fas fa-ellipsis-v my-auto"></i>
                        </div>
                        <hr class="mt-0 comment-start">
                        <div class="post-content m-4">
                            <p>${posts[(user.id*10)-10].title}</p>
                            <p class="text-muted">${posts[(user.id*10)-10].body}</p>
                            <div class="input-group">
                                <input type="text" class="mx-2 form-control rounded-pill bg-light" placeholder="Posto fotografi apo artikull"> 
                            </div>`;
                        let comment_count =0;

                        comments.forEach(comment => {
                            if(comment.postId=== user.id){
                                comment_count++;
                            }

                        })

                        html2 =`<div class="m-2 comment-number text-center">
                            <p class="count text-muted">${comment_count} Komente</p>
                        </div>
                        <hr>`
                        
                        comments.forEach(comment => {
                            if(comment.postId=== user.id){
                                
                                html3 =html3 + `<div class="post-comments mx-4">
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
                    </div>`

                    postR.insertAdjacentHTML('afterbegin',html+html2+html3+html4);

                        
                    const showMore = document.querySelector('.show');

                    
                        showMore.addEventListener('click',e =>{
                            e.preventDefault();
                            e.target.parentElement.previousElementSibling.classList.toggle("show");
                        })
                    
                    }
                });
            })
        })
    })
}

fetchAll();