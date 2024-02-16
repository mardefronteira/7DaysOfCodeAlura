
let desafio1 = () => {
    const todasVars = [0, '0', false, 1, '1', true, 0, '0', false];
    const tela = document.getElementById("desafio");
    
    tela.innerHTML = `
    <h2>Lógica JS 1/7: Operações Booleanas</h2>
    <p>Selecione duas variáveis para comparar:</p>
    <div id="conteiner-checkbox"></div>
    <button type="button" id="botao-comparar">Comparar</button>
    <p id="resposta"></p>
    `;
    
    const pResposta = document.getElementById('resposta');
    const conteinerCheckbox = document.getElementById('conteiner-checkbox');
    const botao = document.getElementById('botao-comparar');

    let varElements = [];
    let vComparar = [];


    let comparar = () => {

        if (vComparar.length !== 2) {
            pResposta.textContent = "Por favor, selecione dois valores.";
            return;
        }

        let resposta;
        if (vComparar[0] === vComparar[1]) {
            resposta = `As variáveis tem o mesmo valor e tipo.`
        } else if (vComparar[0] == vComparar[1]) {
            resposta = `As variáveis tem o mesmo valor e tipos diferentes.`
        } else if (typeof vComparar[0] === typeof vComparar[1]) {
            resposta = `As variáveis tem o mesmo tipo e valores diferentes.`
        } else {
            resposta = `As variáveis tem valores e tipos diferentes.`
        }

        pResposta.textContent = resposta;
    }

    let lidarComCheckbox = () => {
        // atualizar array vComparar com os valores selecionados
        let checkboxes = document.getElementsByName("variavel");
        vComparar = [];

        checkboxes.forEach((checkbox, i) => {
            if (checkbox.checked) {
                vComparar.push(todasVars[i]);
            }
        });
        console.log(vComparar);
    }

    
    // criar elementos para seleção
    todasVars.forEach((thisVar, i) => {
        
        const id = `var${i}`;
        
        const label = document.createElement("label");
        label.setAttribute("for", id);
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "variavel";
        checkbox.value = thisVar;
        checkbox.id = id;
        checkbox.onclick = lidarComCheckbox;
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(`${thisVar} (${typeof thisVar})`));
        
        varElements.push(label);
    });
    
    
    botao.onclick = comparar;

    varElements.forEach((box) => {
            conteinerCheckbox.appendChild(box);
        }
    );
}
