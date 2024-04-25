const imgBox = document.getElementById('imgBox');
const qrImg = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');


function generateQR(){
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ qrText.value;
}