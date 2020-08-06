// Quando clicar no botão, o programa irá começar a rodar
function iniciar() {    
    const historia = document.querySelector('p#historia')
    var op = document.getElementById('op').value
    switch(op) {
        case '2':
            alert('Muito bem! Boa escolha! Você escolheu o prompt. \u{1F600}\u{1F919}')
            var idiomaPrompt = ' '
            while(true) {
                // Vai pegar só a primeira letra com o array [0], e jogar pra maiúscula com toUpperCase().
                idiomaPrompt = prompt('Inglês ou português? ')[0].toUpperCase()
                if(idiomaPrompt === 'I' || idiomaPrompt === 'P') {
                    break
                }
            }
            // Verificando o idioma
            if(idiomaPrompt === 'I') { // Inglês
                var name = ' '
                while(true) {
                    name = prompt(`What's your name? \u{1F913}`).toUpperCase()
                    if(name.length !== 0) {
                        break
                    }
                }
                alert(`Welcome, ${name}!`)
                var age = parseInt(prompt('How old are you? \u{1F913}'))
                var word = '' // para fase das pessoas
                if(age < 0) {
                    var question = ' '
                    word = 'baby'
                    while(true) {
                        question = prompt(`Are you baby? \u{1F600}`)[0].toUpperCase()
                        if(question === 'Y' || question === 'N') {
                            break
                        }
                    }
                    if(question === 'Y') {
                        alert(`Hi, baby!! How's it going? \u{1F913}`)
                        var question2 = ' '
                        while(true) {
                            question2 = prompt('Baby, do you like pizza? ')[0].toUpperCase()
                            if(question2 === 'Y' || question2 === 'N') {
                                break
                            }
                        }
                        if(question2 === 'Y') {
                            alert(`That's so cool, baby. Because pizza is very good!\u{1F913}`)
                            alert(`I like it.\u{1F913}`)
                            document.getElementById('historia').style.background = '#243524'
                            document.getElementById('historia').style.color = '#fff'
                            document.getElementById('historia').style.padding = '8px'
                            document.getElementById('historia').style.borderRadius = '5px'
                            historia.innerHTML = `You are ${word} and you like pizza.\u{1F913}`
                        }else{
                            alert(`Why do you don't like pizza? `)
                            alert('1 bad or 2 hypertensive')
                            var answer = parseInt(prompt('Your choose: '))
                            switch(answer) {
                                case 1:
                                    alert('I got it.')
                                    document.getElementById('historia').style.background = '#243524'
                                    document.getElementById('historia').style.color = '#fff'
                                    document.getElementById('historia').style.padding = '8px'
                                    document.getElementById('historia').style.borderRadius = '5px'
                                    historia.innerHTML = `You don't like pizze because it's bad for you.\u{1F913}`
                                break

                                case 2:
                                    alert('I got it.')
                                    document.getElementById('historia').style.background = '#243524'
                                    document.getElementById('historia').style.color = '#fff'
                                    document.getElementById('historia').style.padding = '8px'
                                    document.getElementById('historia').style.borderRadius = '5px'
                                    historia.innerHTML = `You don't like pizza because you are hypertensive.\u{1F913}`
                                break

                                default:
                                    alert('Error. Please, try again.')
                                    document.getElementById('historia').style.background = '#f00'
                                    document.getElementById('historia').style.color = '#fff'
                                    document.getElementById('historia').style.padding = '8px'
                                    document.getElementById('historia').style.borderRadius = '5px'
                                    historia.innerHTML = `Error. Please, try again.`
                                break
                            } 
                        }
                    }else{
                        alert('Stranger...\u{1F914}')
                        document.getElementById('historia').style.background = '#243524'
                        document.getElementById('historia').style.color = '#fff'
                        document.getElementById('historia').style.padding = '8px'
                        document.getElementById('historia').style.borderRadius = '5px'
                        historia.innerHTML = `Welcome, ${name}!\nYou are ${age} years old. You are ${word}\u{1F913}.
                        It's stranger.\u{1F914}`
                    }
                }else if(age >=0 && age <= 11) {
                    word = 'child'
                    alert(`You are child.`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Welcome, ${name}!\nYou are ${age} years old. You are ${word}.\u{1F913}`
                }else if(age >= 12 && age <= 18) {
                    word = 'adolescent'
                    alert(`You are ${word}.`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Welcome, ${name}!\nYou are ${age} years old. You are ${word}.\u{1F913}`
                }else if(age >= 19 && age <= 30) {
                    word = 'young'
                    alert(`You are ${word}`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Welcome, ${name}!\nYou are ${age} years old. You are ${word}.\u{1F913}`
                }else if(age >= 30 && age <= 60) {
                    word = 'adult'
                    alert(`You are ${word}`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Welcome, ${name}!\nYou are ${age} years old. You are ${word}.\u{1F913}`
                }else{
                    word = 'elderly'
                    alert(`You are ${word}`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Welcome, ${name}!\nYou are ${age} years old. You are ${word}.\u{1F474}`
                }
            }else{
                // Português
                var nome = ' '
                while(true) {
                    nome = prompt(`Qual é o seu nome? \u{1F600}`).toUpperCase()
                    if(nome.length !== 0) {
                        break
                    }
                }
                alert(`Bem-vindo(a), ${nome}!\u{1F913}`)
                var idade = parseInt(prompt('Quantos anos você tem?\u{1F913}'))
                var palavra = '' // para fase das pessoas
                if(idade < 0) {
                    var pergunta = ' '
                    palavra = 'bebê'
                    while(true) {
                        pergunta = prompt(`Você é um bebê? \u{1F600}`)[0].toUpperCase()
                        if(pergunta === 'S' || pergunta === 'N') {
                            break
                        }
                    }
                    if(pergunta === 'S') {
                        alert(`Oi, bebê!! Como vão as coisas? `)
                        var pergunta2 = ' '
                        while(true) {
                            pergunta2 = prompt('Bebê, você gosta de pizza? ')[0].toUpperCase()
                            if(pergunta2 === 'S' || pergunta2 === 'N') {
                                break
                            }
                        }
                        if(pergunta2 === 'S') {
                            alert(`Isso é muito legal, bebê. Porque pizza é muito bom!`)
                            alert(`Eu gosto.`)
                            document.getElementById('historia').style.background = '#243524'
                            document.getElementById('historia').style.color = '#fff'
                            document.getElementById('historia').style.padding = '8px'
                            document.getElementById('historia').style.borderRadius = '5px'
                            historia.innerHTML = `Você é ${palavra} e gosta muito de pizza.\u{1F913}`
                        }else{
                            alert(`Por que você não gosta de pizza?`)
                            alert('1 ruim ou 2 hipertenso')
                            var resposta = parseInt(prompt('Sua escolha: '))
                            switch(resposta) {
                                case 1:
                                    alert('Entendi.')
                                    document.getElementById('historia').style.background = '#243524'
                                    document.getElementById('historia').style.color = '#fff'
                                    document.getElementById('historia').style.padding = '8px'
                                    document.getElementById('historia').style.borderRadius = '5px'
                                    historia.innerHTML = `Você não gosta de pizze porque é ruim para você.\u{1F913}`
                                break

                                case 2:
                                    alert('Entendi.')
                                    document.getElementById('historia').style.background = '#243524'
                                    document.getElementById('historia').style.color = '#fff'
                                    document.getElementById('historia').style.padding = '8px'
                                    document.getElementById('historia').style.borderRadius = '5px'
                                    historia.innerHTML = `Você não gosta de pizza porque você é hipertenso.\u{1F913}`
                                break

                                default:
                                    alert('Erro. Por favor, tente novamente.')
                                    document.getElementById('historia').style.background = '#f00'
                                    document.getElementById('historia').style.color = '#fff'
                                    document.getElementById('historia').style.padding = '8px'
                                    document.getElementById('historia').style.borderRadius = '5px'
                                    historia.innerHTML = `Erro. Por favor, tente novamente.`
                                break
                            } 
                        }
                    }else{
                        alert('Estranho...\u{1F914}')
                        document.getElementById('historia').style.background = '#243524'
                        document.getElementById('historia').style.color = '#fff'
                        document.getElementById('historia').style.padding = '8px'
                        document.getElementById('historia').style.borderRadius = '5px'
                        historia.innerHTML = `Bem-vindo, ${nome}! Você tem ${idade} anos. Você é ${palavra}.
                        isso é estranho.\u{1F914}`
                    }
                }else if(idade >= 0 && idade <= 11) {
                    palavra = 'criança'
                    alert(`Vocé é ${palavra}.`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Bem-vindo, ${nome}! Você tem ${idade} anos. Você é ${palavra}.\u{1F913}`
                }else if(idade >= 12 && idade <= 18) {
                    palavra = 'adolescente'
                    alert(`Você é ${palavra}.`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Bem-vindo, ${nome}! Você tem ${idade} anos. Você é ${palavra}.\u{1F913}`
                }else if(idade >= 19 && idade <= 30) {
                    palavra = 'jovem'
                    alert(`Você é ${palavra}`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Bem-vindo, ${nome}! Você tem ${idade} anos. Você é ${palavra}.\u{1F913}`
                }else if(idade >= 30 && idade <= 59) {
                    palavra = 'adulto'
                    alert(`Você é ${palavra}`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Bem-vindo, ${nome}! Você tem ${idade} anos. Você é ${palavra}.\u{1F913}`
                }else{
                    palavra = 'idoso'
                    alert(`Vocé é ${palavra}`)
                    document.getElementById('historia').style.background = '#243524'
                    document.getElementById('historia').style.color = '#fff'
                    document.getElementById('historia').style.padding = '8px'
                    document.getElementById('historia').style.borderRadius = '5px'
                    historia.innerHTML = `Bem-vindo, ${nome}! Você tem ${idade} anos. Você é ${palavra}.\u{1F474}`
                } 
            }      
        break
        case '3':
            alert('Muito bem! Boa escolha! Você escolheu o input.')
            alert('Ainda em desenvolvimento...\u{1F615}')
            document.getElementById('historia').style.background = '#f00'
            document.getElementById('historia').style.color = '#fff'
            document.getElementById('historia').style.padding = '8px'
            document.getElementById('historia').style.borderRadius = '5px'
            historia.innerHTML = `A opção 3 ainda está em desenvolvimento...\u{1F615}`
        break

        default:
            // Caso for escolhida uma opção inválida
            alert('Opção inválida.')
            document.getElementById('historia').style.background = '#f00'
            document.getElementById('historia').style.color = '#fff'
            document.getElementById('historia').style.padding = '8px'
            document.getElementById('historia').style.borderRadius = '5px'
            historia.innerHTML = `Opção inválida.\u{1F615}`
        break
    }
}
