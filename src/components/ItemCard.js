import { SlBasket } from "react-icons/sl";

const ItemCard = (props) => {
  const { name, price, img, description, type, model, id } = props;

  return (
    <div className='card-container'>
      <img src={img} alt={type} />
      <br />
      <p className='card-type'>
        {type} {name.toUpperCase()}
      </p>
      <p className='card-model'>{model}</p>
      <div className='card-price'>
        <p>{`${price} hrn.`}</p>
        <button>
          <SlBasket className='buyIcon' />
        </button>
      </div>
      <p className='card-description'>{description}</p>
    </div>
  );
};

export default ItemCard;
