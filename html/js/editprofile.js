// const firstname=document.getElementById("firstname")
// const lastname=document.getElementById("lastname")
const email=document.getElementById("email")
// const address=document.getElementById("address")
// const contact=document.getElementById("contact")
const cancelBtn=document.getElementById("cancel-btn")
const saveBtn=document.getElementById("save-btn")
const imgEmail=document.getElementById("box_email-img")
const boxEmail=document.getElementById("box_email")
// const city = document.getElementById("city");
const tabSettings=document.getElementById("choose")
const formEdit=document.getElementById("edit-form")
const backIcon=document.getElementById("setting_back")
const showIcon=document.getElementById("circle")
const inputText=document.getElementsByClassName("input_text")
const itemSetting=document.getElementsByClassName("item_settings");
// console.log(inputText)
// console.log(saveBtn)
// console.log(itemSetting)

//ham dang nhap
const loginLoad=()=>{

    if(!localStorage.getItem("token"))
        window.location.assign("login.html");
    
}
loginLoad()

cancelBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    formEdit.reset();
    
})
saveBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    for(let i=0; i<inputText.length;i++)
    {
        if(inputText[i].value=="")
        {

            inputText[i].style.border="2px solid red";
            email.style.border="2px solid red"
            imgEmail.setAttribute("src","https://cdn.pixabay.com/photo/2012/04/02/16/12/x-24850_1280.png")
            boxEmail.style.backgroundColor="#fff"
        }
    }
})
function isValidEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Kiểm tra định dạng email bằng cách so sánh với biểu thức chính quy
    return emailRegex.test(email);
  }
  
email.addEventListener("change",(e)=>{
    e.preventDefault();
    if(!isValidEmail(email.value))
    {
    email.style.border="2px solid red"
    imgEmail.setAttribute("src","https://cdn.pixabay.com/photo/2012/04/02/16/12/x-24850_1280.png")
    boxEmail.style.backgroundColor="#fff"
    
}else{
        email.style.border="1px solid #ccc"
        imgEmail.setAttribute("src","./asset/images/tick.svg")
        boxEmail.style.backgroundColor="green"
        }
})


  
    backIcon.addEventListener("click",(e)=>{
        e.preventDefault();
        tabSettings.style.display="none"
    })
    circle.addEventListener("click",(e)=>{
        e.preventDefault();
        tabSettings.style.display="block"
    })
    
for(let i=0; i<itemSetting.length;i++)
{   
    // console.log(itemSetting[i])
    itemSetting[i].addEventListener("click",(e)=>{
        e.preventDefault();
       
            itemSetting[i].classList.add("setting_active")
            for (let j = 0; j < itemSetting.length; j++) {
                if (j !== i) {
                  // Lấy các giá trị khác từ các phần tử trong mảng ngoại trừ itemSetting[i]
                  itemSetting[j].classList.remove("setting_active")
              
               
                }
              }
        
       

    })
    
}



const logout=document.getElementById("logout")
logout.addEventListener("click",()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    window.location.assign("login.html");
})
const usernameEdit=JSON.parse(localStorage.getItem('user')).username

const user=document.getElementById("username-edit");
user.textContent=usernameEdit;


