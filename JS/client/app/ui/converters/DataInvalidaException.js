class DataInvalidaException extends ApplicationException{
    constructor() {
        super('A data deve ser no formato dd/mm/aaaa');
    }
}