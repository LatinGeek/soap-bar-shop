import Image from 'next/image';
import styles from '../styles/ShoppingListItem.module.css'
import PriceSection from './PriceSection';

export default function ShoppingListItem({ title, description, price, thumbnailImg }) {
    return (
        <div className={styles.container}>
            <Image alt='thumbnail' layout='responsive' width={500} height={200} src={thumbnailImg}></Image>
            <h3>{title}</h3>

            <PriceSection unitPrice={price} quantity={1} />

            <div className={styles.descriptionSection}>
                {description}
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