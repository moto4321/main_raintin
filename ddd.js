const pc = document.querySelector(".pc");
const android = document.querySelector(".andr");
const ios = document.querySelector(".ios");
const block1 = document.querySelector(".text-block1");
const block2 = document.querySelector(".text-block2");
const block3 = document.querySelector(".text-block3");

const pcMenu = () => {
    block1.classList.remove("hidden");
    // functionBtn.classList.add("modal-overlay");
}
const androidMenu = () => {
    block2.classList.remove("hidden");
    // functionBtn.classList.remove("modal-overlay");
}
const iosMenu = () => {
    block3.classList.remove("hidden");
    // functionBtn.classList.remove("modal-overlay");
}

const pcMenuOut = () => {
    block1.classList.add("hidden");
    // functionBtn.classList.add("modal-overlay");
}
const androidMenuOut = () => {
    block2.classList.add("hidden");
    // functionBtn.classList.remove("modal-overlay");
}
const iosMenuOut = () => {
    block3.classList.add("hidden");
    // functionBtn.classList.remove("modal-overlay");
}

pc.addEventListener("mouseover", pcMenu);
android.addEventListener("mouseover", androidMenu);
ios.addEventListener("mouseover", iosMenu);

pc.addEventListener("mouseout", pcMenuOut);
android.addEventListener("mouseout", androidMenuOut);
ios.addEventListener("mouseout", iosMenuOut);

block1.addEventListener("mouseover", pcMenu);
block2.addEventListener("mouseover", androidMenu);
block3.addEventListener("mouseover", iosMenu)

block1.addEventListener("mouseout", pcMenuOut);
block2.addEventListener("mouseout", androidMenuOut);
block3.addEventListener("mouseout", iosMenuOut);


