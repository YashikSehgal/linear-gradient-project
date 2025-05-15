let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");

let rgb1 = "#5C91E5"
let rgb2 = "#983FC6";
const getHexValues = () =>{
    let myHexaValues = "0123456789abcdef";
    let colors = "#";
    
    for(i=0; i<6; i++){
        let code = myHexaValues[Math.floor(Math.random() * 16)];
        colors += code
    }
    return colors;
    
}



const handleButton1 = () => {
    rgb1 = getHexValues();
    console.log(rgb1);
    btn1.innerText = `${rgb1}`;
    btn1.style.backgroundColor = `${rgb1}`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = ` background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

const handleButton2 = () => {
    rgb2 = getHexValues();
    console.log(rgb2);
    btn2.innerText = `${rgb2}`;
    btn2.style.backgroundColor = `${rgb2}`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}


btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.textContent);
    alert("Your text has been copied to the Clipboard");
})