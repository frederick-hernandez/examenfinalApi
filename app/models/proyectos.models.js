module.exports = function(sequelize,Sequelize) {
    const proyectos =  sequelize.define('proyectos',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        completada: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        fechaCreacion: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        fechaVencimiento:{
            type: Sequelize.DATE,
            allownull: false
        },
        prioridad:{
            type: Sequelize.STRING,
            allowNull: false
        },
        asignadoA:{
            type: Sequelize.STRING,
            allowNull: false
        },
        categoria:{
            type: Sequelize.STRING,
            allowNull: false
        },
        pagado:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return proyectos;
}
