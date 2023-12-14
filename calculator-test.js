
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10043, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});
 
it('should handle abnormally high interest rates', () => {
  const values = {amount: 1000, years: 40, rate: 99};

  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

it('should handle wishfully low interest rates', () => {
  const values = {amount: 15000, years: 7, rate: 1.5};

  expect(calculateMonthlyPayment(values)).toEqual('188.22');
});

it('should handle outrageous values', () => {
  const values = {amount: 100000, years: 73, rate: 55};

  expect(calculateMonthlyPayment(values)).toEqual('4583.33');
});
