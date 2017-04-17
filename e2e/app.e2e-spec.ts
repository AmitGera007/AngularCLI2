import { QuickStartAngularApp1Page } from './app.po';

describe('quick-start-angular-app1 App', () => {
  let page: QuickStartAngularApp1Page;

  beforeEach(() => {
    page = new QuickStartAngularApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
