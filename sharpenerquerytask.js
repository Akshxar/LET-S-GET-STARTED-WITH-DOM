console.dir(document);

// sharpener query task 
// GET THE ELEMENTS BY QUERY SELECTOR :

var item2=document.querySelector('.list-group-item:nth-child(2)');
item2.style.color='green'; 

var changetitle=document.querySelectorAll('.title');
changetitle[0].textContent="ENTER ITEMS";


//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var item3=document.querySelectorAll('li');
item3[2].style.color="red";


//Choose all the odd elements and make their background green using QuerySelectorALL:

var odd =document.querySelectorAll('li:nth-child(odd)');

for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor="green";
    
}