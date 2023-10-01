import Image from 'next/image';
import styles from '../styles/PriceSection.module.css'
import { useEffect, useState } from 'react';

export default function ReceiptViewer({ shoppingCart }) {
    const [totalPrice, setTotalPrice] = useState(0);



    useEffect(() => {
        function calculateTotalPrice() {
            var total = 0;
            shoppingCart.forEach((value, key) => {
                total = total + (value.item.price * value.quantity);
            });
            console.log("ejecutado");
            return total;
        }

        setTotalPrice(calculateTotalPrice());
    }, [shoppingCart])


    return (
        <div style={{ fontSize: "small", borderRadius: "15px 15px 0 0", backgroundColor: "black", opacity: 0.91, width: "60%", position: "fixed", bottom: 0, right: 0 }}>
            <table style={{ width: "100%", textAlign: "center", padding: "10px" }}>

                <thead>
                    <tr style={{ borderBottom: "1px solid white" }}>
                        <th style={{ color: "white" }}>Title</th>
                        <th style={{ color: "white" }}>Quantity</th>
                        <th style={{ color: "white" }}>Subtotal</th>
                    </tr>
                </thead>
                {[...shoppingCart.keys()].map(id => {
                    return (
                        <tr key={id}>
                            <td style={{ color: "white" }}>{shoppingCart.get(id).item.title}  </ td>
                            <td style={{ color: "white" }}>{shoppingCart.get(id).quantity} </ td >
                            <td style={{ color: "white" }}>${(shoppingCart.get(id).item.price * shoppingCart.get(id).quantity).toFixed(2)} </ td >
                        </tr>
                    )
                })}

                <tfoot >
                    <tr>
                        <td />
                        <td />
                        <td style={{ color: "white", fontSize: "large", fontWeight: 600 }}>${totalPrice.toFixed(2)}</td>

                    </tr>
                </tfoot>

            </table>
        </div>



    );
}