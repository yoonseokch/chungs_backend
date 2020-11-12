module.exports = (sequelize, Datatypes) => {
    return {
      'Post': sequelize.define('Post', {
        ID:
        {
          type: Datatypes.INTEGER,
          primaryKey: true
        },
        boardCategory:
        {
          type: Datatypes.INTEGER
        },
        title:
        {
          type: Datatypes.STRING
        },
        content:
        {
          type: Datatypes.TEXT
        },
        writtenDate:
        {
          type: Datatypes.DATE
        },
        views:
        {
          type:Datatypes.INTEGER
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
          primaryKey: true
        },
        Name:
        {
          type: Datatypes.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }),
    //   'Reply': sequelize.define('Reply', {
    //     ID:
    //     {
    //       type: Datatypes.INTEGER,
    //       primaryKey: true,
    //       autoincremnt : true
    //     },
    //     content: {
    //       type : Datatypes.STRING
    //     },
    //     writtenDate : {
    //       type : Datatypes.DATE
    //     },
    //     reports : {
    //       type : Datatypes.INTEGER
    //     },
    //     Post_ID : {
    //       type : Datatypes.INTEGER
    //     },
    //     User_ID : {
    //       type : Datatypes.INTEGER
    //     }
    //   },
    //   {
    //     freezeTableName: true,timestamps: false
    //   }),
     }
};