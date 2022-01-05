
const submitEl =document.getElementById("submit");


submitEl.addEventListener('click',function(){

    let favwordEl =document.getElementById("input").value;
    let numwordEl =document.getElementById("word");
    
    
    let count = favwordEl.length;

    if(favwordEl === ''){
        alert('Enter correct value');
    }

    numwordEl.innerHTML = `<h1>Total No.Of.Words: ${count}</h2>`;
   
    
});