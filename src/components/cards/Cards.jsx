import Card from '../card/Card'

const cards = ({cartsData, handleClick}) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
            cartsData.map((singleCart) => (<Card key={singleCart.id} handleClick={handleClick} singleCart={singleCart}></Card>))
            }
            {/* <Card></Card> */}
        </div>
    );
};

export default cards;