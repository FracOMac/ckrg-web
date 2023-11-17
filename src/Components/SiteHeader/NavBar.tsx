import NavElement from "./NavElement";

function NavBar() {
    return (
        <div className="navBar">
            <NavElement name="Home" link="#/"/>
            <NavElement name="Calc" link="#/calc"/>
            <NavElement name="Advanced Pogo Search" link="#/search" />
        </div>
    )
}

export default NavBar