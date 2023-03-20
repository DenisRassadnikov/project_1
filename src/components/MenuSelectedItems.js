import items from "../data/data.js";
import ItemCard from "./ItemCard.js";
import "./MainItems.css";

const MenuSelectedItems = ({ group }) => {
  const filteredItems = items.filter((item) => item.type === group);

  return (
    <main className='page-main__container'>
      <ul>
        {filteredItems.map((item) => {
          const { type, id, price, img, description } = item;
          return (
            <li key={item.id} className='card'>
              <ItemCard {...item} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MenuSelectedItems;
