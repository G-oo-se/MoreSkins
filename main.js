document.addEventListener("DOMContentLoaded", () => {
    const login = document.getElementById("login");
    const removePopup = document.getElementById("popupRemove");
    const removePopup2 = document.getElementById('popupRemove2');
    const popup = document.getElementById("popup");
    const popup2 = document.getElementById("popup2")
    const loginForm = document.getElementById("loginForm")
    const regpopup = document.getElementById("regpopup")
    const regForm = document.getElementById("regForm")
    const loginpopupForm = document.getElementById("loginpopup")
    const checkForm = document.getElementById("check")
    const checkForm2 = document.getElementById("check2")

    
    login.addEventListener("click", (i) => {
        i.preventDefault();
        popup.classList.add('popup-active');
        setTimeout(() => {
            popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }, 200);
    });

    // Ранний способ авторизации
    // loginForm.addEventListener("submit", (i) => {
    //     i.preventDefault();
    //     const username = document.getElementById("loginName").value;
    //     const userpassword = document.getElementById("loginPassword").value;
    //     const useremail = document.getElementById("regEmail").value;

    //     if (username === name && userpassword === password) {
    //         checkForm.style.color = "green";
    //         checkForm.textContent = "Производиться вход..."

    //         setTimeout(() => {
    //             window.location.href = "main2.html"
    //         }, 2000)
    //     } else {
    //         checkForm.style.color = "red"
    //         checkForm.textContent = "Неверный логин или пароль..."

    //         setTimeout(() => {
    //             checkForm.textContent = "";
    //         }, 3000)
    //     }
    // });


    regForm.addEventListener("submit", (i) => {
        const userreg = document.getElementById("regName").value;
        const userpasswordreg = document.getElementById("regPassword").value;
        const useremailreg = document.getElementById("regEmail").value;
        const value = userreg.value.trim();
        const valuepass = userpasswordreg.value;
        const valueemail = useremailreg.value;
        // console.log(userreg.length)

        if (value === "") {
            console.log("Поле имени пустое");
            i.preventDefault();
        };
        if (value.length < 3) {
            console.log("Минимальное кол символов достигнуто");
            i.preventDefault();
        };
        if (valuepass === "") {
            console.log("Поле пароля пустое");
            i.preventDefault();
        };
        if (valuepass.length < 3) {
            console.log("Минимальное кол символов достигнуто");
            i.preventDefault();
        };
        // if(localStorage.getItem(userreg)) {
        //     checkForm2.style.color = "red";
        //     checkForm2.textContent = "Данный пользователь уже зарегестрирован";
        //     setTimeout(() => {
        //         checkForm.textContent = ""
        //     }, 3000)
        // } else {
        //     localStorage.setItem(userreg, userpasswordreg, useremailreg);
        //     checkForm2.style.color = "green";
        //     checkForm2.textContent = "Аккаунт создан!";
        // }
    });

    // loginForm.addEventListener("submit", (i) => {
    //     i.preventDefault();
    //     const userreg = document.getElementById("loginName").value;
    //     const userpasswordreg = document.getElementById("loginPassword").value;

    //     if(localStorage.getItem(userreg) === userpasswordreg) {
    //         checkForm.style.color = "green"
    //         checkForm.textContent = "Производиться вход..."
    //         localStorage.setItem('nickname', userreg);

    //         setTimeout(() => {
    //             window.location.href = "#";
    //         }, 2000);
    //     } else {
    //         checkForm.style.color = "red";
    //         checkForm.textContent = "Неверный логин или пароль...";
    //     };
    // });

    regpopup.addEventListener("click", () => {
        popup.style.backgroundColor = "transparent"
        setTimeout(() => {
            popup.classList.remove("popup-active");
        }, 150);
        setTimeout(() => {
            popup2.classList.add("popup-active");
        }, 450);
        setTimeout(() => {
            popup2.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }, 650);
    });
    removePopup2.addEventListener("click", () => {
        popup2.style.backgroundColor = "transparent"
        setTimeout(() => {
            popup2.classList.remove('popup-active')
            popup.classList.remove('popup-active')
        }, 150);
    });
    
    loginpopupForm.addEventListener("click", () => {
        popup2.style.backgroundColor = "transparent"
        setTimeout(() => {
            popup2.classList.remove('popup-active');
        }, 150);
        setTimeout(() => {
            popup.classList.add('popup-active');
        }, 450);
        setTimeout(() => {
            popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }, 650);
    });
    removePopup.addEventListener("click", () => {
        popup.style.backgroundColor = "transparent"
        setTimeout(() => {
            popup.classList.remove('popup-active');
            popup2.classList.remove('popup-active');
        }, 150);
    });
})