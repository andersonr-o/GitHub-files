function verificar(){
    var ano = new Date()
    var ano_atual = ano.getFullYear()
    var nasc = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var sect = window.document.querySelector('section#sec')
    sect.style.height = '440px'
    if(nasc.value == 0 || Number(nasc.value) > ano_atual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            if(idade >=0 && idade <10){
                genero = 'uma criança' // pode-se usar o operador ternário --> var genero = fsex[0].checked?1!'Masculino':'Feminino'
                img.setAttribute('src', 'imagens_pessoas/foto-bebe-m.png')
                document.querySelector('body#corpo').style.background = "url('ft.jpg')" // && 'black' <-- isso funciona
                sect.style.background = 'darkblue'
            }else if(/*idade >=10 && (pode-se fazer isso devido ao else. se a pessoa não é menor que 10 ela é maior que 10*/ idade <21){
                genero = 'um jovem'
                img.setAttribute('src', 'imagens_pessoas/foto-jovem-m.png')
                // document.querySelector('body#corpo').style.background = "black"
            }else if(idade < 50){
                genero = 'um adulto'
                img.setAttribute('src', 'imagens_pessoas/foto-adulto-m.png')
            }else{
                genero = 'um idoso'
                img.setAttribute('src', 'imagens_pessoas/foto-idoso-m.png')
            }
        }else if(fsex[1].checked){ // pode-se usar o operador ternário --> var genero = fsex[0].checked?1!'Masculino':'Feminino'
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                genero = 'uma criança'
                img.setAttribute('src', 'imagens_pessoas/foto-bebe-f.png')
            }else if(/*idade >=10 && (pode-se fazer isso devido ao else. se a pessoa não é menor que 10 ela é maior que 10*/ idade <21){
                genero = 'uma jovem'
                img.setAttribute('src', 'imagens_pessoas/foto-jovem-f.png')
            }else if(idade < 50){
                genero = 'uma adulta'
                img.setAttribute('src', 'imagens_pessoas/foto-adulto-f.png')
            }else{
                genero = 'uma idosa'
                img.setAttribute('src', 'imagens_pessoas/foto-idoso-f.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}