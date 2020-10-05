import React, { useState } from 'react'
function fixer(x) {
  return Number.parseFloat(x).toFixed(2)
}

function Converter() {
  const [amount, setAmount] = useState(0.0)

  return (
    <main>
      <header>
        <div>Currency Converter!</div>
      </header>
      <body>
        <div className="currency">
          Currency:
          <div className="converterinput">
            USD $:
            <input
              type="text"
              onChange={(text) => setAmount(parseFloat(text.target.value))}
            ></input>
          </div>
          <ul className="converter">
            <li> "GBP"(* 0.770937):£ {fixer(amount * 0.770937)}</li>
            <li>"HKD"(* 7.75016):HK$ {fixer(amount * 7.75016)}</li>
            <li>"IDR"(* 14767.55)):RP {fixer(amount * 14767.55)}</li>
            <li>"ILS"(* 3.40733):₪ {fixer(amount * 3.40733)}</li>
            <li>"DKK"(* 6.31155):Kr {fixer(amount * 6.31155)}</li>
            <li>"INR"(* 73.1205):₹ {fixer(amount * 73.1205)}</li>
            <li>"CHF"(* 0.915506):Fr. {fixer(amount * 0.915506)}</li>
            <li>"MXN"(* 21.3852):Mex$ {fixer(amount * 21.3852)}</li>
            <li>"CZK"(* 22.989):Kč {fixer(amount * 22.989)}</li>
            <li>"SGD"(* 55.3246):S$ {fixer(amount * 55.3246)}</li>
            <li>"THB"(* 31.2882):฿ {fixer(amount * 31.2882)}</li>
            <li>"HRK"(* 6.41775):kn {fixer(amount * 6.41775)}</li>
            <li>"MYR"(* 4.15285):RM {fixer(amount * 4.15285)}</li>
            <li>"NOK"(* 9.22101):kr {fixer(amount * 9.22101)}</li>
            <li>"CNY"(* 6.79114):¥ {fixer(amount * 6.79114)}</li>
            <li>"BGN"(* 1.65918):Лв. {fixer(amount * 1.65918)}</li>
            <li>"PHP"(* 48.3874):₱ {fixer(amount * 48.3874)}</li>
            <li>"SEK"(* 8.88762):kr {fixer(amount * 8.88762)}</li>
            <li>"PLN"(* 3.81059):zł {fixer(amount * 3.81059)}</li>
            <li>"ZAR"(* 16.5681):R {fixer(amount * 16.5681)}</li>
            <li>"CAD"(* 1.32651):C$ {fixer(amount * 1.32651)}</li>
            <li>"ISK"(* 137.983):Íkr {fixer(amount * 137.983)}</li>
            <li>"BRL"(* 5.5904):R$ {fixer(amount * 5.5904)}</li>
            <li>"RON"(* 4.13628):lie {fixer(amount * 4.13628)}</li>
            <li>"NZD"(* 1.50556):$ {fixer(amount * 1.50556)}</li>
            <li>"TRY"(* 7.7622):₺ {fixer(amount * 7.7622)}</li>
            <li>"JPY"(* 105.761):¥ {fixer(amount * 105.761)}</li>
            <li>"RUB"(* 78.1936):₽ {fixer(amount * 78.1936)}</li>
            <li>"KRW"(* 1157.7):₩ {fixer(amount * 1157.7)}</li>
            <li>"HUF"(* 305.767):Ft {fixer(amount * 305.767)}</li>
            <li>"AUD"(* 305.767):$ {fixer(amount * 305.767)}</li>
            <li>"EUR"(* 0.848319):€ {fixer(amount * 0.848319)}</li>
          </ul>
        </div>
      </body>
      <footer>MONEY!</footer>
    </main>
  )
}
function App() {
  return <Converter />
}

export default App
