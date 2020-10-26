import React from 'react';


export default class Chocolatepizza extends React.Component {
    render() {
        return (
            <div style={{ background: this.props.color}} className='pizza'>
                <img className='head' src="public/head.png" alt='head'/>
                            </div>

        )
    }
}