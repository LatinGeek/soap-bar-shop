import styles from '../styles/PriceSection.module.css'
import { useState } from 'react';

export default function PriceSection({ unitPrice, quantity, handleQuantityUpdate }) {
    //TODO: Define max amount of items to buy at once.
    const MAX_AMOUNT = 1000;
    const CURRENCY = '$';
    const [getQuantity, updateQuantity] = useState(quantity);

    function handleValueUpdate(event) {
        if (event.target.value >= 0 && event.target.value <= MAX_AMOUNT) {
            updateQuantity(Math.round(event.target.value));
            handleQuantityUpdate(Math.round(event.target.value));
        }
    }



    return (
        <div className={styles.priceSection}>
            <h3 className={styles.priceTag}>{CURRENCY}{(unitPrice * getQuantity).toFixed(2)}</h3>
            <input onChange={handleValueUpdate} size={getQuantity.length} className={[styles.quantityInput, getQuantity.length > 2 ? styles.inputLarge : styles.inputSmall].join(' ')} value={getQuantity} type='number' />
        </div>
    )
}