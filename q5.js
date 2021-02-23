var x = document.getElementById("two").value;
console.log(x);
dollar.addEventListener("click",function()
{
    var y=x*0.0137227;
    log.textContent = y+"dollar";  
});
euro.addEventListener("click",function()
{
    var y=x*0.011;
    log.textContent = y+"euro";
});