import items from "../data/data.js";
import ItemCard from "./ItemCard.js";
import "./MainItems.css";

const MainItems = () => {
  return (
    <main className='page-main__container'>
      <ul>
        {items.map((item) => {
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

export default MainItems;

// items.map((item) => {
//   if (!request) {
//     return (
//       <li key={item.id}>
//         <ItemCard {...item} />
//       </li>
//     )
//   } else if (request === item.name) {
//     return (
//       <li key={item.id}>
//         <ItemCard {...item} />
//       </li>
//     )
//   } else if (request === item.type) {
//     return (
//       <li key={item.id}>
//         <ItemCard {...item} />
//       </li>
//     )
//   }
//   return null
// })
// }
