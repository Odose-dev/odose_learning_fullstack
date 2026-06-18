async function getUsers() {
   return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response =>  {
        if (!response.ok){
          throw new Error("Failed to fetch users");

        }
        return response.json();

      })

  }


  async function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
       .then(response =>  {
         if (!response.ok){
           throw new Error("Failed to fetch posts");
          }
         return response.json();
 
       })
 
   }

   async function getComments() {
    return fetch("https://jsonplaceholder.typicode.com/comments")
       .then(response =>  {
         if (!response.ok){
           throw new Error("Failed to fetch comments");
          }
         return response.json();
 
       })
 
   }



   async function usersPostsComments() {
    await Promise.allSettled([getUsers(), getPosts(), getComments()])
      .then(([users, posts, comments]) => {
  
        if (users.status === "fulfilled") {
          const destructuredUsers = users.value.map(
            ({ name, email, username }) => ({
              name,
              email,
              username,
            })
          );
       //Task 1
          console.log("Destructured Data:", destructuredUsers);
        } else {
          console.log("Could not load users");
        }
  
        if (posts.status !== "fulfilled") {
          console.log("Could not load Posts");
        }
  
        if (comments.status !== "fulfilled") {
          console.log("Could not load Comments");
        }
  
        if (
          users.status === "fulfilled" &&
          posts.status === "fulfilled"
        ) {
          const usersResult = users.value;
          const postsResult = posts.value;
  
          const usersWithCountOfPost = usersResult.map(user => ({
            name: user.name,
            postCount: postsResult.filter(
              post => post.userId === user.id
            ).length
          }));
          
          //Task 3
          console.log("Users with Count of Post:", usersWithCountOfPost);

          //Task 4
          console.log("Users List:", usersResult);
          console.log("Posts List:", postsResult);
        }
  
        if (
          users.status === "fulfilled" &&
          posts.status === "fulfilled" &&
          comments.status === "fulfilled"
        ) {
          const usersCount = users.value.length;
          const postsCount = posts.value.length;
          const commentsCount = comments.value.length;
  
          //Task 2
          console.log("Count of Users:", usersCount);
          console.log("Count of Posts:", postsCount);
          console.log("Count of Comments:", commentsCount);
  
          //Task 5 (This is very difficult. Got some clue from ChatGPT but still not clear for me)
          const dashboardLoader = users.value.map(user => {
            const userPosts = posts.value.filter(
              post => post.userId === user.id
            )
  
            return {
              ...user,
              posts: userPosts
            };
          });
  
          console.log("Dashboard Loader: ", dashboardLoader);        }
      });
  }
  
 
  usersPostsComments()