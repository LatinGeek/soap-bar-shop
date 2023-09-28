import Image from 'next/image';
import styles from '../styles/ShoppingListItem.module.css'
import PriceSection from './PriceSection';

export default function ShoppingListItem() {
    return (
        <div className={styles.container}>
            <Image alt='thumbnail' layout='responsive' width={500} height={200} src={"/images/test-soap-thumbnails/tourmaline-&-argan-oil-bar-soap.png"}></Image>
            <h3>Tourmaline & Eucalyptus Bar Soap</h3>

            <PriceSection unitPrice={12.00} quantity={1} />

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