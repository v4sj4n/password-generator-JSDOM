const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

genPswButton = document.getElementById("generate-psw")
psw1Field = document.getElementById("psw1")
psw2Field = document.getElementById("psw2")

function generateRandomIndex(){
   return Math.floor(Math.random() * characters.length)
}

function passwordGenerator(){
    let password = ""
    for (let i = 0; i < 15; i++){
        password += characters[generateRandomIndex()]
    }
    return password
}

genPswButton.addEventListener("click", function() {
    psw1Field.textContent = passwordGenerator()
    psw2Field.textContent = passwordGenerator()

})

psw1Field.addEventListener("click", function() {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  });