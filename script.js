function navAnimation(){
    const nav = document.querySelector("nav");

const tl = gsap.timeline({paused: true});

tl.to(".nav-bottom", {
    height: "21vh",
    duration: 0.6
}, "start")
.to(".nav-part2 h5", {
    display: "block",
    duration: 0.1
}, "start")
.to(".nav-part2 h5 span", {
    y:0, 
    stgger:{
        amount: 0.6
    }
});


nav.addEventListener('mouseenter', ()=>{
    tl.play();
})

nav.addEventListener("mouseleave", ()=>{
  tl.reverse();
})

}
function introAnimation(){
  const tl = gsap.timeline();
tl.from(".intro", {
  opacity:0,
  duration:0.3,
  delay:0.2
})
tl.from("#page1",{
  transform:"scale(0.3)",
  borderRadius:"100px",
  duration:1,
  ease:"expo.out"
})
tl.from("nav", {
  opacity:0,
  transform: "scale(0.5)",
  duration:0.5
})
tl.from("#page1 h1, #page1 p #page1 div", {
  opacity:0,
  duration:0.5,
  stagger:0.2
})
}
function page2Animation(){
 const rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{
          gsap.to(elem.childNodes[3], {
            opacity: 1 ,
            scale: 1 
          })
    })
    elem.addEventListener("mouseleave", ()=>{ 
          
    gsap.to(elem.childNodes[3], {
            opacity: 0 ,
            scale: 0 
          })
            
    })
    elem.addEventListener("mousemove" , (dets)=>{
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 20 ,
            y: dets.y - elem.getBoundingClientRect().y - 100
        })
    })

})
}
function page3CenterAnimation(){
const page3Center = document.querySelector(".page3-center");
const video = document.querySelector(".page3 video")

page3Center.addEventListener("click" , ()=>{
    video.play();
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
        duration: 0.5
    })


})

video.addEventListener("click" , ()=>{
    
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
        duration: 0.5
    })

})
}
function page6VideoAnimation(){
const sections =  document.querySelectorAll(".section-right");

sections.forEach((element)=>{
    element.addEventListener("mouseenter", ()=>{
        element.childNodes[3].style.opacity=1 ;
        element.childNodes[3].play();
    })

      element.addEventListener("mouseleave", ()=>{
        element.childNodes[3].style.opacity= 0;
        element.childNodes[3].load();
    })
})
}
function page7Dropdown(){

// 1. Grab all the details elements that have our custom class
const allCustomDetails = document.querySelectorAll('details');

// 2. Loop through each one individually
allCustomDetails.forEach(details => {
  
  // Find the specific summary and button INSIDE this specific details tag
  const summary = details.querySelector('summary');
  const toggleBtn = details.querySelector('.action-btn');

  // 3. Disable the default click behavior for this specific summary
  summary.addEventListener('click', (event) => {
    event.preventDefault();
  });

 if (details.open) {
      toggleBtn.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;
    } else {
      toggleBtn.innerHTML = `<i class="ri-arrow-down-s-line"></i>`;
    }
  // 4. Make this specific button toggle its parent details tag
  toggleBtn.addEventListener('click', () => {
    details.open = !details.open; // Flip the state
    
    // Update the text for this specific button
    if (details.open) {
      toggleBtn.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;
    } else {
      toggleBtn.innerHTML = `<i class="ri-arrow-down-s-line"></i>`;
    }
  });
  
});
}
function page8Sliders(){
// Always make sure this is registered at the top of your file!
gsap.registerPlugin(ScrollTrigger);

const bottomItems = document.querySelectorAll(".bottom-item");

bottomItems.forEach((item) => {
  // Grab only the h4s inside this specific .bottom-item
  const h4s = item.querySelectorAll("h4");
  
  // Use fromTo to strictly define the START and END positions
  gsap.fromTo(h4s, 
    { 
      xPercent: 0 // START STATE: Force them to start exactly at 0%
    }, 
    {
      // END STATE: Slide them to their staggered percentages
      xPercent: (index) => {
        return index * 10; 
      },
      duration:1,
      scrollTrigger: {
        trigger: ".page8-bottom", 
        // REMOVED scroller: "body" - let ScrollTrigger find the default scrollbar
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      }
    }
  );
});
}




navAnimation();
page2Animation();
page3CenterAnimation();
page6VideoAnimation();
page7Dropdown();
page8Sliders();
introAnimation();