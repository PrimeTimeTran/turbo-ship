Mint DB Design

Overview
  Net Worth
  Checking & Savings
  Credit Cards
  Investments
  Loans
  Property

Budget
  Begin
  End

  sumGoalSpend
  sumGoalInc

  sumSpend
  sumInc

  Gas & Fuel
  Alcohol & Bars
  Fast Food
  Groceries
  Restaurants

Accounts
  Type
  Balance
  Category


Transactions
  Date
  Description
  Category
  Amount


Product
  companyUrl string
  type: enum
    creditCards, personalLoans, investments, banking, studentLoans, insurance
  title string
  imageUrl string
  linkForm string
  linkTerms string
  linkDisclosure string
  description text
  meta obj
    <!-- Credit cards -->
    annualFee, miles, aprRange

    <!-- Investmnets -->
    welcomeOffer, minInvestment, fees, tradingCosts, accountFeeds, openMin,

    <!-- Banking -->
    APY, openMin, fees, termRange, bonus,

    <!-- Insurance -->
  insuranceType
    auto, home, life, renters, pet
  linkInsuranceQuote

