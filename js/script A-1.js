const accordionItemHeaderss = document.querySelectorAll(".accordion-item-headers");

	accordionItemHeaderss.forEach(accordionItemHeaders => {
  	accordionItemHeaders.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeaders.classList.toggle("active");
    const accordionItemBodys = accordionItemHeaders.nextElementSibling;
    if(accordionItemHeaders.classList.contains("active")) {
      accordionItemBodys.style.maxHeight = accordionItemBodys.scrollHeight + "px";
    }
    else {
      accordionItemBodys.style.maxHeight = 0;
    }
    
  });
});