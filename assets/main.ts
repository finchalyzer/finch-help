(()=> {
   /* Add mac body class for hotkey style */
   if(navigator.platform.toLowerCase().indexOf("mac") > -1) document.body.classList.add("mac")

   /* Remove default form submit event */
   document.getElementById("search").addEventListener("submit", function(e) {
        e.preventDefault()
    }, true)

})()
