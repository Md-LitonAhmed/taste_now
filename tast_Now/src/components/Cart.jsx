import "./cart.css";
import foodPic from '../images/food_2.png'
export default function Cart(props) {
  const { id, name, description,URL, price } = props.data;

  console.log({URL})

  return (
    <>
      <div className="orginalCart">
        <img src={foodPic} id='foodId' alt='food' />
        {/* <img src={URL} alt="food" /> */}
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{price}</p>

        <button className="addBtn">Add to cart</button>
      </div>
    </>
  );
}
