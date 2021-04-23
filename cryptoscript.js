/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const cryptoscript = ({
  pair,
  exchange,
  width = 350,
  theme,
  isTransparent = false,
}) => {
  return `<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright">
  <a href="https://www.tradingview.com/symbols/${pair}/?exchange=${exchange}" rel="noopener" target="_blank">
    <span class="blue-text">${pair} Rates</span>
  </a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
    {
      "symbol": "${exchange}:${pair}",
      "width": ${width},
      "colorTheme": "${theme}",
      "isTransparent": ${isTransparent},
      "locale": "en"
    }
  </script>
</div>`
}
