import React from 'react';
import OneIdea from './OneIdea';
export default class GoodIdeas extends React.Component{
    render(){
        const Articles = [
            'Some Article',
            'Article again',
            'Some text',
            'and so on...',
            'ok, take else'
        ].map( (title, i) => <OneIdea key={i} title={title} /> );
        const adText = [
            'Ad spot #1',
            'Ad spot #2',
            'Ad spot #3',
            'Ad spot #4',
            'Ad spot #5'
        ];
        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
        var cool = this.props.params.idea;
        return(
            <div>
                <div class='row'>
                    <div class='col-lg-12'>
                        <div class='well text-center'>
                            {randomAd}
                        </div>
                    </div>
                </div>
                <div class='row'>{Articles}</div>
            </div>
        );
    }
}