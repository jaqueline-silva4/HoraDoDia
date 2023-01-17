function carregar () {
	var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}horas.`
    if (hora >= 0 && hora < 12) {
    	// BOM DIA!
    	img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#FFD700'
        document.querySelector('div#foto').innerHTML += 'BOM DIA!'

    } else if (hora >= 12 && hora < 18) {
    	// BOA TARDE!
    	img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#F4A460'
        document.querySelector('div#foto').innerHTML += 'BOA TARDE!'
        
    } else {
    	// BOA NOITE!
    	img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#483D8B'
        document.querySelector('div#foto').innerHTML += 'BOA NOITE!'
        
    }


}
