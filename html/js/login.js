// const username=document.getElementById("username")
// const password=document.getElementById("password")
// console.log(username)
const btnReg=document.getElementById("btn-regis")
const formLogin=document.getElementById("form-login")
btnReg.addEventListener("click",()=>{


const username = encodeURIComponent(document.getElementById("username").value);
const password = encodeURIComponent(document.getElementById("password").value);
// const username="atuny0";
// const password="9uQFF1Lh"
console.log(username)
  const data = {
    username: username,
    password: password
  };

  try {
    const jsonData = JSON.stringify(data);

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        
        // luu token
         // Extract the token from the response
         const token = data.token;

         // Save the token to localStorage
         localStorage.setItem('token', token);
         if (token) {
        localStorage.setItem('user', JSON.stringify(data));

            window.location.assign("editprofile.html");
          } else {
          
            alert("Vui lòng nhập lại thông tin đăng nhập!");
            formLogin.reset();
          }
      })
      .catch(error => console.error(error));

            
  } catch (error) {
    console.error('Error converting data to JSON:', error);
  }

})

const inputpass = document.getElementById("input_pass");
console.log(inputpass)
inputpass.addEventListener("click",()=>{
  if(document.getElementById("password").getAttribute("type")==="password")
  document.getElementById("password").setAttribute("type","text")
  else
  document.getElementById("password").setAttribute("type","password")
})


 