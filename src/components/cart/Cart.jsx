import React from 'react';

const cart = ({cartItems, handleDeleteBtn}) => {
    return (
        <div>
            <div className='bg-gray-200 rounded-xl'>
                <h2 className='py-4 text-xl text-center rounded-lg font-bold'>Add Cart Item {cartItems.length}</h2>
                <div className='flex justify-around mb-4'>
                    <p className='font-semibold'>Name</p>
                    <p className='font-semibold'>Price</p>
                </div>
                <div className='pb-6'>
                    {
                        cartItems.map((item, idx) => (
                            <div key={idx} className='flex justify-around items-center my-3'>
                                <p>{idx + 1}</p>
                                <h1>{item.title.slice(0, 10)}</h1>
                                <h3>${item.price}</h3>
                                <button onClick={() => handleDeleteBtn(item.id)} className='btn btn-xs  btn-error'>Delete</button>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default cart;