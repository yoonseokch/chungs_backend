const Sequelize = require('sequelize');
const db = {};
const configs = {
  'db': process.env.DB_DB,
  'id': process.env.DB_ID,
  'pw': process.env.DB_PW,
  'host': process.env.DB_HOST,
};

const sequelize = new Sequelize(
  configs.db,
  configs.id,
  configs.pw,
  {
    'host' : configs.host,
    'dialect' : 'mysql'
  },
);

console.log(configs);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//sequelize.sync();
// db.User = require('./user.js')(sequelize, Sequelize);
db.Board = require('./board.js')(sequelize, Sequelize);
db.Profile = require('./profile.js')(sequelize, Sequelize);
db.Board.Post.belongsTo(db.Board.Category,{
    foreignKey : 'boardCategory',
    targetKey : 'ID'
})
// db.Board.Category.belongsTo(db.Board.Post,{
//     foreignKey : 'ID',
//     targetKey : 'boardCategory'
// })
//sequelize.sync({force:true});
// db.Precedent = require('./precedent.js')(sequelize, Sequelize);
// db.Qna = require('./qna.js')(sequelize,Sequelize);
// db.Lawyer = require('./lawyer.js')(sequelize,Sequelize);
module.exports = db;