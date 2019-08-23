//Configures the Sequelize ORM

const options = {
    dialect: 'sqlite',
    storage: 'library.db',  //Set the file path or storage engine
    define: {
        timestamps: false,
    },
};
