const throttleFunction=(func, delay)=>{

  let prev = 0; 
  return (...args) => {

    let now = new Date().getTime(); 

     if(now - prev > delay){ 
        prev = now;
 
      return func(...args);  

    }
  }
}

document.querySelector(".center").addEventListener("mousemove", throttleFunction((dets)=> {

    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px" ;


    var img = document.createElement("img");
    img.setAttribute("src" , "https://unsplash.com/photos/a-person-pouring-syrup-onto-a-plate-of-chicken-and-waffles-s9lu2uNwb7A");

    div.appendChild(img);

    document.body.appendChild(div);

    setTimeout(function(){
        div.remove();
    } , 500)
   
}, 500));
