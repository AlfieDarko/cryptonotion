import React, { useEffect, useState } from 'react'

/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head'
import { cryptoscript } from '../../../../../../../cryptoscript'
import { useRouter } from 'next/router'

export default function Widget() {
  const router = useRouter()

  const { pair, exchange, width, theme, isTransparent } = router.query
  const isTransparentTrue = isTransparent === 'true'

  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('id', 'scripty')

    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'

    script.async = true
    script.innerHTML = JSON.stringify({
      symbol: exchange + ':' + pair,
      width: width,
      colorTheme: theme,
      isTransparent: isTransparentTrue,
      locale: 'en',
    })
    const current = document.getElementById('myContainer')

    if (current.children.length > 1) {
      current.replaceChild(script, current.lastChild)
    }
    current.appendChild(script)
  }, [pair, exchange, width, theme, isTransparentTrue])

  return (
    <>
      <div id='myContainer'>
        <div className='tradingview-widget-container'>
          <div className='tradingview-widget-container__widget' />
        </div>
      </div>
    </>
  )
}
