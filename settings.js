/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Vy46jRhT9l9raPTzNw1JLwRj8xtjY2HQURWUoMAYDrgLbMPJusp1FpEgTaX4gmkWyzCI/k/6B/EJEu1vd0kwmHSmsSkXVvefec+6ptyBJQ4JGqATttyDD4RHmqF7mZYZAG3QK30cYNIEHcwjawOmIM1H39LnWPc5nkWkJ+/1dtlS1haaLXCOLq1nEep6y4ZRbcGmCrNjEofuVgBOXG5XZqaWOj+vVgZvFknko+MITpZ4lMI1ptGAOS77VJz3pFlzqiDDEYRJo2RbtEYbxCJUmDPHr4CsdyCtoouvhbmLlkqD0fJ4NSycx5lR3xJJzujr2cARbNHkd/Gy69ibnxBHJbIFm8ZmBdoe4ZQ/5DQYSAkvLW8zEoj9lllf4JAwS5A08lORhXr6676tOaZwSuMUq0Rs2NeHmw2yL0+UyxoRyVGaS9wY7JRd2HP064F2pswiOnrRLprFBjQ/FHiYt1Vo3qr2bFAvNkAXojyI7Y7SXwE38pJXoP/VdhbivOJKJu86xxNCWzLXDp1TpV7udfs7uLF/C6UKLEu118ClqIQ7N7uqwcRuJPsBuP0i53TYm1bA6UnJpRvPx0CC781l6hg/zAn8N5R2mTtvThu20qINwxHdusWZtqwzY4bA1tpmRtqlmSeRs6cF5vBe9E1KX7lyVp4ZT8enIjcKVybEVQyebCKs+1LnV0Nuebh8qilA58ECbuTQBRkFIcgzzME3qPbYJoHe0kItR/tBc0LeirYOp7QHGzEhdpVWi2XLEHo1UMSplKfapKKoa5theTG5BE2Q4dREhyOuHJE9xOUGEwAAR0P72gae6ZIz2aY6GoQfagG3xoigJLC0LzDfkzWkLcwKz7E2CctAEPk73EwTaOS5QEzxcUHSG1zRZZlqqyrEap/OM3uIYVlIlrSWpfF3g/pp0Ee4RyeE+A21G5AVW5hhWvjT/HxwiL6kS05I7Ms0KKs3qSpfutMQO22U4WupIX8fBCZfvmiBB5/yq4rr3HNMEfohJvkyKLE6h9yTxp5/QddMiya0ycdV6gTBov9hGeR4mAakrKxKI3W14RGpdB2j7MCbo0gQeOoYuquOBQf97w7P95by/UkeLIIhytJooNYPbNLkecQWP3dAudyPADX3Dyz53I23Y1g2kBYZjXYZGvAjqdlwNpL7zj3rusVZ3IXK6M12SZTX1qKA/7a6sEcanB01ehYgw8p66vIFuVGSLNELJV+IeFqY067PT/T5wXX4qWDwn91rnRJHcF3GvAgftt8+mraZeHW9kSuJ42HNAzVad5zM1tMXP9ZDA+jC4//DDn+9/vf/wx1+/v79/9+Pz4uMv9+9+u//46f7dT/c/f6pxPJJUZ/BQDsOYgDZQDcqpSKBpRhGyrtLrKZNAUYOahSdSn6ziOoyrniKvzc6hj4gbnniuZxxYuZAstObW6kzcwTCzB4KR9tbk9gtBQBuMs7E2EisdW44c3zV605nLF+zBOW3cjcz52hQfdutscPIWyI4dTtuI5YE6eXGRMHddElRBSjNbRYPamQsyzglnsX5SlNs621VcL5N5DC/Qw8Ay7vJCNjJprswr01s3DGVQroJZmrSSKJTXHofDqp+NTR5XY42G4Zgqc3a2sc8Us5NOa9qwp5JhxqsDvssC5WpiDyYaPz5e4aPBXKXoh+jhLXhk6d/IfB4K+tJ8EeLxcfkH4XXsbWDa1QluOdwfkKlx3sH8uDlqSSwzp2jKs+nBtqY72IlFcKmnPYth7qd4D9oAJh5OQw80QQxJrjzP9ResgmGbYF8qWWblMH+yA6DUnzH2weVvu+JP/TcJAAA=';

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
