import React from 'react';

export default function Baksket(props){
    const {cartItems, onAdd ,onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingPrice = itemsPrice > 500 ? 0:70;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className='block .col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div> Cart is Empty</div>}
            </div>
            {cartItems.map((item) =>(
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x ₹{item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Items Amount</div>
                        <div className='col-1 text-right'>₹{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Amount</div>
                        <div className='col-1 text-right'>₹{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Amount</div>
                        <div className='col-1 text-right'>₹{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'><strong>Total Amount</strong></div>
                        <div className='col-1 text-right'><strong>₹{totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <button onClick={() => alert('CheckOut Button Clicked')}>Check Out</button>
                    </div>
                </>
            )}
        </aside>
    );
}