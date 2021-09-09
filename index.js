const fs = require('fs');
const path = require('path');
const axios = require('axios');
const bluebird = require('bluebird');

const axiosInstance = axios.create({
    headers: {
        "user-agent": "GoogleBot",
    }
})

const urls = fs.readFileSync(path.resolve('./urls'), 'utf-8')
    .split('\n')
    .filter(Boolean);

(async () => {
    console.info('🤖 - Start processing');
    await bluebird.map(urls, async (url) => {
        try {
            await axiosInstance.get(url);
            console.info(`✅ - ${url}`);
        } catch (e) {
            console.error(`❌ - ${url}`)
        }
    }, {concurrency: 15});
})()
    .then(() => console.info(`👏 - All URLs have been called.`))
    .catch(console.error);




