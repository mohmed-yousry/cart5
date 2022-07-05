const seletCode = document.querySelector("#code") ; 
fetch(`../code.json`).then((data) => data.json()).then((allData)=> {
    allData.forEach(element => {
        let option = document.createElement("option") ; 
        option.value = allData.dialCode ; 
        option.innerHTML = `
        <p class="text-gray-900 leading-none text-xs">${element.isoCode} (${element.dialCode}) </p>
        `
        seletCode.appendChild(option)
        
    });
})
