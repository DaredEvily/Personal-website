import { styled } from "styled-components";

const Full = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;

    color: white;
`;

const _in = styled.div`
    width: 85%;
    height: 99.8%;
    font-size: 20px;

    @media (max-width:1000px){
        width:100%;
        font-size: 1rem;
    }
    
`;

const _nav = styled.div`

    transition: 0.5s;
    position: fixed;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid rgba(255, 255, 255, 0.373);

    h1 {
    font-family: 'Sedgwick Ave Display', cursive;
    height: 200%;
    width: 30%;
    padding: 0% 1%;
    }

    h1 a {
    color: white;
    text-decoration: none;
    }
    @media (max-width:1000px){
        width: 100%;
    }
    @media (max-width:650px){
        justify-content: center;
        h1{
            margin: 0;
            padding: 5%;
            width: 100%;
            text-align: center;
        }
    }
    
`;

const _navcon = styled.div`
    ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    }

    ul li {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    text-align: center;

    a {
    transition: 0.3s;
    width: 100%;
    padding: 28px;
    text-decoration: none;
    color: white;
    text-align: center;
    }

    a:active {
    color: rgba(255, 255, 255, 0.405);
    }

    :hover {
    background-color: rgba(31, 46, 62, 0.856);
    color: rgba(255, 255, 255, 0.789);
    }

    }
    width: 30%;
    @media (max-width:650px){
        display: none;
    }
`;

const _body = styled.div`
    height: 100vh;
    padding-top: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    span {
    color: green;
    }

p {
    display: inline-block;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
    margin: 2% 0%;
    width: 60%;
}

.btn {
    font-size: 20px;
    padding: 1% 5%;
    border-radius: 15px;
    transition: 0.3s ;
    &:hover {
    transform: scale(1.05, 1.05);
    }
}

    p h2 {
    width: 100%;
    }
    @media (max-width:900px){
        margin-top: 18%;
    
    }
    @media (max-width:600px ),(max-width:450px){
        margin-top: 30%;
        .btn{font-size:18px}
    }
`;

const _icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
    width: 30%;
    a:hover{color:white}
    a {
    color:white;
    cursor: pointer;
    margin: 4% 8.5%;
    font-size: 30px;
    transition: 0.2s;
    }

    :last-child:hover {
    color: #4267b2;
    }

    i:active {
    transform: scale(1.1, 1.1);
    }

    .fa-youtube:hover {
    color: #ff0000;
    }

    .fa-linkedin:hover {
    color: #0072b1;
    }

    .fa-github:hover {
    color: white;
    opacity: 0.7;
    }
`;

const _project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px 50px 0px 0px;
    
    background-color: black;

    h1 {
    border-radius: 90px;
    box-shadow: 1px 1px 5px white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.373);
    text-align: center;
    width: 30%;
    margin: 3% 0% 2% 0% ;
    padding: 1% 0%;
    }
    @media (max-width:500px){
        h1{width: 50%;
        padding:3%}
    }
`;
const _probody=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`
const _cards=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%;
    border: 1px solid;
    border-radius: 30px;
    margin: 2% 0%;
    h2{
        width: 100%;
        border-bottom: 1px solid;
        font-size: 40px;
        padding: 5%;
        margin: 0;
    }
    p{
        width: 100%;
        margin: 0;
        padding: 10%;
        /* border: 1px solid ; */
    }
    a{
        color: black;
        text-decoration: none;
        background-color: white;
        width: 50%;
        padding: 2%;
        margin-bottom: 5%;
        border-radius:30px;
        transition: .4s;
    }
    .a:hover{transform:scale(1.1,1.1);}
    .a:active{background-color:black;border:1px solid;color:white}

    @media (max-width:1000px){
        width:40%;
        margin: 2%;
    }
    @media (max-width:600px){
        width: 50%;
    }
    @media (max-width:500px){
        width:70%
    }

`

const _conback = styled.div`
    .hide {
    background-color: rgb(31, 46, 62);
    transition: 0.5s;
    border: none;
        }
        
`;
const _footer = styled.div`
    background-color: rgb(31, 46, 62);
    text-align: center;
    display: flex;
    flex-direction: row;

    h1{
        padding: 1%;
        margin: 0;
        border-right: 1px solid;
        width: 20%;
    }
    footer{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
    p{
        text-align: left;
        margin: 0% 2%;
    }
    
    @media (max-width:600px){
        flex-direction: column;
        h1{
            align-self: center;
            border-right: none;
            border-bottom:1px solid;
        }
        p{
            margin: 0;
        }
        p:first-child{text-align:center}
    }
    @media (max-width:500px){
        p{font-size: 10px;}
    }
`

export {
    Full,
    _in,
    _nav,
    _navcon,
    _body,
    _project,
    _icons,
    _conback,
    _probody,
    _cards,
    _footer
};
