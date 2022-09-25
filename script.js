const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let Username = document.querySelectorAll(".username")
let Comment = document.querySelectorAll(".span2")
let Location = document.querySelectorAll(".span1")
let Name = document.querySelectorAll(".name")
let Avatar = document.querySelectorAll(".avatar")
let likesBtn = document.querySelectorAll(".likes")
let likesNum = document.querySelectorAll(".likes-num")
let postBackground = document.querySelectorAll(".post-background")



    for (var i = 0; i < 3; i++) {

    Username[i].innerHTML = posts[i].username
    Comment[i].innerHTML = posts[i].comment
    Location[i].innerHTML = posts[i].location
    Name[i].innerHTML = posts[i].name
    Avatar[i].setAttribute("src", posts[i].avatar)
    likesNum[i].innerHTML = posts[i].likes
    postBackground[i].style.cssText = "background-image: url(" + posts[i].post + ")";
}

postBackground[0].addEventListener("dblclick", function () {
      likesNum[0].innerHTML++
})

postBackground[1].addEventListener("dblclick", function () {
      likesNum[1].innerHTML++
})

postBackground[2].addEventListener("dblclick", function () {
      likesNum[2].innerHTML++
})

   likesBtn[0].addEventListener("click", function () {
        likesNum[0].innerHTML++
})    
 
 likesBtn[1].addEventListener("click", function () {
        likesNum[1].innerHTML++
})   

 likesBtn[2].addEventListener("click", function () {
        likesNum[2].innerHTML++
})   


