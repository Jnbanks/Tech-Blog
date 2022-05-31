console.log("hello")
document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

//function that fires when event listener is clicked
async function submitPost (id) {
  try{
    // do stuff ("/api/blogs" + id)
    const blogObject = {
        "title": document.querySelector(`#title-text${id}`).value,
        
        "body": document.querySelector(`#body-text${id}`).value
    }
    const res = await fetch(`/api/blogs/${id}`,{
      method:"PUT",
      body: JSON.stringify(blogObject),
      headers:{
          "Content-Type":"application/json"
      }})
    

      location.reload()
    } catch(error){
    console.error(error)
    }
}

async function deletePost (id) {
  try{
    // do stuff ("/api/blogs" + id)
    const res = await fetch(`/api/blogs/${id}`,{
      method:"DELETE",
      headers:{
          "Content-Type":"application/json"
      }})
      location.reload()
    } catch(error){
    console.error(error)
    }
}