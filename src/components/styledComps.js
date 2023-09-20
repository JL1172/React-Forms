import styled from "styled-components"
import {keyframes} from "styled-components"


const kf = keyframes`
0% {
 color : rgb(39, 39, 39);
}
25% {
 color : rgb(156, 153, 153);
}
50% {
 color : rgb(235, 232, 232);
}
75% {
 color : rgb(156, 153, 153);
}
100% {
 color : rgb(39, 39, 39);
}
`
const kf2 = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
const activekf = keyframes`
0% {
    outline-offset : 8px;
}
25% {
    outline-offset : 10px;
}
100% {
    outline-offset : 14px;
}
`

export const StyledHeader = styled.div`
background-color : rgb(39, 39, 39);
font-family: 'Cinzel', serif;
height : 5rem;
border-bottom : 4px solid gray;
display : flex;
justify-content : flex-start;
align-items : flex-end;
img {
    width : 50px;
}
a {
    color : white;
    text-decoration : none;
    font-size : 30px;
    margin-left : 3rem;
}
`
export const StyledHome = styled.div`
background-color : rgb(92, 92, 92);
height : 100vh;
font-family: 'Cinzel', serif;
background-image : linear-gradient(-45deg,rgb(39, 39, 39)
,rgb(156, 153, 153),rgb(235, 232, 232),rgb(156, 153, 153) );
background-size : 400% 400% ;
animation : ${kf2} 15s infinite;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
section {
    width : 20rem;
    height : fit-content;
    margin-top : 4rem;
    display : flex;
    justify-content  : space-between;
    font-size : 20px;
    a {
        background-color : white;
        outline : 2px solid rgb(39, 39, 39);
        color : black;
        text-decoration : none;
        border-radius : 20px;
        padding : .2rem;
        &:hover {
            color :  white;
            background-color : rgb(39, 39, 39);
            outline-offset  : 4px;
            transform : scale(1.1);
        }
        &:active {
            animation : ${activekf} .3s ease-in-out forwards;
        }
    }
}
div {
    display : flex;
    margin-bottom : 3rem;
div {
    animation : ${kf} 5s infinite; 
}
div:nth-of-type(1) {
    font-size : 50px;
}
div:nth-of-type(2) {
    font-size : 50px;
    animation-delay : .1s;
}
div:nth-of-type(3) {
    font-size : 50px;
    animation-delay : .2s;
}
div:nth-of-type(4) {
    font-size : 50px;
    animation-delay : .3s;
}
}
input {
    width : 300px;
    height : 75px;
    border-radius : 24px;
    border : none;
    outline : 2px solid rgb(39, 39, 39);
    background-color : white;
    color : black;
    font-size : 24px;
    text-align : center;
    &:hover {
        background-color : rgb(39,39,39);
        color : white;
        outline-offset : 4px;
        transition : .2s ease-in-out;
    }
    &:active {
       animation : ${activekf} .1s ease-in-out forwards;
    }
}
`

