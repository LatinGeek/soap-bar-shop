import Image from 'next/image';
import styles from '../styles/PriceSection.module.css'

export default function PriceSection() {
    return (
        <div className={styles.priceSection}>
            <h3 className={styles.priceTag}>$12.00</h3>
            <input className={styles.quantityInput} value='1' type='number' />
        </div>
    )
}