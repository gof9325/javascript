const BG = document.getElementsByTagName("BODY")[0];

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function  handleClick(){
    const bodycolor = BG.style.backgroundColor;
    if(bodycolor === BASE_COLOR){
        console.log("if");
        BG.style.backgroundColor = OTHER_COLOR;

    }else{
        console.log("else");
        BG.style.backgroundColor = BASE_COLOR;
    }
};

function init(){
    BG.style.backgroundColor = BASE_COLOR;
    BG.addEventListener("click", handleClick);
};

init();
