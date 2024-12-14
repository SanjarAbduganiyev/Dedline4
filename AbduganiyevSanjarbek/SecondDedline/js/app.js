document.querySelectorAll(".oddiy").forEach((input)=>{
    input.addEventListener("focus", () => {

        input.style.borderColor = "rgb(9, 235, 32)";
      
        
    });
    input.addEventListener("blur", () => {

        input.style.borderColor = "rgb(51, 238, 13)";
    });
});

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.backgroundColor = "rgb(15, 142, 17)";
scrollBtn.style.color = "white";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.zIndex = "1000";



document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactButton = document.querySelector(".massage button");
contactButton.addEventListener("click", () => {
    const messageInput = document.querySelector(".massage input");
    if (messageInput.value.trim() === "") {


        alert("Iltimos, xabar matnini kiriting!");
    } else {
        alert(`Xabaringiz yuborildi: ${messageInput.value}`);
        messageInput.value = ""; 
    }
});


const radios = document.querySelectorAll(".radios input");
radios.forEach((radio) => {
    radio.addEventListener("change", () => {
        radios.forEach((r) => r.parentElement.style.color = "black");
        radio.parentElement.style.color = "rgb(252, 16, 16)";
    });
});


document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.filter = "brightness(0.8)";
        img.style.transition = "0.5s";
    });



    img.addEventListener("mouseout", () => {
        img.style.filter = "brightness(1)";
    });



})
