import styled from "styled-components"

export const QuoteBg = styled.div`
    height: 100vh;
    background-color: ${props => props.displayDarkMode === true ? "#1A5276" : "#00acee"};
`
export const QuoteBody = styled.div`
    background-color: ${props => props.displayDarkMode === true ? "black" : 'white'};
    width:500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 25px;
`

export const QuoteHr = styled.hr`
    margin-left: 10px;
    margin-right: 10px;
`

export const QuoteBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.displayDarkMode === true ? "black" : 'white'};
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;

    a {
        color: #00acee;

        &:hover {
            color:#3498DB
  }
        
    }
`
export const Button = styled.button`
  background-color: #00acee;
  border: none;
  color: white;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  outline: none;

  &:hover {
    background-color:#3498DB
  }
`

export const QuoteContainer = styled.div`
    background-color: ${props => props.displayDarkMode === true ? "black" : 'white'};
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    /* transition: 0.3s ease-in-out; */

`



export const Quote = styled.h1`
    color: ${props => props.displayDarkMode === true ? "white" : 'black'};
    margin-bottom: 20px;
    /* transition: 0.5s; */
    /* transition: 0.3s ease-in-out; */

  

`

export const Author = styled.p`
    color: ${props => props.displayDarkMode === true ? "white" : 'black'};

    text-align: right;
    font-size: 20px;

    display: ${props => props.displayAuthor === false ? "none" : "block"};
`

export const CheckBoxWrapper = styled.div`
  position: relative;
  float: right;
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: /*#bebebe*/ white;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: /*ffffff*/ #00acee;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: /*#4fbe79*/ #00acee;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      background: white;
    }
  }
`
