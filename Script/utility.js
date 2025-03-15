function hideElementById(Element){
    document.getElementById(Element).classList.add('hidden');
}
function showElementById(Element){
    document.getElementById(Element).classList.remove('hidden');
}
function getRandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    const randomNumber =Math.random()*25;
    const index=Math.round(randomNumber);
    return alphabets[index]; 

}
function setbackgroundColorById(ElementId) {
    document.getElementById(ElementId).classList.add('bg-orange-400');
}
function removebackgroundcolorbyID(ElementId){
    document.getElementById(ElementId).classList.remove('bg-orange-400');
}
function update(ElementId){
    const currentvalue=document.getElementById(ElementId);
        const valuetext=currentvalue.innerText;
        const value =parseInt(valuetext);
        return value;
}
function setvalue(ElementID,value){
    const Element= document.getElementById(ElementID);
    Element.innerText =value;
}