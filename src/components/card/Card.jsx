import React from "react";

const card = ({singleCart, handleClick}) => {
    const {title, price, description, category, image} = singleCart


  return (
    <div>
     <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className="p-4 w-[80%] mx-auto h-[80%]"><img className="" src={image} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title.slice(0, 17)}</h2>
    <p>{description.slice(0, 58)}</p>
    <div>
        <p>Price: ${price}</p>
    </div>
    <div className="card-actions justify-end">
    <button onClick={() => handleClick(singleCart)} className="btn btn-primary text-white btn-block">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default card;
