document.addEventListener('click', () => {
    const clickButton = document.getElementById("account");
    const menu = document.getElementById("dropdown-menu");
    clickButton.addEventListener('click', (event) => {
      if(menu.classList.contains("active")){
        menu.classList.remove("active")
      }else{
        menu.classList.toggle("active")
      }
    });
});
