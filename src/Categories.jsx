function Categories({ categories, filterCategories }) {
  return (
    <div className='btn-container'>
      {categories.map((el) => {
        return (
          <div key={el}>
            <button onClick={() => filterCategories(el)} className='btn'>
              {el}
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Categories;
