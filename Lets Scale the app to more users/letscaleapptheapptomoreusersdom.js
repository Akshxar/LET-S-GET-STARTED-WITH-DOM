

const btn=document.querySelector(".btn");
btn.addEventListener("click",userdata)

function userdata(e)
{


 e.preventDefault();

const name=document.querySelector("#nameinput");
const email=document.querySelector("#emailinput");

if (name.value=="" || email.value=="")
{
   alert="Please Fill Required Details : "
}
else
{
    document.querySelector(".btn").style.background = "red";
    
    const userdetails={};

    userdetails.name=name.value;
    userdetails.email=email.value;

    localStorage.setItem(email.value,JSON.stringify(userdetails));
    


    
}

}

