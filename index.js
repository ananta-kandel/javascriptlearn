let output = " ";
let stri = document.querySelectorAll('.button');
Array.from(stri).forEach((button) => {
    button.addEventListener('click',evaluate)
})

function evaluate(e){
    if (e.target.innerHTML == '=' )
    {
        output = eval(output);
        document.querySelector('input').value = output;
     }
     else if(e.target.innerHTML == 'c' ){
        output = "";
        document.querySelector('input').value = output;
     }
     else
     {
   console.log(e.targe)
   output = output + e.target.innerHTML;
   console.log(output);
  document.querySelector('input').value = output;
    }
}