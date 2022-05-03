import React, { useState, useEffect } from "react";

const QuoteBox = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    
    useEffect(() => { 
    getQuote();
    }, []);
    
    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
    ];
    const color = colors[Math.floor(Math.random() * 6)];
    document.body.style = `background: ${color}`;
    console.log(quote);
    
    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuote = data.quotes;
                let randomQuote = Math.floor(Math.random() * dataQuote.length);
                let randomChange = dataQuote[randomQuote];
                console.log(randomChange)
                setQuote(randomChange.quote);
                setAuthor(randomChange.author);
            })
    }

    const handleChange = () => {
        getQuote();
    }

    return (
        <div id="quote-card" style={{ color:color }}>
            <div id="text"><p>{quote}</p></div>
            <div id="author"><p>{author}</p></div>

            <button onClick={handleChange} id="change-quote"><i class="fa-solid fa-shuffle"></i></button>

        </div>
    )
}


export default QuoteBox;