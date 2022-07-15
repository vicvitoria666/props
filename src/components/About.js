import styled from "styled-components";

const About = ({nome, idade, tecnologia}) => {
    return(
        <p>Meu nome é {nome} tenho {idade} e estudo {tecnologia}</p>
    ) 
};

export default About;
