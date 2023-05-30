import { useState } from 'react';
import Title from './Title';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';

//Array all categories
let allCategories = ['all', ...new Set(data.map((el) => el.category))];

function App() {
  //useState
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  //Function filterCategories
  const filterCategories = (input) => {
    if (input == 'all') {
      setMenuItems(data);
      return;
    }
    
    let filteredItems = data.filter((el) => el.category == input);
    setMenuItems(filteredItems);
  };

  //RETURN
  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
