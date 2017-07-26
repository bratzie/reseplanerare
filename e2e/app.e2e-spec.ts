import { ReseplanerarePage } from './app.po';

describe('reseplanerare App', () => {
  let page: ReseplanerarePage;

  beforeEach(() => {
    page = new ReseplanerarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
