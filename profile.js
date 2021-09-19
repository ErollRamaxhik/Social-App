'use strict'

const userName = localStorage.getItem('userName');
const sectionProfile = document.querySelector('.section-profile');


function showProfile(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then( users =>{

    users.map(user =>{
        if(userName === user.name){

            const html =`<div class="container">
                    <div class="profile-header">
                        <div class="profile-content">
                            <i class="fas fa-user-circle fa-7x profile-pic"></i>
                            <div class="profile-name">
                                <h4>${user.name}</h4>
                                <h5>${user.email}</h5>
                            </div> 
                        </div>
                        <div class="profile-options">
                            <a class="option text-muted active" href="">Profili</a>
                            <a class="option text-muted" href="">Postimet</a>
                            <a class="option text-muted" href="">Galleria</a>
                        </div> 
                    </div>
                </div>
                </div>
                <div class="section-profile-information">    
                <div class="profile-information">
                    <div class="card m-5 w-75">
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 text-end">
                                        <p class="text-muted">Email:</p>
                                        <p class="text-muted">Address:</p>
                                        <p><br></p>
                                        <p><br></p>
                                        <p><br></p>
                                        <p class="text-muted">Phone:</p>
                                        <p class="text-muted">Website:</p>
                                        <p class="text-muted">Company:</p>
                                    </div>
                                    <div class="col-md-6">
                                        <p>${user.email}</p>
                                        <div class="row">
                                            <div class="col">
                                                <p class="text-muted">Street:</p>
                                                <p class="text-muted">Suite:</p>
                                                <p class="text-muted">City:</p>
                                                <p class="text-muted">Zipcode:</p>
                                                <p>${user.phone}</p>
                                                <p>${user.website}</p>
                                                <p class="text-muted">Name:</p>
                                            </div>
                                            <div class="col">
                                                <p>${user.address.street}</p>
                                                <p>${user.address.suite}</p>
                                                <p>${user.address.city}</p>
                                                <p>${user.address.zipcode}</p>
                                                <p><br></p>
                                                <p><br></p>
                                                <p>${user.company.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            sectionProfile.insertAdjacentHTML('afterbegin',html);

            const postR = document.querySelectorAll('.option')
            
            postR.forEach(option => {
                option.addEventListener('click', e =>{
                    e.preventDefault();
                    
                    postR.forEach(option=>{
                        option.classList.remove('active');
                    })
                    if(e.target.textContent === 'Postimet'){
                        e.target.classList.add('active');

                        const postRSecond = document.querySelector('.section-profile-information');

                        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {

                            if(userName === user.name){
                                let html='';

                                html =`<div class="container p-5">
                                <div class="row justify-content-center">
                                    
                                    <div class="card-profile card p-0 shadow-sm post">
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
                                        <div class="m-2 comment-number text-center">
                                        <p class="count text-muted">5 Komente</p>
                                    </div>
                                    <hr>
                                    
                                    </div>
                                    <div class="show-more text-center m-2">
                                        <a class="" href="">Shiko me shume kommente</a>
                                    </div>
                                </div>`;
                            postRSecond.innerHTML="";
                            postRSecond.insertAdjacentHTML('afterbegin',html);
                            }  



                        })

                    }else if(e.target.textContent === 'Profili'){
                        e.target.classList.add('active');

                        const postRSecond = document.querySelector('.section-profile-information');

                        if(userName === user.name){

                            let html ='';

                            html = `<div class="profile-information">
                                <div class="card m-5 w-75">
                                    <div class="card-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-6 text-end">
                                                    <p class="text-muted">Email:</p>
                                                    <p class="text-muted">Address:</p>
                                                    <p><br></p>
                                                    <p><br></p>
                                                    <p><br></p>
                                                    <p class="text-muted">Phone:</p>
                                                    <p class="text-muted">Website:</p>
                                                    <p class="text-muted">Company:</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>${user.email}</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="text-muted">Street:</p>
                                                            <p class="text-muted">Suite:</p>
                                                            <p class="text-muted">City:</p>
                                                            <p class="text-muted">Zipcode:</p>
                                                            <p>${user.phone}</p>
                                                            <p>${user.website}</p>
                                                            <p class="text-muted">Name:</p>
                                                        </div>
                                                        <div class="col">
                                                            <p>${user.address.street}</p>
                                                            <p>${user.address.suite}</p>
                                                            <p>${user.address.city}</p>
                                                            <p>${user.address.zipcode}</p>
                                                            <p><br></p>
                                                            <p><br></p>
                                                            <p>${user.company.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                            postRSecond.innerHTML="";
                            postRSecond.insertAdjacentHTML('afterbegin',html);

                        }

                        }
                    })
                })
                
            }
        })
    })
}

showProfile();

