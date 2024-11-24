function isHiddenElements(element){
    
    console.log(document.querySelector(element).classList);
    
    document.querySelector(element).classList.toggle('hidden')
};

export default isHiddenElements;