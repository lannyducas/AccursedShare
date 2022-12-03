import React from 'react';

export default function Home() {
  return (
    <div className="home-paragraph">
      {/* Completely unneccessary welcome img, but why not make this at least a little fun */}
      <img
        alt="home-pic"
        className="home-pic"
        src="https://supervert.com/translations/georges-bataille/images/georges-bataille.jpg"
      />
      <br />
      <p>This is Georges Bataille, he is a famous French philosopher/economist<br>
      </br>
      He is well known for his work, "The Accursed Share", which states that the general economy's health is dependent on <em>glorious expenditure</em>. <br>
      </br>
      Which means spending energy/money on completely unnecesary things! This includes sex, drugs, murder, literal burning of money.<br>
      </br>
      While this app cannot condone/measure the value of non-monetary expenditure, it can help you calculate how much money you should spend every year to maximize your total lifetime expenditure!<br>
      </br>
      To get started, enter in your age, life expectancy, current earnings, expected earnings, current expenditures, and expected expenditures.
      </p>
    </div>
  );
}