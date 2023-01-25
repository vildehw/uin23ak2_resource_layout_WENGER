
//genere knapper 
let btnList = ""   
         
resources.map((prod, index) => {btnList += `<button id="btn${index}" onClick="btnFunction(${index})">${prod.category}</button>`})   
document.querySelector("nav").innerHTML = btnList   

//funksjon utløst av knappetrykk
function btnFunction(index) { 

    //fjerner .active på alle knapper  
    let btnArr = Array.from(document.querySelectorAll("button"))  
    btnArr.map(button => button.classList.remove("active"))  
    //kilde brukt for å fjerne active class https://stackoverflow.com/questions/37334613/vanilla-js-remove-class-from-all-other-elements-besides-active-class 
    //kilde for å manipulere klasser https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

    //legg til .active 
    let btnIndex = document.getElementById("btn" + index)  
    btnIndex.classList.add("active") 

    //lage ny liste til sources som skal skrives ut i HTML
    let sourceHTML = ""  
    let sourceArr = Array.from(resources[index].sources)

        sourceArr.map (source => {
            sourceHTML += `<li><a href="${source.url}">${source.title}</a></li>`  
          
    })
    
    //skriver ut til HTML
    document.querySelector("#sources").innerHTML = sourceHTML
    document.querySelector("#title").innerHTML = resources[index].category 
    document.querySelector("#content").innerHTML = resources[index].text
        
}


