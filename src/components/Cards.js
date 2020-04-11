import React from 'react';
import Card from './Card';

class Cards extends React.Component {

    render() {
        return (                  
            <div className="container-fluid">              
                <h3 className="text-center selection-work-text">Here you can see some projects I have done!</h3>
                <div className="row container-fluid web-projects mx-auto justify-content-center w-100"> 
                    <Card
                    img = {'/lecarne.png'}
                    titulo={'Landing product'}
                    description = {'Landing page product designed for Le Carné Gourmet, a restaurant located in Medellín, Colombia'}
                    urlButtom = {'https://val135.github.io/landing-product/'}
                    />

                    <Card
                    img = {'/wikipedia.png'}
                    titulo={'Wikipedia Clone'}
                    description = {'This is a non-functional clone of the famous website Wikipedia, using only HTML and CSS.'}
                    urlButtom = {'https://val135.github.io/clone-wikipedia/'}
                    />

                    <Card
                    img = {'/viajecdotas.png'}
                    titulo={'Documentation Page'}
                    description = {'Documentation Page with important information about Medellín. It was created for Viajecdotas, a personal travel blog.'}
                    urlButtom = {'https://val135.github.io/documentation-page/'}
                    />

                    <Card
                    img = {'/random-quote.png'}
                    titulo={'Randome Quote Machine'}
                    description = {'This is a Free Code Camp project made in Vanilla JavaScript. It shows different quotes and color every time. '}
                    urlButtom = {'https://gifted-swirles-3016d5.netlify.com'}
                    />

                    <Card
                    img = {'/emojis.png'}
                    titulo={'Random Emoji'}
                    description = {'This is a tiny project, just for fun. Enter here and you will get a random emoji, try to make the same expresion. '}
                    urlButtom = {'https://val135.github.io/emojis'}
                    />
                    
                    <Card
                    img = {'/calculator.png'}
                    titulo={'Calculator'}
                    description = {'This is a Free Code Camp project made in Vanilla JavaScript. It works as a calculator to add, multiply, divide and more. '}
                    urlButtom = {'https://gifted-swirles-3016d5.netlify.com'}
                    />
                </div>
            </div>        
        )
    }
}

export default Cards;