new Error(message, fillName, lineNumber);

//todos os parametros são opcionais

const MeuErro = new Error('Mensagem inválida');
MeuErro.name = 'InvalidMessage'; //renomeando o nome do error

throw MeuErro;