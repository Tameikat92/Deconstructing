function printColors([primaryColor, secondaryColor]){
    console.log("first Color:", primaryColor);
    console.log("Second Color:",secondaryColor)

}
const colors = ["teal","orange","green"];

printColors(colors);

function getFruitPair() {
    return["apple","banana"];
}

const [first,second] = getFruitPair();
console.log(second);