import { _body ,_icons} from "./style"
import Reactwriter from "./assets/writer"



export default ()=>(
    <_body>
        <p>
        Greetings, I'm Ahmad,
        <br/>
        <span><Reactwriter text="A Full Stack Developer" delay={200}/></span>
        <br/>
        With a Knack for Exploring the World of Web Design.
        </p>
        <a  href="https://daredevily.github.io/CV/" class="btn btn-primary">Visit CV</a>
        <_icons>
        <a href="https://github.com/DaredEvily" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.youtube.com/@ahmadgamal6802" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.linkedin.com/in/ahmad-gamal-88589a293/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.facebook.com/hackerCBI" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        </_icons>
    </_body>
    )

