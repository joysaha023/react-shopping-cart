import React from 'react';

const cart = ({cartItems}) => {
    return (
        <div>
            <div className='bg-gray-200'>
                <h2 className='py-4 text-xl text-center rounded-lg font-bold'>Add Cart Item {cartItems.length}</h2>
                <div className='flex justify-around'>
                    <p className='font-semibold'>Name</p>
                    <p className='font-semibold'>Price</p>
                </div>
                
            </div>
        </div>
    );
};

export default cart;