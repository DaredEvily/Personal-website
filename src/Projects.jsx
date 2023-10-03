import { _project,_probody} from "./style";
import ScrollComponent from "./assets/onscroll";
import Reactwriter from "./assets/writer";
import card from "../cards.json"
import Cards from "./card"
export default ()=>{
    const probValue = 300
    const navValue = ScrollComponent({ prob: probValue });

    return (
        <_project id="projects">
        
        {navValue && <h1><Reactwriter text="Projects" delay={100} /></h1>}
            <_probody>
        {card.map((contact)=>{
        return <Cards title={contact.Title} description={contact.Des} link={contact.Link}/>   
    })}
            </_probody>
        </_project>
    )
}