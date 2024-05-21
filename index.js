require('dotenv').config();

const express=require("express");
const app=express();
const port=4000;


const githubData={
   
  "login": "Nitishperfectionist",
  "id": 91400264,
  "node_id": "MDQ6VXNlcjkxNDAwMjY0",
  "avatar_url": "https://avatars.githubusercontent.com/u/91400264?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nitishperfectionist",
  "html_url": "https://github.com/Nitishperfectionist",
  "followers_url": "https://api.github.com/users/Nitishperfectionist/followers",
  "following_url": "https://api.github.com/users/Nitishperfectionist/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nitishperfectionist/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nitishperfectionist/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nitishperfectionist/subscriptions",
  "organizations_url": "https://api.github.com/users/Nitishperfectionist/orgs",
  "repos_url": "https://api.github.com/users/Nitishperfectionist/repos",
  "events_url": "https://api.github.com/users/Nitishperfectionist/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nitishperfectionist/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nitish Kumar",
  "company": "Cochin University of science and technology kochi kerala(computer science engineering)",
  "blog": "",
  "location": "Sasaram ,Bihar",
  "email": null,
  "hireable": null,
  "bio": "FULL stack web developer",
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2021-09-26T02:50:10Z",
  "updated_at": "2024-03-26T05:06:14Z"

}
app.get("/",(req,res)=>{
   res.send("Hello world")
});
app.get("/twitter",(req,res)=>{
    res.send("twitter url")
 });
 app.get("/youtube",(req,res)=>{
    res.send("Hello world youtube")
 });
 app.get("/github",(req,res)=>{
     res.send(githubData);
 }) 

app.listen(process.env.PORT,()=>{
 console.log(`backened is running on ${port}`);
})