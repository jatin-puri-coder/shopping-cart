import React from 'react'

function Shop(props) {
  const { info } = props;
  return (
    <div className='box col-big'>
      <h2>Products</h2>
      <div className='row'>
        {/* map through the info to get each product and render it */}
        {info.map((info) => (
           <div key={info.name} info={info}>
             <h3>{info.name}</h3>
             <p>${info.price}</p>
           <div>
             <button>Add to Cart</button>
           </div>
         </div>
        )) }
      </div>

    </div>
  )
}

export default Shop