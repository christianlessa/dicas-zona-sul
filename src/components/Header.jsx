import style from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={style.center}>
        <div className={style.logo}>
          <img src="https://media.giphy.com/media/LQo5HzZnmZQ74Uc8tI/giphy.gif" alt="planet-earth"/>
          <p>Dicas ZonaSul</p>
        </div>
        <nav className={style.menu}>
          <a href="#contatos">Home</a>
          <a href="#contatos">Restaurantes</a>
          <a href="#contatos">Bares</a>
          <a href="#contatos">Contatos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
