console.log("Hello guys, status to my welcome!");

// The posts array contains two post objects, each with a title and body. The purpose of the code is to manipulate and display these posts dynamically.

const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
]

//  This function retrieves and displays the posts on the page by looping through each post in the posts array and appending it to the output string as an HTML list item (<li>).
// The function uses setTimeout with a delay of 1000 milliseconds (1 second), simulating an asynchronous operation (like fetching data from a server). After the delay, it updates the document.body with the list of posts.
function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

//  This function accepts a post object and a callback function as arguments. The setTimeout with a 2-second delay simulates the time taken to create a new post.
// After the delay, the new post is added to the posts array using the push() method.
// The callback function (which is passed as the second argument) is executed after the post is created. In this case, the callback is the getPosts function, which updates the UI to include the new post.

function createPost(post, callback) {
    setTimeout(() => {
        console.log("creating...")
        posts.push(post)
        callback()
    }, 2000)
}

getPosts();
createPost({ title: "Post Three", body: "This is post three" }, getPosts)

// A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of the outer function's operation. This mechanism allows for asynchronous operations (like API calls or timeouts) to be handled effectively.
