const selectSection = Array.from(document.querySelectorAll(".select-section")) ; 
selectSection.forEach(e=> {
e.addEventListener("change" , (opt) => {
    window.location.href = `${opt.target.value}`
})
})


const selectService = Array.from(document.querySelectorAll(".select-service")) ; 
selectService.forEach(e=> {
e.addEventListener("change" , (opt) => {
    console.log(opt.target.value)
})
})