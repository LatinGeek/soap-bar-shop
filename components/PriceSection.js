import Image from 'next/image';
import styles from '../styles/PriceSection.module.css'
import { useState } from 'react';

export default function PriceSection({ unitPrice, quantity }) {

    const [getQuantity, updateQuantity] = useState(quantity);


    return (
        <div className={styles.priceSection}>
            <h3 className={styles.priceTag}>${(unitPrice * getQuantity).toFixed(2)}</h3>
            <input onChange={e => updateQuantity(e.target.value)} className={styles.quantityInput} value={getQuantity} type='number' />
        </div>
    )
}