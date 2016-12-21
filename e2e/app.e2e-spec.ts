import { TallangPage } from './app.po';

describe('tallang App', function() {
  let page: TallangPage;

  beforeEach(() => {
    page = new TallangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
