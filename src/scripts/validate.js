class Valid {
    constructor(options) {
        this.form = options.element;
        this.emailError = 'js-email-error';
        this.nameError = 'js-name-error';
        this.messageError = 'js-message-error';
        this.inputSuccess = false;

        this.emptyErrorMessage = 'Поле не должно быть пустым';
        this.incorrectEmailMessage = 'Некорректный email адрес';

    }

    init() {
        this._initElements();
        this._bindElements();
    }

    _initElements() {
        this.$form = document.querySelector(`${this.form}`);
        this.$name = this.$form.elements.name;
        this.$email = this.$form.elements.email;
        this.$emailError = this.$form.querySelector(`.${this.emailError}`);
        this.$nameError = this.$form.querySelector(`.${this.nameError}`);
        this.$messageError = this.$form.querySelector(`.${this.messageError}`);
        this.$message = this.$form.elements.comment;

        
    }

    _bindElements() {
        this.$form.addEventListener('submit', (e) => {
            e.preventDefault();


            const isValidEmail = event.target.checkValidity();
            const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
            const regEmail = new RegExp(emailStr, 'u')
                
            
            if (this.$email.value == '') {
                this.$emailError.innerHTML = this.emptyErrorMessage;
            } else if(!(isValidEmail && regEmail.test(this.$email.value))) {
                this.$emailError.innerHTML = this.incorrectEmailMessage;
            } else {
                this.$emailError.innerHTML = '';
            }

            if (this.$name.value == '') {
                this.$nameError.innerHTML = this.emptyErrorMessage;
            } else {
                this.$nameError.innerHTML = '';
            }

            if (this.$message.value == '') {
                this.$messageError.innerHTML = this.emptyErrorMessage;
            } else {
                this.$messageError.innerHTML = '';
            }

            return inputSuccess



        });
    }

    
    
}

export default Valid;