import {_nav,_navcon,_conback} from "./style"
import ScrollComponent from "./assets/onscroll"


export default ()=>{
    const probValue = 10
    const navValue = ScrollComponent({ prob: probValue });

    return(
        <_conback>
<_nav className={navValue && "hide"} >

    <h1><a href="#">Ahmad G</a></h1>
        <_navcon>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about" >About</a></li>
                
            </ul>
        </_navcon>
    </_nav>
    </_conback>
    )
}