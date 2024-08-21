import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    width: 50%;
    background-color: #FFFFFF;
    border: 10px solid #1C1C1C;
`

export const Row = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);

`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const History = styled.div`
  /* estilos da history */
    background-color: #000;
    padding: 10px;
    max-height: 100px;
    overflow-y: auto;
    color: white;
    
    &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
`