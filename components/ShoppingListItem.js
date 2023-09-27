import Image from 'next/image';
import styles from '../styles/ShoppingListItem.module.css'

export default function ShoppingListItem() {
    return (
        <div className={styles.container}>
            <Image alt='thumbnail' layout='responsive' width={500} height={200} src={"/images/test-soap-thumbnails/tourmaline-&-argan-oil-bar-soap.png"}></Image>
            <h3>Tourmaline & Eucalyptus Bar Soap</h3>

            <div className={styles.priceSection}>
                <h3 className={styles.priceTag}>$12.00</h3>
                <input className={styles.quantityInput} value='1' type='number' />
            </div>

            <div className={styles.descriptionSection}>
                Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion.
            </div>

            <div className={styles.actionSection}>
                <button className={styles.primaryActionButton}>Add to cart</button>
                <div className={styles.secondaryActionButton}>
                    <a>Learn More</a>
                </div>
            </div>
        </div>
    )
}