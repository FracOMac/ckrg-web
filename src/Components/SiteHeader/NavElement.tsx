interface NavElementProps {
    name: string
    link?: string
}

function NavElement(props: NavElementProps) {
    return (
        <a href={props.link} className="navElement">{props.name}</a>
    )
}

export default NavElement