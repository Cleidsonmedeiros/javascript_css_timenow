function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas, `

    if (hora >= 6 && hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        comprimento.innerHTML = 'Bom Dia!!'
    } else if (hora >= 13 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        comprimento.innerHTML = 'Boa Tarde!!'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        comprimento.innerHTML = 'Boa Noite!!'
    }
        
}