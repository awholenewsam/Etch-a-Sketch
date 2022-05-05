const cdiv = document.querySelector('.grid');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
  cdiv.appendChild(div);
}

cdiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class'))





const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
     window.location.reload();
});
