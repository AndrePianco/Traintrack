import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import sideImage from "../../assets/treino.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      {/* Lado Esquerdo */}
      <div className="login-left">
        <div className="login-logo-area">
          <img src={logo} alt="Logo" className="login-logo" />
          <h1 className="login-title">TrainTrack</h1>
        </div>
        <img src={sideImage} alt="Ilustração" className="login-image" />
        <p className="login-description">
          Acompanhe seus treinos e evolua constantemente, <br />
          controlando suas progressões de cargas com precisão
        </p>
      </div>

      {/* Lado Direito */}
      <div className="login-right">
        <h2>Entrar</h2>
        <h4>Bem Vindo</h4>

        <form className="login-form">
          <label>Email:</label>
          <input type="email" placeholder="Email" required />

          <label>Senha:</label>
          <input type="password" placeholder="Senha" required />

          <button type="submit">Entrar</button>
        </form>

        <p className="login-register">
          Não tem uma conta? <span>Registre-se agora</span>
        </p>
        <p className="login-forgot">Esqueci minha senha</p>
      </div>
    </div>
  );
};

export default Login;
