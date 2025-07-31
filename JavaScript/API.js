<!DOCTYPE html>
<html lang="en">
<head>
  <title>Fetch and Display Posts</title>
</head>
<body>
  <h2>Post Titles</h2>
  <ul id="postList"></ul>

  <script>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        const postContainer = document.getElementById("postList");

        posts.forEach(post => {
          const item = document.createElement("li");
          item.textContent = `Post ${post.id}: ${post.title}`;
          postContainer.appendChild(item);
        });
      })
      .catch(error => {
        console.error("Fetch failed:", error);
      });
  </script>
</body>
</html>