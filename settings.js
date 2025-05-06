/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Vy46jVhD9l7u1e3gbsNRSAIONn9hgYzvK4houjzYvw8U0Hnk32c4iUqSJND8QzSJZZpGfSf9AfiHC7la3NI90pLAqXe6tOlV16tRbkKRhgUaoBt23IMvDI8SoMXGdIdAFcul5KAdt4EIMQRfMR97SddmdYo6PQk9eHolsnWmJKahipq5LSspalFkzeofZ3IJzG2TlLgqdbziclovaNw5bdlyozhA6tbfoJdFeXhkHXDA9f3oMmIgzdoNweQvOjUcY5mHiq1mAYpTDaIRqA4b56+A78tGZ+oVxIlrL2GCiCntqi1LZoanaR8VB/sq7k/qRNFbJV8IPqXIoUNsg7qw2o3nLiESODKuTH8XuPvdsnavIeLaSp1V1hV+EfoJc3UUJDnH96rpXxioO1/cLxudLb3eyDjs2zUvyUB/XlKb00I5PiTvLCtS1+krgMbW6Q6xA3p1a2nQ/oQ6YEiK1TKOWT0x31PLA1/FkwNOh/xK4kT9xZf9f6g5HquTGOdaq7YBR9hW1pLk6s/1AFO1aXjH2UljtJnsvHUivg0+OfcrRR3JKU7F5uN+z44G4j1zoWkYvs/0BsgaEMhkbm7n6DB/iMv8WSps/Mn28m47MzSDmDO8wFNK7rRVqImmIfDknpiiYS0rmTIcLxrY3YULbB2M936x7yv1gHGaiIiw8I+tVdHIgLasYc3Xg314y2qNad0GXOrdBjvywwDnEYZpczlixDaB7NJGTI3wpL3B8Feucr9jDYRYaa+xnm8mp2sgtNptPGTmx5JZtdUjDqoVb0AZZnjqoKJA7CAuc5vUEFQX0UQG631861SSdozjFaBi6oAtojuU5gWUZiqK+K95UAcQFzLI3CcKgDbw8jScIdHFeoja4POgpPCOxssIwHVbjVVoSJEGgVIlRFFLpkXKTYnwNaoUxKjCMM9CleLbD8RwnMOf2/4ODk3iSpHtMh+c5mZRpSaMVjRNJQWB6skSR/4JDPP/QBgm6x1ceN9VnqDbwwrzAy6TMohS6TyR/+gkdJy0TbNaJozQGykH3xTHCOEz8osmsTGDuBOERKU0eoOvBqEDnNnDRMXSQfklYN5cnr7+Y6+bIXewreTRYLaumg0GaXK8IHIQ8ZNwbgeHgDUszzA3kaPKG8kTXYRnOgQINmnJcJaR581VGr3eIPI65eGRry81hxBtexA1mQjRFzoWVVyqiHLlPVd5BZ19mVrpHyTf86uxWEsSDOnKKNSLReutsPYIiRkFr+cLvleKg+/ZZtpXUbfwxmragWFMDTbeaOJ+xoStynxMigc1t8PDhx7/e//bw4c+//3j/8O6nZ+Pjrw/vfn/4+Onh3c8Pv3xqgDx2qQnhIgzDqABdoOhmnE4ERR0TcqeQ+n2p8CXFl8BzV5/U4jqN/VrdBOV2Agdxks/mix5hDoQxuZl7jBvYrM6a+T6jp5axn9x+wQnoAi/pdFTypPiCLQrOsBQY3dcNBksmrPryHEvECVmB3dFT16XlXO8fNvuesVQJ1/OHBlWSTmlX1syTaelETyJFo30kzW+baFd2vQwWVSvN1G3JrQp1NZsxtGeJ3lEj5MmkNxt17oW1SOhVnz854oS8Y+nsfk3mWd/A0sLYOIF46Ihz10YyYeLpxpImfjq+9+dXHbvoaPS4v8JHhbly0QvRZR08dulfu/k8FuS5/cLH44L5CvXkRRH09V1s9QMu65z26pwgA0IR++pAZDarUpmpB27k3i1PXA+cm3nPIoi9NI+bPZS4eRq6oA0iWGDpebK/IBYdtg3iWsoyE0P8JAhAaj5NmoHzP8cGJpg7CQAA';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254778620961';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
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
