import React from 'react';

const LoginForm = ({ email, senha, onChange, onSubmit, mensagemErro }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => onChange('email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="senha"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => onChange('senha', e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Entrar
      </button>
      {mensagemErro && (
        <div className="mt-3 text-danger text-center">{mensagemErro}</div>
      )}
    </form>
  );
};

export default LoginForm;
