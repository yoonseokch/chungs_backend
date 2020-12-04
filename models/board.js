module.exports = (sequelize, Datatypes) => {
    return {
      'Post': sequelize.define('Post', {
        ID:
        {
          type: Datatypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        boardCategory:
        {
          type: Datatypes.INTEGER,
          allowNull: false
        },
        title:
        {
          type: Datatypes.STRING,
          allowNull: false
        },
        content:
        {
          type: Datatypes.TEXT,
          allowNull: false
        },
        writtenDate:
        {
          type: Datatypes.DATE,
          allowNull: false
        },
        views:
        {
          type:Datatypes.INTEGER,
          allowNull: false
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
      }),
      'Category': sequelize.define('Category', {
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
      },
      {
        freezeTableName: true,
        timestamps: false,
      }),
     }
};