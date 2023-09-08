console.dir(document);
// EXAMINE THE DOCUMENT OBJECT 

//console.log(document.URL);
//console.log(document.title);

document.title="LEARNING THE DOM ";

//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all);

//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.forms[0]);

//console.log(document.all[10]);

document.all[10].textContent="Making lot of list items"

//GETELEMENTBYID

// console.log(document.getElementById("header-title"))

var headertitle=document.getElementById("header-title");
headertitle.textContent="FOOD LIST ITEMS";
headertitle.style.borderBlock="solid";

// changing main header borderBottom

var mainheader=document.getElementById("main-header");
mainheader.style.borderBottom="solid 3px #000";

// accessing elements by class and changing the colors and styles 

var items=document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[0]);

items[0].textContent="ENTER ITEM 1 ";
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor='grey';

// loop is used to make all the items background color to green and bold
// according to sharpener question

for (var i=0; i<items.length; i++)

{

    items[i].style.fontWeight="bold";
    items[i].textContent="ENTER ITEM ";
}

items[2].style.backgroundColor='green'
