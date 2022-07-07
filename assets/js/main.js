function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaClique();
        this.capturaEnter();
        this.pressionaBackSpace();
        this.presionaDel();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.pressionaBackSpace = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 8) {
                this.del();
            }
        });
    };

    this.presionaDel = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 46) {
                this.clear();
            }
        });
    };

    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.realizaConta();
            this.display.focus();
        });
    };

    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };

    this.clear = () => {
        this.display.value = ' ';
    };

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Erro. Conta inválida');
                return;
            } this.display.value = String(conta);
        } catch (e) {
            alert('Erro. Conta inválida');
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.inicia();