const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault()
   const height= parseInt(document.querySelector("#height").value);
   const weight=parseInt(document.querySelector('#weight').value);
   console.log("Height",height);
   
   const results=document.querySelector('#results');
   if(height==' '|| height<10 || isNaN(height)){
     results.innerHTML=`Please give a valid ${height}` 
   } else if(weight==' '|| weight<10 || isNaN(weight)){
    results.innerHTML=`Please give valid weight ${weight}`
   } else{
    const bmi=(weight/((height*height)/10000).toFixed(2))
    results.innerHTML=`<span>${bmi}</span>`
   }

})
