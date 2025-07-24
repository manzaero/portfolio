import {NavLink} from "react-router-dom";

const LinksContainer = ({className}) => {
    return (
        <div className={className}>
            <ul>
                <NavLink to='/' className={({isActive})=> (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to='/' className={({isActive})=> (isActive ? 'active' : '')}>About</NavLink>
                <NavLink to='/' className={({isActive})=> (isActive ? 'active' : '')}>Tech Stack</NavLink>
                <NavLink to='/' className={({isActive})=> (isActive ? 'active' : '')}>Projects</NavLink>
                <NavLink to='/' className={({isActive})=> (isActive ? 'active' : '')}>Contact</NavLink>
            </ul>
        </div>
    )
}