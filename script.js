const avanca = document.querySelectorAll('.btn-primeiropasso');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.getAttribute('data-primeiropasso');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
        

    })
})