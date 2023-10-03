import {_cards } from "./style"

export default (props)=>(
        <_cards>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a className="a" href={props.link}>Go To Link</a>
        </_cards>  
)