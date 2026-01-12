const logo = new URL("../assets/st-logo.jpeg", import.meta.url);


export default function Header(){
    console.log("LOGO PATH:", logo);
    return(
      
       <header className="header">
        <div className="container">
        <img src={logo} className="logo" />
         <h1>SthiraMind</h1>
        <p>
          A mental wellness platform inspired by the wisdom of Sthit Pragya.
        </p>
        </div>      
       </header>

    )
}