document.getElementById('regForm').onsubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api/auth/register', {method:'POST', headers:{'Content-Type': 'application/json'}, body:JSON.stringify({username:document.getElementById('regUser').value, password:document.getElementById('regPass').value})})
    alert('Registered')

}

document.getElementById('loginForm').onsubmit = async (e) =>{
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/auth/login', {method:'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({username:document.getElementById('loginUser').value, password: document.getElementById('loginPass').value})})
    const {token} = await res.json()
    document.getElementById('token').innerText = `JWT: ${token}`
}