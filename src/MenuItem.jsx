function MenuItem({ img, title, desc, price, cetegory }) {
  return (
    <article className='menu-item'>
      {/* image */}
      <img src={img} alt={title} className='img' />

      <div className='item-info'>
        <header>
          {/* title */}
          <h5>{title}</h5>
          {/* price */}
          <span className='item-price'>${price}</span>
        </header>
        {/* description */}
        <p className='item-text'>{desc}</p>
      </div>
      
    </article>
  );
}

export default MenuItem;
