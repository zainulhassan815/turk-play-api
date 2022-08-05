import { Sequelize } from 'sequelize';
import DefaultDbConfig from './sql.config';

const sequelize = new Sequelize(DefaultDbConfig.database, DefaultDbConfig.user, DefaultDbConfig.password, {
	dialect: 'mysql',
	host: DefaultDbConfig.host,
	port: DefaultDbConfig.port,
	define: {
		createdAt: true,
		updatedAt: false,
	},
});

export default sequelize;
