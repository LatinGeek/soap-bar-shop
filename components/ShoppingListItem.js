import Image from 'next/image';
import styles from '../styles/ShoppingListItem.module.css'
import PriceSection from './PriceSection';
import { useState } from 'react';

export default function ShoppingListItem({ title, description, price, thumbnailImg }) {
    const [editOverlay, setEditOverlay] = useState(false)

    return (

        <div className={styles.container}>

            <div className={editOverlay ? styles.editWrapperShow : styles.editWrapperHide}>
                <div className={styles.inputOverlay} />

                <div className={styles.inputEditContainer}>
                    <input className={styles.inputEdit} type='text' />
                    <div>
                        <button className={styles.confirmEditButton} onClick={() => setEditOverlay(false)}>
                            <Image alt="Confirm edit button" src="/tick.svg" width={30} height={30} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Image alt='thumbnail' layout='responsive' width={500} height={200} src={thumbnailImg}></Image>

                <h3>
                    {title}
                    <button className={styles.editButton} onClick={() => { setEditOverlay(true) }}>
                        <Image alt="Edit button" src="/edit.svg" width={15} height={15} />
                    </button>
                </h3>

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
        </div>
    )
}