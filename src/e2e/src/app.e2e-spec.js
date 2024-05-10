
it('should display welcome message', () => {
  page.navigateTo();
  // console.log(page.getTitleText());
  expect(page.getTitleText()).toEqual('BUTTON');
});