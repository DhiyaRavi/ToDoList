const input=document.getElementById("input");
const listContainer=document.getElementById("list-container");
function AddTask()
{
    if(input.value==='')
    alert("You must write something!");
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    save();
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        save();
    }
},false);

function save()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()