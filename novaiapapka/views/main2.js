document.addEventListener("DOMContentLoaded", () => {
    const login = document.getElementById("login");
    const popup = document.getElementById("popup3")
    const popupRemove = document.getElementById("popupRemove3")
    const leaveAccount = document.getElementById("leaveAccount")
    const loginUsername = localStorage.getItem('nickname');
    const loginUsernamePopup = document.getElementById("loginUsernamePopup");
    
    loginUsernamePopup.textContent = String(loginUsername);
    login.textContent = String(loginUsername);
    
    login.addEventListener("click", (i) => {
        i.preventDefault();
        popup.classList.add('popup3-active');
    });
    login.addEventListener("click", (i) => {
        i.preventDefault();
        setTimeout(() => {
            popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }, 200)
    });
    popupRemove.addEventListener("click", () => {
        popup.style.backgroundColor = "transparent";
        setTimeout(() => {
            popup.classList.remove('popup3-active');
        }, 170)
    });
    // leaveAccount.addEventListener("click", (i) => {
    //     i.preventDefault();
    //     setTimeout(() => {
    //         window.location.href = "#"
    //     }, 1000)
    // });
})