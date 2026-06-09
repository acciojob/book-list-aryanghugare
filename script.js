//your JS code here. If required.
const submitBtn = document.querySelector("#submit") ;
const con = document.querySelector("#con") ;
const title = document.querySelector("#title") ;
const author = document.querySelector("#author") ;
const isbn = document.querySelector("#isbn") ;
const tb = document.querySelector("#tb")

submitBtn.addEventListener("click" , (e)=>{
e.preventDefault() ;
// con.innerHTML = title.value.trim() ;

const tr = document.createElement("tr") ;
const titletd = document.createElement("td") ;
const authortd = document.createElement("td") ;
const isbntd = document.createElement("td") ;

tr.innerHTML = `<td>${title.value.trim()}</td> <td>${author.value.trim()}</td> <td>${isbn.value.trim()}</td>` 
	title.value = "" ;
	author.value = "" ;
	isbn.value = "" ;
	tb.appendChild(tr) ;
})