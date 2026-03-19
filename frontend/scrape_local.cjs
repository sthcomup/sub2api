const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://aicode.cat/m/tutorial', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));

  const items = await page.evaluate(() => {
    let el = document.querySelector('.el-menu') || document.body;
    return el.innerText;
  });

  console.log('--- MENU ---');
  console.log(items);

  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a'))
      .map(a => ({ href: a.href, text: a.innerText }))
      .filter(l => l.href && l.href.includes('/m/tutorial') && l.text.trim().length > 0);
  });

  console.log('\n--- FOUND LINKS ---');
  console.log(links.slice(0, 10));

  let results = {};
  let uniqueLinks = [...new Set(links.map(l => l.href))].slice(0, 4);

  for (let url of uniqueLinks) {
     await page.goto(url, { waitUntil: 'networkidle0' });
     await new Promise(r => setTimeout(r, 1000));
     let text = await page.evaluate(() => {
        let content = document.querySelector('.el-main') || document.querySelector('main') || document.body;
        return content.innerText;
     });
     results[url] = !!text ? text : 'NO CONTENT';
  }
  
  console.log('\n--- PAGE CONTENTS ---');
  for (const [url, txt] of Object.entries(results)) {
     console.log('URL: ' + url + '\n');
     console.log(txt.substring(0, 2000) + '\n------------\n');
  }

  await browser.close();
})();
