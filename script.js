function chamaRelogio() {
const spanRelogio = document.querySelector("#relogio")
const date = new Date()
const horas = date.getHours().toString().padStart(2, "0")
const minutos = date.getMinutes().toString().padStart(2, "0")
const segundos = date.getSeconds().toString().padStart(2, "0")

spanRelogio.innerHTML = `${horas}:${minutos}:${segundos}`
}

chamaRelogio()

setInterval(chamaRelogio, 1000)