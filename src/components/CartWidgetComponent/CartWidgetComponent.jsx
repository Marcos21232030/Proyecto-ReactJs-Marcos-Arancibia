import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {

    return (
        <div>
            <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faCartShopping} />
            <span style={{
                fontSize: '1.2rem',
                marginRight: '3rem'
            }}>0</span>
        </div>


    )
}

export default CartWidgetComponent;