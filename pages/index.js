import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ShoppingListItem from '../components/ShoppingListItem'
import getShoppingItems from '../services/getShoppingItems'
import { useState } from 'react'
import FontSizeSelector from '../components/FontSizeSelector'
import ReceiptViewer from '../components/ReceiptViewer'

const MAX_FONT_SIZE = 30;
const MIN_FONT_SIZE = 10;
const FONT_SIZE_STEP = 1;

export default function Home() {
  const [fontSize, setFontSize] = useState(14)
  const [shoppingCart, updateShoppingCart] = useState(new Map());

  function handleShoppingCartUpdate(item, quantity) {
    updateShoppingCart(new Map(shoppingCart.set(item.id, { item, quantity })))
  }

  return (
    <div >
      <Head>
        <title>Soap Bar Shop - Technical Assessment</title>
        <meta name="description" content="Soap Bar Shop - Technical assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FontSizeSelector
        minFontSize={MIN_FONT_SIZE}
        maxFontSize={MAX_FONT_SIZE}
        step={FONT_SIZE_STEP}
        setFontSize={setFontSize} />

      <div className={styles.shoppingListItemContainer}>
        {getShoppingItems().map(item => (
          <ShoppingListItem
            titleFontSize={fontSize}
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            thumbnailImg={item.thumbnailImg}
            handleShoppingCartUpdate={handleShoppingCartUpdate}
          />

        ))}
      </div>

      <ReceiptViewer shoppingCart={shoppingCart} />

    </div>
  )
}
