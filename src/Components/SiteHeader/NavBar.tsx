import NavElement from "./NavElement";

function NavBar() {
    return (
        <div className="navBar">
            <NavElement name="Home" link="./"/>
            <NavElement name="Calc" link="./calc"/>
        </div>
    )
}

export default NavBar