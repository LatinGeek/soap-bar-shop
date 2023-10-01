import Image from 'next/image';
import styles from '../styles/ShoppingListItem.module.css'
import PriceSection from './PriceSection';
import { useRef, useState } from 'react';

export default function ShoppingListItem({ id, title, description, price, thumbnailImg, titleFontSize, initialQuantity, handleShoppingCartUpdate, handleShoppingItemUpdate }) {
    const [editOverlay, setEditOverlay] = useState(false)
    const [quantity, setQuantity] = useState(initialQuantity)
    const [getTitle, setTitle] = useState(title);
    const ref = useRef(null);

    function handleQuantityUpdate(quantity) {
        setQuantity(quantity);
    }

    function handleTitleEdit(event) {
        var updatedTitle = event.target.value;
        if (updatedTitle != '') {
            setTitle(updatedTitle);
            handleShoppingItemUpdate({ id, title: updatedTitle, description, price, thumbnailImg, titleFontSize });
        }
    }

    return (

        <div className={styles.container}>

            <div className={editOverlay ? styles.editWrapperShow : styles.editWrapperHide}>
                <div className={styles.inputOverlay} />

                <div className={styles.inputEditContainer}>
                    <input ref={ref} className={styles.inputEdit} type='text' onKeyDown={(e) => e.key == 'Enter' ? setEditOverlay(false) : ''} onChange={handleTitleEdit} value={getTitle} />
                    <div>
                        <button className={styles.confirmEditButton} onClick={() => setEditOverlay(false)}>
                            <Image alt="Confirm edit button" src="/tick.svg" width={30} height={30} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.itemImageContainer}>
                    <Image alt='thumbnail' width={250} height={150} src={thumbnailImg}></Image>
                </div>
                <h3 style={{ fontSize: titleFontSize }}>
                    {getTitle}
                    <button className={styles.editButton} onClick={() => { setEditOverlay(true); setTimeout(() => ref.current.focus(), 150); }}>
                        <Image alt="Edit button" src="/edit.svg" width={15} height={15} />
                    </button>
                </h3>

                <PriceSection handleQuantityUpdate={handleQuantityUpdate} unitPrice={price} quantity={quantity} />

                <div className={styles.descriptionSection}>
                    {description}
                </div>

                <div className={styles.actionSection}>
                    <button className={styles.primaryActionButton} onClick={() => handleShoppingCartUpdate(id, quantity)}>Add to cart</button>
                    <div className={styles.secondaryActionButton}>
                        <a>Learn More</a>
                    </div>
                </div>
            </div>
        </div >
    )
}