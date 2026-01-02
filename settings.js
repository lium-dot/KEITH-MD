/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUW5OiOBj9L3lta+QOWtVVC6ggCF5RcGsf0hAwcjUEFKf871vY3TPzsDvby1NIUuc73znny3dQlLhGNurA+DuoCG4hRf2SdhUCY6A1cYwIGIAIUgjGgLHsYnm4q8o+V5ermbsl+aLYbvzrKrhwQye1nUbaVFdbn9av4DEAVfOW4fA3gCVTcemZCnuSTkzIrH2RU/gZn8+58Bbo/JBWmLhSS0/X+St49IgQE1wk0+qEckRgZqNuBTH5Gv1EG+W8OYL8yon8+YLfqaJVVucOJowj+2tSW0Hg2/ukmpZfo5+M8oCmsN4VM96po4ypFuYM5462nJHCOx3vQd51Oa3uB+Wdfo2TAkXzCBUU0+7Lul9dIyBsukXLlwO+av5BbHldJyGPYLhvvGAp7ZWDw9uR90XijU5Ww8XBWGC3Hc58vBs5L0GS59JSV95uErdPvXY48U5WPv2V+Ip8ZiX9P7pfNFPshDl3GzKkwN5QIGdluY+bKWd7TLXzdC3evLnekOW9r9Fvh4Qp+UsXNSQR5/trsripZ88ymoCDN27L2Oas0+5Bm2j1T/qQNuR3LHcBF6FwXbFHa+G21LDkN6SyMN+29+iF47ZIZSR5Ha1GecfVulCpQyqvdi8L9qB36flI93smavbQsG6KcI0nbuUW8Tl5fXaUom4egTH7GACCElxTAikui+eezA4AjNotCgmiT3mByVpybOaq1JYwNxWBTwVR1u/n2JJkPDLeLigOctE7HnbeKxiAipQhqmsUmbimJekcVNcwQTUY//nXABToRt+N68tJ7ADEmNTUK5oqK2H06ernIQzDsinotitCvV8gAsbMz21EKS6SutexKSAJT7hF+gnSGoxjmNXoR4eIoAiMKWnQj6nVy6gX3lnJE9lZm2AA8qchOAJjwImCLCqCwLMsO+bkP+pv1x4WVtW3AlEwANnzGsvKgsIonCyJCicy/c3+YAAK2IMBNctQ0Uv+QbjHjxCFOKvBGOjLBVsW6lqKZdQlQaBtVdVW1V7EzwY/k/LhhHGJtoLSTS52vqvXbDmBFho5xiE3SWg4GZ+6+ly8+rE5/SeQvqQv7PzYQZbr7wvqdpJJjpfC9ulSbG8zAZd0Q+TbqUIbOMeTu1u8iGVaboaNcdVFoTmK3cw/TpcvDPfGB1l6v0+Fk97HagAi1OIQ/Vosv+RRztKXm6tTeX1QUdvyByb0dhR7sc1003NnX3jN9TVtdOFHR3I9hrN5OEdZFMBdJIgGo27TZmQFhop1g5vVTna6vmf4OUPZx9uFn+nqret/Y4yeT8GHB/9p5TvxPnHMY/ALxsfj8i8Dqm1ul8JrVk4i4SqVpy5UOey3Oy2rThKvna1InKzxMpzxtxt4PP4agCqDNC5JDsYAFhEpn0EhZdNHeF7E5W+K6ao3n6wTve88gzVVf47FDueopjCv+uGVZF5UeI5/v7UiZWXC+tSLsJfli9dnvFOraksh/ZwyoPafAQXw+Bs22zQCgQcAAA==';
const dev = process.env.OWNER_NUMBER || '254758443111';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
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
  database,  
  dev,
  session,
};

//must run
