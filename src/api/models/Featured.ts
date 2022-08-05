import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../../config/sequelize.config';
import Episode from './Episode';

class Featured extends Model<InferAttributes<Featured>, InferCreationAttributes<Featured>> {
	declare id: CreationOptional<number>;
	declare episodeId: string;
}

Featured.init(
	{
		id: {
			type: DataTypes.INTEGER({ length: 11 }),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		episodeId: {
			type: DataTypes.INTEGER({ length: 11 }),
			allowNull: false,
			references: {
				model: Episode,
				key: 'id',
			},
		},
	},
	{
		sequelize: sequelize,
		tableName: 'featured',
	}
);

Featured.belongsTo(Episode, { foreignKey: 'episodeId' });

export default Featured;
