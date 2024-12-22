const Header = () => {
   return (
      <div className="header">
         <a href="/Portfolio/" className="header__title">
            <div className="header__name">
               <div className="header__names">
                  <p className="header__firstName">Clément</p>
                  <p className="header__lastName">Tailpied</p>
               </div>
               <div>
                  <p className="header__details">
                     Développeur{" "}
                     <span className="header__details--color">Web</span>
                  </p>
               </div>
            </div>
         </a>
         <nav className="header__nav">
            <ul>
               <li>
                  <a href="#aboutMe">&lt; About me &gt;</a>
               </li>
               <li>
                  <a href="#projets">&#91; Projets &#93;</a>
               </li>
               <li>
                  <a href="#skills"> &#123; Skills &#125; </a>
               </li>
               <li>
                  <a href="#contact">&#40; Contact &#41;</a>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
