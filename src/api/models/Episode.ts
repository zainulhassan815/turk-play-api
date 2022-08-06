import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Drama from './Drama';

class Episode extends Model<InferAttributes<Episode>, InferCreationAttributes<Episode>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare thumbnail: string;
  declare url: string;
  declare dramaId: string;
}

Episode.init(
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
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dramaId: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      references: {
        model: Drama,
        key: 'id',
      },
    },
  },
  {
    sequelize: sequelize,
    tableName: 'Episode',
  }
);

export default Episode;
