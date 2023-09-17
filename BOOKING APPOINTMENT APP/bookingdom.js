
// LOCAL STORAGE : 
localStorage.setItem('name','akshxar'); 
// AGAR AAP LOCAL STORAGE SET ITEM COMMAND HATA DOGE
// TAB BHI LOCAL STORAGE MEIN DATA RAHEGA
//AAP CONSOLE.LOG LAGAKAR DEKH SKTE HO 
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');



//SESSION STORAGE : 
sessionStorage.setItem('name','akshxar');
sessionStorage.removeItem('name');
//if key is samne then value changes : 
sessionStorage.setItem('name','gritty');   
sessionStorage.setItem('name','akshxar'); 



//COOKIES :
document.cookie = 'name=akshxar; expires=' + new Date(9999,9,1)
.toUTCString()
console.log(document.cookie)



//SOME EXTRA CHANGES IN FORM (according to me ) :
var header=document.getElementById('jsid');
header.style.borderBlock='solid 2px'



//SHARPENER TASK : Write logic to store the details entered by the user in the local storage when he clicks on submit.


function test(){

//RETRIEVING DATA  :
var username=document.getElementById('nameinput').value;
var useremail=document.getElementById('emailinput').value;

//STORING DATA :
var storename=localStorage.setItem('NAME',username);
var storeemail=localStorage.setItem('EMAIL',useremail);


//RETRIEVING THE STORED DATA AND USING IT FOR CALCULATION:
var nm=localStorage.getItem('NAME',username);
var em=localStorage.getItem('EMAIL',useremail);

var a,b;
a="AKSHXAR"
b="SHAKYA.ANI47@GMAIL.COM"


if (a==username &&b==useremail) // matching setvalue with retrieving data 
{
    alert('login successful');
}
else{
    alert('login failed');
}    

}