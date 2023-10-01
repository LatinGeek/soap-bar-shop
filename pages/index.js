import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ShoppingListItem from '../components/ShoppingListItem'
import getShoppingItems from '../services/getShoppingItems'
import { useEffect, useState } from 'react'
import FontSizeSelector from '../components/FontSizeSelector'
import ReceiptViewer from '../components/ReceiptViewer'

const MAX_FONT_SIZE = 30;
const MIN_FONT_SIZE = 10;
const FONT_SIZE_STEP = 1;
const INITIAL_ITEM_QUANTITY = 1;

export default function Home() {
  const [fontSize, setFontSize] = useState(14)
  //Retrieve shopping items from service.
  const [shoppingCart, updateShoppingCart] = useState(new Map());
  const [shoppingItems, updateShoppingItems] = useState(new Map(getShoppingItems().map(item => [item.id, item])));



  function handleShoppingCartUpdate(id, quantity) {
    updateShoppingCart(new Map(shoppingCart.set(id, { quantity })))
  }

  function handleShoppingItemUpdate(item) {
    updateShoppingItems(new Map(shoppingItems.set(item.id, item)))
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
        {[...shoppingItems.keys()].map(id => (
          <ShoppingListItem
            titleFontSize={fontSize}
            key={id}
            id={id}
            title={shoppingItems.get(id).title}
            description={shoppingItems.get(id).description}
            price={shoppingItems.get(id).price}
            thumbnailImg={shoppingItems.get(id).thumbnailImg}
            initialQuantity={INITIAL_ITEM_QUANTITY}
            handleShoppingCartUpdate={handleShoppingCartUpdate}
            handleShoppingItemUpdate={handleShoppingItemUpdate}
          />

        ))}
      </div>

      <ReceiptViewer shoppingCart={shoppingCart} shoppingItems={shoppingItems} />

    </div>
  )
}
