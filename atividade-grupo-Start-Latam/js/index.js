// Quando clicar no botão, o programa irá começar a rodar
function iniciar() {    
    const historia = document.querySelector('p#historia')
    var idioma = ' '
    while(true) {
        // Vai pegar só a primeira letra com o array [0], e jogar pra maiúscula com toUpperCase().
        idioma = prompt('Inglês ou português? ')[0].toUpperCase()
        if(idioma === 'I' || idioma === 'P') {
            break
        }
    }
    // Verificando o idioma
    if(idioma === 'I') {
        var name = ' '
        while(true) {
            name = prompt(`What's your name? `).toUpperCase()
            if(name.length !== 0) {
                break
            }
        }
        alert(`Welcome, ${name}!`)
        historia.innerHTML = `Welcome, ${name}!`
    }else{
        var nome = ' '
        while(true) {
            nome = prompt('Qual é o seu nome? ').toUpperCase()
            if(nome.length !== 0) {
                break
            }   
        }
        alert(`Bem-vindo, ${nome}!`)
        historia.innerHTML = `Bem-vindo, ${nome}!`
    }
}