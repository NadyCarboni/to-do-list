/* Variaveis da UI*/ 

const adicionar = document.querySelector('.btnAdicionar');

const tarefasFeitas = document.querySelector('.container-tarefas');




class UI {
    /* ------------ MÉTODOS ------------*/
    
    adicionarListaTarefa(valor) {
       if(valor != '') {
        const containerTarefas = document.querySelector('.container-tarefas');
        const tarefa = document.createElement('div');
        tarefa.classList = "to-do";
        
        
        
        tarefa.innerHTML = `
        <div class="title">
        <input type="checkbox" name="" id="checkbox">
        <p>${valor}</p>
        </div>
        <a href="#" class="deletar">x</a>`
        containerTarefas.appendChild(tarefa);
        
       } else {
           this.aviso('Por favor escreva algo no campo da tarefa', 'erro')
       }
        
    }

    limparInput() {
        
       document.querySelector('#tarefa').value = '';
        
    }

    aviso(mensagem, classe) {
        const container = document.querySelector('.container');
        const tarefaCampo = document.querySelector('.tarefa-campo')
        const aviso = document.createElement('div');
        aviso.textContent = mensagem;
        
        aviso.classList = classe;
        
        container.insertBefore(aviso, tarefaCampo);
        setTimeout(function(){
            aviso.remove()
            }, 3000);
    
    }

    deletar(target) {
        if(target.className === 'deletar') {
            target.parentElement.remove();
        }
    }
     check(target) {
         if(target.checked) {
             target.parentElement.style.textDecoration = 'line-through'
         } else {
            target.parentElement.style.textDecoration = 'none'
         }
     }

}


/* Eventos */

//adicionar 
adicionar.addEventListener('click', function(event) {
    
     // Pegar o valor do form:
     const input = document.querySelector('#tarefa').value;
    
     
    // instanciar UI
    const ui = new UI;
    ui.adicionarListaTarefa(input)
    ui.limparInput();
    event.preventDefault();
}); 

// deletar 

tarefasFeitas.addEventListener('click', function(e) {
    const ui = new UI;
    ui.deletar(e.target)
    ui.check(e.target);
});



