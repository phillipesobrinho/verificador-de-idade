function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert(`[ERRO]Verificar os dados e tente novamente`)
    } else{
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var gênero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if (fsex[0].checked) {
gênero = `Homem`
if (idade >=0 && idade <=11) {
    img.setAttribute(`src`, `img/menino.png`)
    
} else if (idade <18){
    img.setAttribute(`src`, `img/menino.png`)
} else if (idade <50){
    img.setAttribute(`src`, `img/H-removebg-preview.png`)
}else{
    img.setAttribute(`src`, `img/idoso-removebg-preview.png`)
}

} else if (fsex[1].checked){
gênero = `Mulher`
if (idade >=0 && idade <=10) {
    img.setAttribute(`src`, `img/menina-removebg-preview (6).png`)
} else if (idade <21) {
    img.setAttribute(`src`, `img/menina-removebg-preview (6).png`)

} else if (idade <50) {
    img.setAttribute(`src`, `img/idosa-removebg-preview.png`)

}else if (idade >80 ){
    img.setAttribute(`src`, `img/idosa-removebg-preview.png`)

}
}
res.style.textAligh = `center`
res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img)
    }
    }
