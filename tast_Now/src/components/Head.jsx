import './head.css';
import posterImg from '../images/Group 3201.png'
export default function Head() {
  return (
    <div className="headContainer">
        <div>
        <h1>Experience food <span id='delivery'>Delivery</span>  like no other</h1>
        <p>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
    </div>
    <div className='imgDiv'>
        <img id='posterImg' src={posterImg} />
    </div>

    </div>
  )
}
