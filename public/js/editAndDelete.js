const formHandler = async (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  if (event.target.value === "update") {
    // Update request
    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();
    const creator_id = document.querySelector("#creator_id").value;
    const article_id = document.querySelector("#article_id").value;

    if (title && content && creator_id && article_id) {
      const response = await fetch(`/api/articles/${article_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content, creator_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to update.");
      }
    } else {
      alert("Failed to update.");
    }
  } else {
    // delete request
    const article_id = document.querySelector("#article_id").value;
    console.log(article_id);
    const response = await fetch(`/api/articles/${article_id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post.");
    }
  }
};

document.querySelector("#button1").addEventListener("click", formHandler);
document.querySelector("#button2").addEventListener("click", formHandler);
