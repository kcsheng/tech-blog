const commentFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector("#commentInput").value.trim();
  const article_id = document.querySelector("#articleId").value.slice(0, -1);
  const commentor_id = document
    .querySelector("#loggedInUserId")
    .value.slice(0, -1);
  console.log(text);
  console.log(article_id);
  console.log(commentor_id);
  if (text && article_id && commentor_id) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ text, article_id, commentor_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/article/${article_id}`);
    } else {
      alert("Failed to comment.");
    }
  } else {
    alert("Failed to comment.");
  }
};

document
  .querySelector(".commentForm")
  .addEventListener("submit", commentFormHandler);
