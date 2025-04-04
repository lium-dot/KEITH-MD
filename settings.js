/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61VyY7rRBT9l9omj/Y8RGoJD3GcxM7gzEEsynbFcex4qnIc5ym7x/YtkJBA4gcQC1iy4GfoH+AXkDvddEvAo5HwqmTZ5557z7mn3oMkDTEaohp03oOsCE+QoOZI6gyBDlDL3Q4VoA18SCDogNDaOvFpvLMma9bNBoomV6NlgmtnZVUHo+T0rl3B7XCmR8E9uLZBVrpx6H0CsE/l+mWZ02VB8rtZ5eZlsun1zYU6Oyzj0kb9eppMsnWiKd49uDaIMCzCJOhme3REBYyHqJ7AsHgbfWRH0difDzyjlIfLZRzFhzSzLYedK57RF50jPlOJf67cdfU2+gfS23jWYbZOe37lS8NWdEHmoJt5QWGO11bo1tPlylXEc4Rv9HEYJMjv+yghIanfPHdKHe5NW9jmgreJMt/glqE2PFWX8ba/O6R8S3TG0sUx7k69N859O4os7xJVl10Is9MhYM9CPqi356pOfJ1RLrzS2/rxUsl17zXxSfHslei/zL3S6Xpd5Zrm2UjBPOoG+1VPnrWcLR7bPanUcmnOVXv6cIzeRn92HrhBvVTTbN1NCuNuzx/Uu8waiSetFfKV7gqmN2LCeHNRXuhDUhafYjm2CBYteWRi3uHihRZEOmOzjnMMRr1etvYz7S6wUnzMe3W/dtHWDwrWXvA1zagbc9qie2dnYQutGO2whzd4QAxih9P7x44iVPd90KGvbVCgIMSkgCRMk+YdS7cB9E8z5BWIPE4X5KbOOpa4GmQFTc1Hld4tGYZTzy3NES9FgQ8zbe7Ko2xJNvegDbIi9RDGyDdDTNKithHGMEAYdL54FKrpuUDHlKBB6IMOYHhO5CWOY2ma/hx/Vu0hwTDLPksQAW2wK9KjjUCHFCVqg8cfFJVRuwptqLLB0IZBMQyrqKxk6DLLMrSgNh0eb0Xn4RFhAo8Z6NAix4oyI3H0tf3/8GAZWVFVXpYoRuRYjaO6ssBTlKFyPEVJjP4vPJjrl22QoDO52fh5+LuwwGSRlFmcQv/Z438q43lpmZBZnXhac0AF6Lx6jQgJkwA3nZUJLLx9eEJa0wfo7GCM0bUNfHQKPdTggUKebsuRXM9UQRdH60MtBuNl0Ci4T5PbJwK1Y0SJk95REse94yTJeydLvvvOlQSX4UWP5zwKNOO4JUjzzz8aejVaMNvpBa3y7oC10jFNufECTkzR7T6a8uZEVCD/ecou9KIym6cRSj6BO6m15Niz7J5J0at6PNRdzesbRyh40ivcm8NB5/1Lamup3+Dpgq5xG4cDjVpNnb+4oSOJfzVEApuvwcO3X/328aeHb3/9/ZePDx++fjl8/8PDh58fvv/x4cM3D9/92BB5Uqkp4SMCwxiDDtAmB5beK9OCrJVTtdmoM0UZKkqzSM+qPofFbRvrk3Ax7K1zMWXdGfTZXHNZobtCprGHuefb44NLSQsUecH070Ca+F7jlVi2DkYM6e70fBiSoRwakrXtW8NV2o3RVrKFtViG7N7mjcWGp7eVcmEGfZ72RmPXOg1Wp8sC2mOZ0SO4rUIjn2vKfVPt5q7XxfaQWa0uabCzh/VCjfhyuGYnlGLyDmONqyoZ9VVnlA94Dku9Cp925yVbj5yQD+CdNFHzWVBIvFYrXTQR0qgvboJyPDs8xdhjjMZP11f4lDA3L+5C9HgbPKn0r2q+rAV1bb/CeLpf/sF6qle08HneW3jnuyk1m42E4Ci39kayP29WeWLO9ZSRJ4aZmf0uuDb7nsWQ7NLiCDoAJn6Rhj5ogxhiorxs9t+EBUu1wbFWsmxGIHkOBKA0z2B6Btc/AE1yZiI6CQAA';

const prefix = process.env.PREFIX || '*';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫';
const packname = process.env.PACKNAME || '★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫';
const dev = process.env.OWNER_NUMBER || '254758443111';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '☣☠️🅐︎🅣︎🅞︎🅜︎🅘︎🅒︎☠️☣';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://i.ibb.co/zVSrsnq1/file-919.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫ declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
