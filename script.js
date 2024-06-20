const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector('#qr-code img')

// Gerar Qr Code
function gerarQrCode() {
  const qrCodeInputValue = qrCodeInput.value;


  qrCodeBtn.innerText = "Gerando Qr Code";

  qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

  qrCodeImg.addEventListener("load", () =>{
    container.classList.add("active")
    qrCodeBtn.innerText = "Qr Code criado!";
  })
}

//erro aqui
qrCodeBtn.addEventListener("click", () => {
    gerarQrCode();
  });;

//Limpar Qr Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInputValue){
        container.classList.add.remove("active")
    qrCodeBtn.innerText = "Gerar Qr code"
    }
})