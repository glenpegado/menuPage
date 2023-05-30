import MenuItem from './MenuItem';

function Menu({ items }) {
  return (
    <div className='section-center'>
      {items.map((el) => {
        return <MenuItem key={el.id} {...el} />;
      })}
    </div>
  );
}
export default Menu;
