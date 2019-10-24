class GitHub{
    constructor(){
        this.client_id = 'dd3be3c33d9da50e86b4'; 
        this.client_secret = '3868fe9ce688efeaeada865ad6673857033913c4'; 
        this.repos_count = 3; 
        this.repos_sort = 'created: asc'; 

    }


    //get user method
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profileData = await profileResponse.json(); 
        const repoData = await repoResponse.json();
        
         return {
             gitprofile: profileData,
             gitrepo: repoData
         }
         
         


}



//end GITHUB class
}