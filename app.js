//init github class!! by setting a variable to be a new instance of the class and referce that instance in this js file

const gitsearch = new GitHub;


//init a UI class 
const ui = new UI; 

const searchbar = document.querySelector('#searchUser'); 

searchbar.addEventListener('keyup', search) 

function search(e) {
   const searchBarText = e.target.value;

 if(searchBarText!==''){
     gitsearch.getUser(searchBarText).then(data=>{
         
         // if the data returns not found for the username,
        if(data.gitprofile.message === 'Not Found'){
            // SHOW ALERT THAT PROF NOT FOUNd - DONE THRU UI CLASS
            ui.showAlert('That profile does not exist', 'alert alert-danger warningdiv')
           
        } else{ 
            // otherwhys, show the profile that was returned with the data - DONE THRU UI CLASS
            

            ui.showProfile(data);
            ui.showRepos(data);
            
        }
     })
 } else {
     //clear the data in the UI -> done so that when u press backspace it clears the displayed profile
     ui.clearProfile();
 }

}