export const StyledForm = styled.div`
height : 100vh;
display  : flex;
flex-direction  : row;
justify-content : center;
align-items : center;
background-color :azure;
main {
    border : 2px solid lightblue;
    width : 35rem;
    height : 40rem;
    background-color : rgb(39, 39, 39);
    outline : 2px solid lightblue;
    outline-offset : 4px;
    h3 {
        color : white;
        text-align : center;
        margin-bottom : 5rem;
        padding-top  :2rem;
        font-family: 'Nanum Myeongjo', serif;
    }
>div {
    display : flex;
    justify-content  :center;
    border-bottom : 1px solid lightgray;
    padding-bottom : 1rem;
   section {
    border : 2px solid lightgray;
    padding : 1rem;
    border-radius : 10rem;
    z-index : 1;
   }
   section:nth-of-type(1) {
    background-color : ${props => props.first ? "royalblue" : "royalblue"};
    color : ${props => props.first || props.second || props.third ? "white" : "black"};  
    transition : .6s;
   }
   section:nth-of-type(2) {
    background-color : ${props => props.second ? "royalblue" : props.third ? "royalblue" : "white"}; 
    color : ${props => props.second ? "white" : props.third ? "white" : "black"};  
    transition : .6s;
   }
   section:nth-of-type(3) {
    background-color : ${props => props.third ? "royalblue" : "white"}; 
    color : ${props => props.third ? "white" : "black"};  
    transition : .6s;
   }
}

form {
    margin-top : 3rem;
    display : flex;
    flex-direction  : column;
    align-items : center;
    input {
        background-color : white; 
    }
    select {
       margin-top : 4rem;
       background-color : white; 
    }
    #secondPageButtons {
        margin-top : 5rem;
        display : flex;
        justify-content : space-between;
    }
    #firstPageButton {
        margin-top : 6rem;
        display : flex;
        margin-left : 15rem;
        align-self : flex-end;
    }
    #thirdPageButtons {
        margin-top : 7rem;
        display : flex;
        justify-content : space-between;
    }
    button {
        background-color : royalblue;
        border : none;
        border-radius : 5px;
        width : 50px;
        color : white;
        &:active {
            background-color : white;
            color : royalblue;
            transform : scale(1.1); 
            border-color : royalblue;
        }
    }
}
}
#submit {
        background-color : royalblue;
        border : none;
        border-radius : 5px;
        width : fit-content;
        color : white;
        &:active {
            background-color : white;
            color : royalblue;
            transform : scale(1.1); 
            border-color : royalblue;
        }
    }
.reset {
    background-color : white;
        border : none;
        border-radius : 5px;
        width : fit-content;
        color : black;
        height : fit-content;
        align-items : center;
        display : flex;
        align-self : flex-end;
        &:active {
            color : royalblue;
        }
    }
    #fourth {
        color : white;
        display : flex;
        flex-direction :column;
        justify-content : space-between;
    }
    #container {
        border : 2px solid white;
        height : 20rem;
        display : flex;
        justify-content : flex-start;
        padding-left : 1rem;
        div {
            border-bottom : 1px solid white;
        }
    }
    #card {
        display : flex;
        height : fit-content;
        width : 18rem;
        margin-right : .2rem;
        margin-top : .5rem;
    }
    .span {
        color : royalblue;
    }
`
const secondFormKf = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 200% 50%;
	}
`


export const SecondStyledForm = styled.div`
height : 100vh;
display : flex;
flex-direction  :column;
justify-content : center;
align-items : center;
background-image : linear-gradient(to right, rgb(157, 197, 157),white);
background-size : 150% 150%;
animation : ${secondFormKf} 2s forwards;
h3 {
    font-family: 'Nanum Myeongjo', serif;
}
#container {
    /* outline : 2px solid rgb(201, 147, 0); */
    border-radius : 10px;
    height : 20rem;
    width : 40rem;
    background-color : white;
    form {
        display : flex;
        border-radius : 10px;
        justify-content : space-between;
        height : 20rem;
        background-color :white;
        #firstColumn {
            border-right : 2px solid rgb(157, 197, 157) ;
            padding-right : 1rem;
            display : flex;
            justify-content : flex-start;
            div {
                padding-left : 1rem;
                padding-top : 1.7rem;
            }
        }
        #secondColumn {
            padding-right : 2rem;
            display : flex;
            justify-content : flex-start;
            .wrapper {
                display : flex;
                flex-direction : column;
                padding-top : 1rem;
                justify-content : space-around;
                align-items : flex-start;
                #lname {
                    display : flex;
                    align-items  : center;
                }
                #fname {
                    display : flex;
                }
                .radio {
                    display : flex;
                }
            }
        }
    }
}
input {
    border  : 2px solid lightblue;
    border-radius : 5px;
}
input[type=radio] {
    appearance: none;
         padding: 10px;
         background-color: white;
         border-radius:50%;
}
input[type=radio]:checked {
         background-color: rgb(157, 197, 157);
      }
label,span {
    font-family : Arial, Helvetica, sans-serif;
}
#toSub {
    input {
        background-color : white;
    }
}
#lastCard {
    width : 15rem;
    height : 5rem;
    display : flex;
    justify-content :center;
    align-items : center;
    flex-direction : row;
    img {
        margin-right : .2rem;
    }
}
`