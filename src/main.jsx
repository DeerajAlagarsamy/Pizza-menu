import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,

    
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const headstyle = { color: "red", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={headstyle}>Fast React pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Six creative dishes to choose from. All
            are homemade, organic and delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
            {/* <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          photoName="pizzas/margherita.jpg"
          price={10}
          soldOut="false"
          />
          <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          photoName="pizzas/funghi.jpg"
          soldOut="false"
        /> */}
          </ul>
        </>
      ) : (
        <p>We're still working on the menu. Please come back later</p>
      )}
    </main>
  );
}
function Pizza({ pizzaobj }) {
  // console.log(pizzaobj.soldOut);
  // let i = pizzaobj.soldOut;
  // let q = false;
  // let o = i == q ? "" : <p style={{ color: "red" }}>**Sold out**</p>;
  // console.log(o);

  // if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        {pizzaobj.soldOut ? (
          <span style={{ color: "red" }}> "SOLD OUT"</span>
        ) : (
          <span style={{ color: "green" }}>${pizzaobj.price}</span>
        )}
        {/* <p>{o}</p> */}
      </div>
    </li>
  );
}

function StartTime({ closeHour }) {
  let time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
    });
    setTime(time);
  };
  setInterval(UpdateTime);
  // setTimeout(StartTime, 1000);
  return (
    <p>
      {ctime} - We're open till {closeHour}:00:00
    </p>
  );
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function Order({ closeHour }) {
  return (
    <>
      <StartTime closeHour={closeHour} />
      <button type="button" className="btn">
        Order
      </button>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const time = new Date().toLocaleTimeString();
  let openhour = 9;
  let closehour = 24;
  let isOpen = hour >= openhour && hour < closehour;
  let shopopcl = null;
  console.log(hour, isOpen);
  // let shopopcl =
  //   hour >= openhour && hour <= closehour
  //     ? alert("We're currently open")
  //     : alert("Sorry, We're currently closed");

  return (
    <footer className="footer">
      <div className="order">
        {/* <StartTime />

        {isOpen && (
          <button type="button" className="btn">
            Order
          </button>
        )} */}
        {
          (shopopcl =
            hour >= openhour && hour < closehour ? (
              <Order closeHour={closehour} />
            ) : (
              <p>Sorry, we're closed now. We will open at {openhour}:00:00</p>
            ))
        }
      </div>
    </footer>
  );
}

const rele = ReactDOM.createRoot(document.getElementById("root"));
rele.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
