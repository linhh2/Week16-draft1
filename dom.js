let counter = document.querySelector('.counter');
let stater = document.querySelector('.span');
let loader = document.querySelector('.loading-progress');
const button = document.querySelector('.button');
let text = document.querySelector('.text');
let widthBar = document.querySelector('.text-icon2')

let count = 0;

button.addEventListener("click", ()=>{
    button.classList.add("progress");
    text.innerText = "Downloading";
    

    setTimeout(()=>{
     button.classList.remove("progress"); 
     text.innerText = "Done";
    },5000); 

  });

button.addEventListener('click', function(){
    let loading = setInterval(animate,200);
    function animate(){
        if(count == 100){
            loader.classList.remove("active-loader");
            loader.style.opacity =0;
            clearInterval();

    } else{
        count = count + 4;
        counter.textContent = count +'%';
        loader.classList.add("active-loader");
    }
}
});
