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

var headertitle=document.getElementById("header-title")
headertitle.textContent="FOOD LIST ITEMS"
headertitle.style.borderBlock="solid"

// changing main header borderBottom

var mainheader=document.getElementById("main-header")
mainheader.style.borderBottom="solid 3px #000"