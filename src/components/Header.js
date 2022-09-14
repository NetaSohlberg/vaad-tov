import "./Header.css"
// import "./LoginButton"
// import LoginButton from "./LoginButton"

function NewHeader(){


    return(
        <>
    <header>
        
        {/* <a className ="login">
            <LoginButton/>
        </a> */}
        
        
        <h1 class="title">הלכה בגבעה</h1>
        <nav className="menu">

        <a href="#"> בראשית</a>
        <a href="#">שמות</a>
        <a href="#">ויקרא</a>
        <a href="#">במדבר</a>
        <a href="#">דברים</a>
        </nav>
        
    </header>
    </>
     

    );


}

export default NewHeader;