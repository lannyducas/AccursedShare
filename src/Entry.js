import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


export default function Entry({loggedIn, data, setData, ageValues, setAgeValues, earningsArray, setEarningsArray, expendituresArray, setExpendituresArray}) {
    
// const {form, setForm} = useState({})
const [incomeVisible, setIncomeVisible] = useState(false);
const [expenditureVisible, setExpenditureVisible] = useState(false);
const [ageVisible, setAgeVisible] = useState(false);
const [age, setAge] = useState('')
const [lifeExpectancy, setLifeExpectancy] = useState('')
const [span, setSpan] = useState('')
const [earningsNow, setEarningsNow] = useState('')
const [earningsLater, setEarningsLater] = useState('')
const [expendituresNow, setExpendituresNow] = useState('')
const [expendituresLater, setExpendituresLater] = useState('')

const [cashFlowArray, setCashFlowArray] = useState ([])
const [NPV, setNPV] = useState("")

const [input, setInput] = useState({
  expenditure_now: "",
  expenditure_later: "",
  consumption_now: "",
  consumption_later: "",
  age: "",
  expectancy: ""
})

// let age;
// let lifeExpectancy;
// let span = (lifeExpectancy - age);


// let age = 0

const handleSubmit = (e) => {
  e.preventDefault();

    console.log(input)
    console.log(age)
    console.log(lifeExpectancy)
    console.log(span)
    console.log(earningsNow)
    console.log(earningsLater)
    console.log(expendituresNow)
    console.log(expendituresLater)

}
function handleCalculation(e){
  e.preventDefault();
  setSpan(lifeExpectancy-age)
  console.log(span)
}
function handleLoadChart(e){
  e.preventDefault();
  let spanholder=lifeExpectancy-age
  console.log(spanholder)
  average(earningsNow, earningsLater, expendituresNow, expendituresLater, spanholder)
  ageArray(age, lifeExpectancy)

}
function handleLoadNPV(e){
  e.preventDefault();
  NPVFinder(cashFlowArray)
  console.log(cashFlowArray)
  console.log(ageValues)
}
function handleLoadNPVCashflow(e){
  e.preventDefault();
  // NPV
  // ageValues
  // let interest = 1.05
  let debaucheryNPV = parseInt(NPV/span);
  console.log(debaucheryNPV)
  let debaucheryArray = [];
  // consume NPV/years left at t = 0 
  for(let i = 0; i < ageValues.length; i++){
    debaucheryArray.push(debaucheryNPV)
    debaucheryNPV = parseInt(debaucheryNPV * 1.05) 
  } 
  console.log(debaucheryArray)
  setData(debaucheryArray);
}
const handleChangeAge = (e) => {
  let value = e.target.value;
  setAge(value)
  console.log(age)
}
const handleChangeLife = (e) => {
  let value = e.target.value;
  setLifeExpectancy(value)
  console.log(lifeExpectancy)
}

const handleChangeIncomeNow = (e) => {
setEarningsNow(e.target.value)
console.log(earningsNow)
}
const handleChangeIncomeLater = (e) => {
setEarningsLater(e.target.value)
console.log(earningsLater)
}
const handleChangeExpenditureNow = (e) => {
setExpendituresNow(e.target.value)
console.log(expendituresNow)
}
const handleChangeExpenditureLater = (e) => {
setExpendituresLater(e.target.value)
console.log(expendituresLater)
}



function ageArray(a, e) {
  let holder = [];
  for (a; a <= e; a++) {
    holder.push(a)
  }
  setAgeValues(holder);
}

function average (earnings1, earnings2, expenditures1, expenditures2, range) {
  const earningsHolder = []
  const expendituresHolder = []
  const holder = []
  console.log(earnings2, earnings1)
  const avgEarningsDiff=(earnings2-earnings1)/range
  const avgExpendituresDiff=parseInt((expenditures2-expenditures1)/range)
  console.log(avgEarningsDiff)
  console.log(avgExpendituresDiff)
  let earningsPlaceholder = parseInt(earnings1)
  let expendituresPlaceholder = parseInt(expenditures1)
  console.log(earnings1)
  console.log(earnings2)
  console.log(expenditures1)
  console.log(expenditures2)
  console.log(range)
  for (let i = 0; i<range; i++){
    earningsHolder.push(parseInt(earningsPlaceholder+avgEarningsDiff))
    earningsPlaceholder = parseInt(earningsPlaceholder + avgEarningsDiff)
    
  }
  console.log(earningsHolder)
  setEarningsArray(earningsHolder)

  for (let i = 0; i<range; i++){
    expendituresHolder.push(parseInt(expendituresPlaceholder+avgExpendituresDiff))
    expendituresPlaceholder = parseInt(expendituresPlaceholder + avgExpendituresDiff)
    
  }
  console.log(expendituresHolder)
  setExpendituresArray(expendituresHolder)
  for (let i=0; i<expendituresHolder.length; i++) {
    holder.push(earningsHolder[i]-expendituresHolder[i])
  }
  console.log(holder)
  setCashFlowArray(holder)
}

function NPVFinder(cashflow){
  setNPV(parseInt(cashflow.reduce((acc, val, i) => acc + val / Math.pow((1.05), i), 0)))
  
  console.log(NPV)
}

// function NPVCashflow(val, span, patience){
//   let yrsLeft = parseInt(span)
//   const interest = 1.005
//   let cash = val/yrsLeft
//   let num = 1;
//   let den = 1; 
//   if (patience = 1){

//   }
//   else if (patience = 2){

//   }
//   else {

//   }
//   for(let i = 0; i < span; i++){
    
//   }
// }

// ageArray(age, expectancy)


  return (
    <div className="entry-page" >

    {loggedIn ? (
<span>
  <br />
      <Button 
          onClick={() => setAgeVisible(!ageVisible)} >
          Age
      </Button>
      <Button 
          onClick={() => setIncomeVisible(!incomeVisible)} >
          Earnings
      </Button>
      <Button 
          onClick={() => setExpenditureVisible(!expenditureVisible)} >
          Expenditures
      </Button>
      
      {ageVisible ? 
      <div className= "entry-age">
      <h2>How old are you?....and how much longer do you have left?</h2>
    <Form onSubmit={handleSubmit}>
      <input
        onChange= {handleChangeAge}
        type="integer"
        name="age"
        placeholder="Age"
        value={age}
      />
      <input
        onChange={handleChangeLife}
        type="integer"
        name="life-expectancy"
        placeholder="Life Expectancy"
        value={lifeExpectancy}
      />
      <Button type="submit">Add Age</Button>
    </Form>
    </div>
      : null}




      {incomeVisible ? 
      <div className= "entry-age">
      <h2>How much money do you make? ...and how much will you be making before you retire?</h2>
    <Form onSubmit={handleSubmit}>
      <input
        onChange= {handleChangeIncomeNow}
        type="integer"
        name="income-now"
        placeholder="Current Earnings"
        value={earningsNow}
      />
      <input
        onChange={handleChangeIncomeLater}
        type="integer"
        name="income-later"
        placeholder="Deathbed Earnings"
        value={earningsLater}
      />
      <Button type="submit">Add Earnings</Button>
    </Form>
    </div>
      : null}

    {expenditureVisible ? 
      <div className= "entry-age">
      <h2>How much do your needs cost? ...and how much will they cost when you die?</h2>
    <Form onSubmit={handleSubmit}>
      <input
        onChange= {handleChangeExpenditureNow}
        type="integer"
        name="expenditure-now"
        placeholder="Current Expenditure"
        value={expendituresNow}
      />
      <input
        onChange={handleChangeExpenditureLater}
        type="integer"
        name="expenditure-later"
        placeholder="Deathbed Expenditure"
        value={expendituresLater}
      />
      <Button type="submit">Add Expenditures</Button>
    </Form>
    </div>
      : null}      
 <div className= "calculation-button">
  <Form onSubmit={handleCalculation}>
    <Button type="submit">Calculate Values</Button>
  </Form>
 </div>
 <div className="load-button">
  <Form onSubmit={handleLoadChart}>
    <Button type="submit">Load Chart Data</Button>
  </Form>

 </div>
 <div className="npv-button">
  <Form onSubmit={handleLoadNPV}>
    <Button type="submit">Determine NPV</Button>
  </Form>

 </div>

 <div className="npv-cashflow-button">
  <Form onSubmit={handleLoadNPVCashflow}>
    <Button type="submit">Determine NPV Cashflow</Button>
  </Form>

 </div>
 </span>
    ) : 
    <div>
    <p>Please Log In</p> 
    </div> }
  </div>
  )
}
