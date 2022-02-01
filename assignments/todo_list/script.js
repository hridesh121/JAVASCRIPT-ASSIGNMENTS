var todobtn = document.querySelector('button');
var inputfld = document.querySelector('input');
var todo = document.querySelector('.todos')
var  inc= 0;


todobtn.addEventListener("click", additem)

function additem(){
    var paragraph = document.createElement('p');
    paragraph.setAttribute("key",inc);
    inc = inc + 1;
    paragraph.innerHTML = inputfld.value;
    todo.appendChild(paragraph);
    inputfld.value="";
    paragraph.addEventListener("click", deleteitem)

    function deleteitem(){
        todo.removeChild(paragraph)
    }
}
