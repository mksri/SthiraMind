import logo from '../assets/st-logo.jpeg'


export default function Header(){
    console.log("LOGO PATH:", logo);
    return(
      
       <header className="header">
        <div className="container">
        <img src={logo} alt="SthiraMind logo" className="logo" />
         <h1>SthiraMind</h1>
        <p>
          A mental wellness platform inspired by the wisdom of Sthit Pragya.
        </p>
        </div>      
       </header>

    )
}