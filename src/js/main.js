/* TR-15 - Numbers Section Start */
document.addEventListener("DOMContentLoaded", function(){
    const counters = document.querySelectorAll(".counter span");
  
    counters.forEach(counter => {
      counter.innerText = "0";
      
      const updateCounter = () => {
        const target = +counter.parentElement.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;
  
        if(current < target ){
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target.toLocaleString(); 
        }
      };
      updateCounter();
    });
  });
/* TR-15 - Numbers Section End */