import React from 'react'
import {
    QuoteBody, 
    QuoteBtnWrapper, 
    QuoteBg, 
    Button, 
    QuoteHr, 
    QuoteContainer, 
    Quote, 
    Author,
    CheckBoxWrapper, 
    CheckBox, 
    CheckBoxLabel
} from "./QuoteElements"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class QuoteGenerator extends React.Component{
    constructor(){
        super()
        this.state ={
            quotes: [],
            randomQuote: "If we could see the miracle of a single flower clearly, our whole life would change.",
            randomAuthor:"Buddha",
            hasAuthor: true,
            test: true,
            darkModeOn: false
        }    
        this.genQuote = this.genQuote.bind(this)
        this.darkSwitch = this.darkSwitch.bind(this)
    }

    componentDidMount(){
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                this.setState({
                    quotes: data
                })
            });
    }

    genQuote(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.quotes.length)
        const randQuote = this.state.quotes[randNum].text
        const assoAuthor = this.state.quotes[randNum].author 
        this.setState({randomQuote: randQuote})
        this.setState({randomAuthor: assoAuthor})
        if(assoAuthor === null){
            this.setState({hasAuthor: false})
        }else{
            this.setState({hasAuthor: true})
        }
    }

    darkSwitch(){
        this.setState({
            darkModeOn: !this.state.darkModeOn
        })
    }

    render() {
        return(
            <QuoteBg displayDarkMode = {this.state.darkModeOn} >
                <QuoteBody displayDarkMode = {this.state.darkModeOn}>
                    <QuoteContainer displayDarkMode = {this.state.darkModeOn}>
                        <Quote displayDarkMode = {this.state.darkModeOn}>{this.state.randomQuote}</Quote>    
                        <Author displayAuthor = {this.state.hasAuthor} displayDarkMode = {this.state.darkModeOn}> - {this.state.randomAuthor}</Author>   
                    </QuoteContainer>
                    <QuoteHr></QuoteHr>
                    <QuoteBtnWrapper displayDarkMode = {this.state.darkModeOn}> 
                        <a target="_blank "href={`https://twitter.com/intent/tweet?text=${this.state.randomQuote}-${this.state.randomAuthor}`}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>                
                        <Button onClick={this.genQuote}>New Quote</Button>
                    </QuoteBtnWrapper>
                </QuoteBody>
                {/* <ToggleSwitch /> */}
                <CheckBoxWrapper>
                    <CheckBox id="checkbox" type="checkbox" onChange = {this.darkSwitch} />
                    <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>                
            </QuoteBg>
        )
    }
}

export default QuoteGenerator
