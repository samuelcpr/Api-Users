import { hashSync, compareSync } from 'bcrypt';

class Usuario {
  constructor(id, nome, email, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = this.criptografarSenha(senha); // Armazena a senha criptografada
  }

  // Método para criar o hash da senha
  criptografarSenha(senha) {
    const saltRounds = 10;
    return hashSync(senha, saltRounds);
  }

  // Método para verificar se a senha fornecida corresponde ao hash da senha armazenada
  verificarSenha(senha) {
    return compareSync(senha, this.senha);
  }
}

export default Usuario;
