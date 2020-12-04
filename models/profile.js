module.exports = (sequelize, Datatypes) => {
    return {
      'Personal_Profile': sequelize.define('PersonalProfile', {
        ID:
        {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name:
        {
            type: Datatypes.STRING,
            unique: true,
            allowNull: false
        },
        Description:
        {
            type: Datatypes.STRING,
            allowNull: false
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
      }),
     }
};