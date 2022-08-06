import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Episode from './Episode';

class Drama extends Model<InferAttributes<Drama>, InferCreationAttributes<Drama>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare thumbnail: string;
}

Drama.init(
  {
    id: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'Drama',
  }
);

Drama.hasMany(Episode, { foreignKey: 'dramaId' });

export default Drama;
