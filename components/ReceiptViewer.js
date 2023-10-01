import styles from '../styles/ReceiptViewer.module.css'
import { useEffect, useState } from 'react';

export default function ReceiptViewer({ shoppingCart, shoppingItems }) {
    const [totalPrice, setTotalPrice] = useState(0);



    useEffect(() => {
        function calculateTotalPrice() {
            var total = 0;
            shoppingCart.forEach((item, id) => {
                total = total + (shoppingItems.get(id).price * item.quantity);
            });
            return total;
        }
        setTotalPrice(calculateTotalPrice());
    }, [shoppingCart, shoppingItems])


    return (
        <div className={styles.receiptContainer}>
            <table className={styles.receiptTable}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                {[...shoppingCart.keys()].filter((id) => shoppingCart.get(id).quantity > 0).map(id => {
                    return (
                        <tr key={id}>
                            <td>{shoppingItems.get(id).title}</td>
                            <td>{shoppingCart.get(id).quantity}</td>
                            <td>${(shoppingItems.get(id).price * shoppingCart.get(id).quantity).toFixed(2)}</td>
                        </tr>
                    )
                })}
                <tfoot >
                    <tr>
                        <td />
                        <td />
                        <td className={styles.tableTotalCell}>${totalPrice.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}