import { NgJaguerPage } from './app.po';

describe('ng-jaguer App', function() {
  let page: NgJaguerPage;

  beforeEach(() => {
    page = new NgJaguerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
