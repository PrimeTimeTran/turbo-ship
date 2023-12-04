const urlPlaceholderAvatar =
    'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg';

// ups means positive transfers/transactions.
// Up in that their account balance should go up
final ups = ['salary', 'interest', 'dividends'];

enum BudgetItem { expense, income }

enum Calendar { day, week, month, year }

enum Category { home, transportation, daily, entertainment, health, vacation }

enum DailyItems {
  groceries,
  childCare,
  diningOut,
  clothing,
  cleaning,
  salonOrBarber,
  hygiene,
  petSupplies,
  other,
}

enum EntertainmentItems {
  hobbies,
  moviesOrSubscriptions,
  events,
  sports,
  outdoorRecreation,
  alcohol,
  other,
}

enum HealthItems {
  healthInsurance,
  doctorsOrDentistsVisits,
  medicineOrPrescriptions,
  gym,
  supplements,
  lifeInsurance,
  veterinarian,
  other,
}

enum HomeItems {
  homeOrRent,
  homeInsurance,
  electricity,
  gasOrOil,
  utilities,
  phone,
  cableOrSatellite,
  internet,
  furnishingOrAppliances,
  lawnOrGarden,
  maintenanceOrImprovements,
  other,
}

enum IncomeTypes { salary, dividend, commission, partnership, capitalGains }

enum Period { day, week, month, threeMonth, ytd, oneYear, all }

enum TransportItems {
  carPayments,
  carInsurance,
  fuel,
  parking,
  publicTransportation,
  repairOrMaintenance,
  registrationOrLicense,
  other,
}

enum VacationItems {
  transport,
  accommodations,
  food,
  souvenirs,
  rentalVehicles,
  petBoarding,
  other,
}
