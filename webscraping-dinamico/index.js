const pup = require('puppeteer');


const url = "https://www.mercadolivre.com.br/";
const searchFor = "macbook";

(async () => {
  const browser = await pup.launch({headless: false});
  const page = await browser.newPage();
  console.log('Iniciel!');

  await page.goto(url);
  console.log('Fui pora url');

  await page.waitForSelector('#cb1-edit');

  await page.type('#cb1-edit', searchFor);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.nav-icon-search')
  ]);

  

  await page.waitForTimeout(5000);  

  await browser.close();
})();