// function valuebotom(){
//     var btn1 = document.getElementById(botao);
//     btn1.value = innerHtml = 'oii'
// }
function mudarNome()
{
 if(document.getElementById("button").value == "Ativo")
 {
  document.getElementById("button").value = "Inativo";
 } 
 else
 {
  document.getElementById("button").value = "Ativo";
 }
}
function valuebotom(){
    var btn1 = document.getElementById('btn')
    btn1.innerHTML = 'oiii'
    btn1.value = btn1.innerHTML
    console.log(btn1.value)
}
