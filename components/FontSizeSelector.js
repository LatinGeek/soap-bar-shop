import Image from 'next/image';
import styles from '../styles/fontSizeSelector.module.css'
import PriceSection from './PriceSection';
import { useRef, useState } from 'react';

export default function FontSizeSelector({ minFontSize, maxFontSize, step, setFontSize }) {



    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.tableCell}>
                            <Image alt="Font size plus button" src="/text-size-minus.svg" width={30} height={30} />
                        </td>
                        <td className={styles.tableCell}>
                            <input type="range" min={minFontSize} max={maxFontSize} step={step} onChange={e => setFontSize(e.target.valueAsNumber)} />
                        </td>
                        <td className={styles.tableCell}>
                            <Image alt="Font size minus button" src="/text-size-plus.svg" width={30} height={30} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}