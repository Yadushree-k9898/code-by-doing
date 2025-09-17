const api = 'http://localhost:3000/api/posts'

document.getElementById('form').onsubmit = async (e) => {
    e.preventDefault()
    await fetch(api, {method: 'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify({
        title:document.getElementById('title').value,
        author:document.getElementById('author').value,
        content:document.getElementById('content').value
    })})
    loadPosts()

}

async function loadPosts(){
    const res = await fetch(api);
    document.getElementById('posts').innerHTML = (await res.json()).map(p => `<div><h3>${p.title}</h3> <p>${p.content}</p><small>${p.author}</small></div>`).json(' ')
}
window.onload=loadPosts