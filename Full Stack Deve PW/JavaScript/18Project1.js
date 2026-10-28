const btn = document.getElementById("button");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];   // mathrandom 0 se 0.99 tak value deta hai . 16 se agar random ko multiply karenge toh 16 ke nichhe point mai milega answer 
        // Math.floor sir integer value dega
    }
    return cons;
}

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();

}
btn.addEventListener("click", changeRandomColor);
