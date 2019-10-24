class UI{
    constructor(){
        //div that will contain the profile
        this.profile = document.querySelector('#profile')
        
    }

    //this will show the profile by setting the inner HTML of the blank div
showProfile(user){
console.log(user.gitprofile.node_id);


    this.profile.innerHTML = `
            <div class="card">
                 <h2 class="card-title text-center"> Username: ${user.gitprofile.login}</h2>

                <div class="card card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img class="img-fluid mb-2" src="${user.gitprofile.avatar_url}">
                                <a href="${user.gitprofile.html_url} target="_blank" class="m-2 btn btn-block btn-info">View Profile</a>
                            </div>
                            <div class="col-md-9">
                                <span class="m-2 badge badge-primary">Public Repos: ${user.gitprofile.public_repos}</span>
                                <span class="m-2 badge badge-warning">Public Gist: ${user.gitprofile.public_gists}</span>
                                <span class="m-2 badge badge-success">Followers: ${user.gitprofile.followers}</span>
                                <span class="m-2 badge badge-info">Following: ${user.gitprofile.following}</span>
                                <span class="m-2 badge badge-danger">User ID: ${user.gitprofile.id}</span>
                                <br><br>
                                <ul class="list-group">
                                    <li class="list-group-item">Name: ${user.gitprofile.name}</li>
                                    <li class="list-group-item">Location: ${user.gitprofile.location}</li>
                                    <li class="list-group-item">Company: ${user.gitprofile.company}</li>
                                    <li class="list-group-item">Blog: ${user.gitprofile.blog}</li>
                                    <li class="list-group-item">Member since: ${user.gitprofile.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 class="page-heading text-center mb-3">Latest Repos</h3>
                    <div id="repos"></div>

                </div>
        `

//end showProfile method 

}

//clear profile 
clearProfile(){
    this.profile.innerHTML = ''
}


//show alert --> clear old alerts if any, make a new warning div alert, and then remove it after some time 

    showAlert(msg, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const warningdiv = document.createElement('div');
        // Add classes
        warningdiv.className = className;
        // Add text
        warningdiv.appendChild(document.createTextNode(msg));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(warningdiv, search);

        this.clearProfile();

        setTimeout(() => {
            this.clearAlert()
        }, 2000);
    }



clearAlert(){

const warningdiv=document.querySelector('.alert')

if(warningdiv){
    warningdiv.remove()
}

}




//show repos 

showRepos(data){
console.log(data.gitrepo);
let output = ''; 
data.gitrepo.forEach(eachrepo=>{
console.log(eachrepo);

output += 
`<div class="card card-body mb-2">
    <div class="row">
        <div class ="col-md-6">

        <a href="${eachrepo.html_url}" target="_blank">${eachrepo.name}</a>

        </div>
        <div class ="col-md-6">

             <span class="m-2 badge badge-primary">Stars: ${eachrepo.stargazers_count}</span>
                                <span class="m-2 badge badge-warning">Watchers: ${eachrepo.watchers_count}</span>
                                <span class="m-2 badge badge-success">Forks: ${eachrepo.forks_count}</span>
                                 <span class="m-2 badge badge-danger">Open Issues: ${eachrepo.open_issues_count}</span>
        
        </div>
    </div>
</div>`

})

document.querySelector('#repos').innerHTML = output

}

//End UI class 
}