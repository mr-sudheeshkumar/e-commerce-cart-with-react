import React from 'react';

export default function Header(props){
    const {countCartItems} = props;
    return (
        <header className='row block center'>
            <div>
                <a href='#'>
                    <h1>Online PS4 Games Store</h1>
                </a>
            </div>
            <div>
                <a href="#/cart" className='carttxt'>
                    
                    <strong>Cart {' '}</strong>
                    {countCartItems?(
                        <button className='badge'>{countCartItems}</button>
                    ):(<button className='badge'>0</button>)}
                
                </a>
            </div>
        </header>
    );
}