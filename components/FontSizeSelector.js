import Image from 'next/image';
import styles from '../styles/ShoppingListItem.module.css'
import PriceSection from './PriceSection';
import { useRef, useState } from 'react';

export default function FontSizeSelector({ title, description, price, thumbnailImg, titleFontSize, setFontSize }) {



    return (
        <div>
            <Image alt="Font size plus button" src="/text-size-minus.svg" width={30} height={30} />
            <input type="range" min="5" max="30" step={1} onChange={e => setFontSize(e.target.valueAsNumber)} />

            <Image alt="Font size minus button" src="/text-size-plus.svg" width={30} height={30} />
        </div>
    )
}