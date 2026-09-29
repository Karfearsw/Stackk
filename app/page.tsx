"use client";

import { useState } from "react";
import {
  ArrowUpRight, Bot, CreditCard, Home, LockKeyhole, Menu, ScanLine,
  Send, Sparkles, Wallet, X
} from "lucide-react";

const nav = [
  ["Overview", Home],
  ["Credit Catalyst", Sparkles],
  ["K Pay", Send],
  ["Kami Card", CreditCard],
] as const;

const transactions = [
  ["Whole Foods", "Groceries", "-$84.32", "Today"],
  ["Spotify", "Subscription", "-$11.99", "Yesterday"],
  ["K Pay Transfer", "Received", "+$250.00", "Sep 27"],
];

export default function HomePage() {
  const [active, setActive] = useState("Overview");
  const [menu, setMenu] = useState(false);

  return (
    <main className="app">
      <aside className={menu ? "sidebar open" : "sidebar"}>
        <div className="brand"><div className="brand-mark">K</div><span>KAMI</span></div>
        <nav>
          {nav.map(([label, Icon]) => (
            <button key={label} className={active === label ? "nav active" : "nav"} onClick={() => { setActive(label); setMenu(false); }}>
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="secure"><LockKeyhole size={15}/> Bank-grade security</div>
          <button className="profile">BJ <span>Benji</span></button>
        </div>
      </aside>

      {menu && <button className="scrim" onClick={() => setMenu(false)} aria-label="Close menu" />}

      <section className="content">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenu(true)}><Menu /></button>
          <div>
            <p className="eyebrow">KAMI FINANCIAL OS</p>
            <h1>{active}</h1>
          </div>
          <button className="avatar">BJ</button>
        </header>

        {active === "Overview" && <Overview />}
        {active === "Credit Catalyst" && <Credit />}
        {active === "K Pay" && <KPay />}
        {active === "Kami Card" && <Card />}
      </section>
    </main>
  );
}

function Overview() {
  return <div className="stack">
    <section className="hero-grid">
      <div className="balance card-panel">
        <div className="panel-head"><span>Total available</span><Wallet size={18}/></div>
        <div className="money">$8,420.68</div>
        <div className="positive">+$1,240.22 this month</div>
        <div className="balance-line"><span>Cash</span><b>$6,920.68</b></div>
        <div className="balance-line"><span>K Pay</span><b>$1,500.00</b></div>
      </div>
      <div className="credit-score card-panel">
        <div className="panel-head"><span>Credit health</span><Sparkles size={18}/></div>
        <div className="score">742 <small>/ 850</small></div>
        <div className="score-ring"><div>GOOD</div></div>
        <p>AI detected 3 actions that could strengthen your profile.</p>
      </div>
    </section>

    <section className="ai-banner">
      <div className="ai-icon"><Bot size={21}/></div>
      <div><b>Kami AI</b><p>Your cash flow is healthy. You have $420 in recurring bills due this week.</p></div>
      <button className="outline">Ask Kami <ArrowUpRight size={15}/></button>
    </section>

    <section className="card-panel">
      <div className="section-title"><div><span className="eyebrow">ACTIVITY</span><h2>Recent transactions</h2></div><button className="text-btn">View all</button></div>
      {transactions.map(([name, type, amount, date]) => <div className="transaction" key={name}>
        <div className="tx-icon">{name === "K Pay Transfer" ? <Send size={16}/> : <Wallet size={16}/>}</div>
        <div className="tx-name"><b>{name}</b><span>{type}</span></div><span className="tx-date">{date}</span><b className={amount.startsWith("+") ? "amount plus" : "amount"}>{amount}</b>
      </div>)}
    </section>
  </div>;
}

function Credit() {
  return <div className="stack">
    <section className="credit-hero">
      <div><span className="eyebrow">CREDIT CATALYST AI</span><h2>Turn your credit data into a plan.</h2><p>Kami analyzes your connected credit profile and turns the data into understandable actions.</p></div>
      <div className="big-score">742<span>GOOD</span></div>
    </section>
    <div className="three-grid">
      {[
        ["Utilization","18%","Low"],
        ["Payment history","100%","On time"],
        ["Open accounts","9","Active"],
      ].map(([a,b,c]) => <div className="metric card-panel" key={a}><span>{a}</span><strong>{b}</strong><small>{c}</small></div>)}
    </div>
    <section className="card-panel">
      <div className="section-title"><div><span className="eyebrow">AI ACTION PLAN</span><h2>Next moves</h2></div></div>
      {["Review 2 accounts with reported balance changes","Keep utilization below your personal target","Schedule autopay for the next statement cycle"].map((x,i) =>
        <div className="action" key={x}><span>{i+1}</span><div><b>{x}</b><small>Recommended by Kami AI</small></div><button className="outline">Review</button></div>
      )}
    </section>
  </div>;
}

function KPay() {
  return <div className="stack">
    <section className="kpay-hero">
      <div className="k-symbol">K</div><div><span className="eyebrow">K PAY</span><h2>One payment layer. Your financial world.</h2><p>Choose how money moves without juggling separate payment experiences.</p></div>
      <button className="primary"><Send size={16}/> Send money</button>
    </section>
    <div className="three-grid">
      {["Kami Card","Connected checking","Savings"].map((x,i) => <div className="funding card-panel" key={x}><span>Funding source</span><b>{x}</b><small>{i === 0 ? "•••• 2841" : i === 1 ? "•••• 9012" : "•••• 4408"}</small></div>)}
    </div>
    <section className="card-panel checkout">
      <div><span className="eyebrow">QUICK PAY</span><h2>Ready to pay</h2><p>Scan a supported merchant QR or choose a connected source.</p></div>
      <div className="scan"><ScanLine size={58}/><span>Scan to pay</span></div>
    </section>
  </div>;
}

function Card() {
  return <div className="stack">
    <section className="card-showcase">
      <div className="kami-card">
        <div className="card-logo"><div className="mini-k">K</div><b>KAMI</b></div>
        <div className="card-chip"><div/><div/></div>
        <div className="contactless">)))</div>
        <div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 2841</div>
        <div className="card-footer"><span>BENJI J.</span><span>VISA DEBIT</span></div>
      </div>
      <div><span className="eyebrow">KAMI CARD</span><h2>Your financial control surface.</h2><p>Virtual and physical card controls connected to the Kami financial OS.</p><div className="card-actions"><button className="primary"><CreditCard size={16}/> Manage card</button><button className="outline">Freeze card</button></div></div>
    </section>
    <div className="three-grid">
      {["Tap to pay","Instant alerts","Smart controls"].map(x => <div className="metric card-panel" key={x}><CreditCard size={18}/><b>{x}</b><small>Available in your card controls</small></div>)}
    </div>
  </div>;
}
