/* eslint-disable react/no-danger */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cypto Notion Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='tradingview-widget-container'>
        <div className='tradingview-widget-container__widget' />
        <div className='tradingview-widget-copyright'>
          <a
            href='https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP'
            rel='noopener noreferrer'
            target='_blank'>
            <span className='blue-text'>BTCUSD Rates</span>
          </a>{' '}
          by TradingView
        </div>
        <script
          type='text/javascript'
          src='https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
          async
          dangerouslySetInnerHTML={{
            __html: `{
  "symbol": "BITSTAMP:BTCUSD",
  "width": 350,
  "colorTheme": "light",
  "isTransparent": true,
  "locale": "en"
}`,
          }}
        />
      </div>
      <footer className={styles.footer}>Waterwhipped Labs</footer>
    </div>
  )
}

// ['BINANCE', 'KUCOIN', 'FTX', 'GEMINI', 'BYBIT', 'BITMEX']
