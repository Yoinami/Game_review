
  // function handleKeyDown(event) {
  //   // Check if the pressed key is the "Enter" key
  //   if (event.key === "Enter") {
  //     // Call your function for Enter key press
  //    Show_comment();
  //   }
  // }

  function Show_comment(){
    // document.getElementById("comment-list").innerHTML=document.getElementById("comment-input").value();
    var comment_input=document.getElementById("comment_input");
    var comment_list=document.getElementById("comment_list");
    if(comment_input.value!=""){
      var commentItem = document.createElement("li");
      // commentItem.classList.add("comment");
      commentItem.textContent = comment_input.value;
      comment_list.appendChild(commentItem);
      // comment_list.innerHTML=comment_input.value;
      comment_input.value="";
      comment_list.style.border = "1px solid #ccc";
      comment_list.style.marginTop = "20px";
      comment_list.style.padding = "20px";
    }
  }
