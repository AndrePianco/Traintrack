import React from "react";
import "./Header.css";
import NavItem from "../NavItem/NavItem";
import { Home, PlusCircle, User, LogOut } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
    <div className="header-top">
      {/* Você pode até remover isso se quiser tudo junto */}
    </div>
    <nav className="nav-bar">
      <div className="header-inner">
        {/* Juntar logo + nav-content */}
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1 className="brand">TrainTrack</h1>
        </div>
  
        <div className="nav-item">
          <NavItem icon={<Home size={16} />} text="Início" to="/home" />
          <NavItem
            icon={<PlusCircle size={16} />}
            text="Adicionar treino"
            to="/addWorkout"
          />
          <NavItem
            icon={<User size={16} />}
            text="Perfil e configurações"
            to="/profile"
          />
          <NavItem icon={<LogOut size={16} />} text="Sair" to="/login" />
        </div>
      </div>
    </nav>
  </header>
  
  );
};

export default Header;
