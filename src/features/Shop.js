import React from 'react'

function Item(props) {
  const { info } = props
  return (
    <div>
      <h3>{info.name}</h3>
      <p>${info.price}</p>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}


function Shop(props) {
  const { info } = props;
  return (
    <div className='box col-big'>
      <h2>Products</h2>
      <div className='row'>
        {info.map((info) => (
          <Item key={info.name} info={info}></Item>
        )) }
      </div>

    </div>
  )
}

export default Shop