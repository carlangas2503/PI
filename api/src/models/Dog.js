const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false,
    },
    Imagen: {
      type: DataTypes.STRING(600),
      isUrl: true,
      allowNull:true,
    },
    Nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    Altura_min: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min:20,
      }
    },
    Altura_max: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min:20,
      }
    },
    Peso_min: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min:8,
      }
    },
    Peso_max: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min:8,
      }
    },
    Años_de_vida: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min:10,
      }
    },
    Desde_DB :{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
  },{
    timestamps:false
  });
};
