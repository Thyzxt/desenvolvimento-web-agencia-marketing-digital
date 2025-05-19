const observer = new IntersectionObserver((entries) =>{
        
    entries.forEach(entry =>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');}}); 
        
        },{threshold: 0.1});

const elementsToObserve = document.querySelectorAll('p, a, h2, h3, li, img');

elementsToObserve.forEach(element =>{

    observer.observe(element);});

function showMessage(){

    const whatsMessage = document.querySelector(".whats-message");
    whatsMessage.style.display = "flex";}

function closeMessage(){

    const whatsMessage = document.querySelector(".whats-message");
    whatsMessage.style.display = "none";}

function openText(icon){

    const planType = icon.closest('.plan-type');
    const planContent = planType.querySelector('.plan-content');
    const planTitle = planType.querySelector('.plan-title');
    const LandingPage = document.getElementById('plan-landing-page')

    const maxHeightComputed = window.getComputedStyle(planContent).maxHeight;
    
    if(maxHeightComputed !== "0px"){

        planTitle.style.color = "black";
        planContent.style.maxHeight = "0";
        planTitle.style.marginBottom = "0";} 
        
    else{

        planTitle.style.color = "#FF2978";
        planContent.style.display = "block";
        planContent.style.maxHeight = planContent.scrollHeight + "px";
        LandingPage.style.marginBottom = "0";}}
