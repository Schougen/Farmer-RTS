const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

async function main(){
  const htmlPath = path.join(process.cwd(), 'farming_rts_v1.html');
  if(!fs.existsSync(htmlPath)) throw new Error('Cannot find farming_rts_v1.html');

  const browser = await chromium.launch({ headless:true });
  const page = await browser.newPage({ viewport:{width:1280,height:720} });
  page.on('console', msg => console.log(`[page] ${msg.type()}: ${msg.text()}`));

  const url = 'file://' + htmlPath;
  await page.goto(url);
  await page.waitForFunction(() => window.testStatus && window.testStatus.done === true, { timeout: 15000 });
  const status = await page.evaluate(() => window.testStatus);
  await browser.close();

  if(!status || !status.ok){
    const msg = status && status.errors && status.errors.length ? status.errors.join('; ') : 'Unknown failure';
    throw new Error(`In-game tests failed: ${msg}`);
  }
  console.log('In-game tests passed');
}

main().catch(err=>{ console.error(err); process.exit(1); });
