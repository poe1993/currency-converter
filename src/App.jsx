import React, { useEffect, useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import axios from 'axios'

function Converter() {
  const [amount, setAmount] = useState(0.0)
  const [currency, setCurrency] = useState([])

  function fixer(x) {
    return Number.parseFloat(x).toFixed(2)
  }

  function loadCurrencies() {
    axios('https://api.ratesapi.io/api/latest?base=USD').then((response) => {
      setCurrency([response.data.rates])
    })
  }

  useEffect(() => {
    loadCurrencies()
  }, [])

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
              className="convertertextbox"
              onChange={(text) => setAmount(parseFloat(text.target.value))}
            ></input>
          </div>
          <ul>
            {currency.map((rate) => (
              <li key={rate}>
                GBP(* {rate.GBP}): {fixer(amount * rate.GBP)}
                <li>
                  HUF(* {rate.HUF}): {fixer(amount * rate.HUF)}
                </li>
                <li>
                  HKD(* {rate.HKD}): {fixer(amount * rate.HKD)}
                </li>
                <li>
                  IDR(* {rate.IDR}): {fixer(amount * rate.IDR)}
                </li>
                <li>
                  ILS(* {rate.ILS}): {fixer(amount * rate.ILS)}
                </li>
                <li>
                  DKK(* {rate.DKK}): {fixer(amount * rate.DKK)}
                </li>
                <li>
                  INR(* {rate.INR}): {fixer(amount * rate.INR)}
                </li>
                <li>
                  CHF(* {rate.CHF}): {fixer(amount * rate.CHF)}
                </li>
                <li>
                  MXN(* {rate.MXN}): {fixer(amount * rate.MXN)}
                </li>
                <li>
                  CZK(* {rate.CZK}): {fixer(amount * rate.CZK)}
                </li>
                <li>
                  SGD(* {rate.SGD}): {fixer(amount * rate.SGD)}
                </li>
                <li>
                  THB(* {rate.THB}): {fixer(amount * rate.THB)}
                </li>
                <li>
                  HRK(* {rate.HRK}): {fixer(amount * rate.HRK)}
                </li>
                <li>
                  EUR(* {rate.EUR}): {fixer(amount * rate.EUR)}
                </li>
                <li>
                  MYR(* {rate.MYR}): {fixer(amount * rate.MYR)}
                </li>
                <li>
                  NOK(* {rate.NOK}): {fixer(amount * rate.NOK)}
                </li>
                <li>
                  CNY(* {rate.CNY}): {fixer(amount * rate.CNY)}
                </li>
                <li>
                  BGN(* {rate.BGN}): {fixer(amount * rate.BGN)}
                </li>
                <li>
                  PHP(* {rate.PHP}): {fixer(amount * rate.PHP)}
                </li>
                <li>
                  PLN(* {rate.PLN}): {fixer(amount * rate.PLN)}
                </li>
                <li>
                  ZAR(* {rate.ZAR}): {fixer(amount * rate.ZAR)}
                </li>
                <li>
                  CAD(* {rate.CAD}): {fixer(amount * rate.CAD)}
                </li>
                <li>
                  ISK(* {rate.ISK}): {fixer(amount * rate.ISK)}
                </li>
                <li>
                  BRL(* {rate.BRL}): {fixer(amount * rate.BRL)}
                </li>
                <li>
                  RON(* {rate.RON}): {fixer(amount * rate.RON)}
                </li>
                <li>
                  NZD(* {rate.NZD}): {fixer(amount * rate.NZD)}
                </li>
                <li>
                  TRY(* {rate.TRY}): {fixer(amount * rate.TRY)}
                </li>
                <li>
                  JPY(* {rate.JPY}): {fixer(amount * rate.JPY)}
                </li>
                <li>
                  RUB(* {rate.RUB}): {fixer(amount * rate.RUB)}
                </li>
                <li>
                  KRW(* {rate.KRW}): {fixer(amount * rate.KRW)}
                </li>
                <li>
                  AUD(* {rate.AUD}): {fixer(amount * rate.AUD)}
                </li>
                <li>
                  SEK(* {rate.SEK}): {fixer(amount * rate.SEK)}
                </li>
              </li>
            ))}
          </ul>
        </div>
      </body>
      <footer>SUNCOAST DEVELOPER'S GUILD</footer>
    </main>
  )
}
function App() {
  return <Converter />
}

export default App
