import Image from 'next/image';
import styles from '../styles/PriceSection.module.css'
import { useState } from 'react';

export default function PriceSection({ unitPrice, quantity }) {

    function handleValueUpdate(event) {
        if (event.target.value >= 0) {
            updateQuantity(event.target.value);
        }
    }

    const [getQuantity, updateQuantity] = useState(quantity);


    return (
        <div className={styles.priceSection}>
            <h3 className={styles.priceTag}>${(unitPrice * getQuantity).toFixed(2)}</h3>
            <input onChange={handleValueUpdate} className={styles.quantityInput} value={getQuantity} type='number' />
        </div>
    )
}