import { Model, Optional, Sequelize, DataTypes } from 'sequelize';

export interface BaseModelAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseInputAttributes extends Optional<BaseModelAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
export interface BaseOutputAttributes extends Required<BaseModelAttributes> {}

export class BaseModel<T extends BaseModelAttributes, BaseInputAttributes>
	extends Model<T, BaseInputAttributes> {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export function initializeModel<T extends BaseModelAttributes, BaseInputAttributes extends Optional<T, 'id' | 'createdAt' | 'updatedAt'>>(
	name: string,
	attributes: any,
	sequelize: Sequelize
) {
	class DynamicModel extends BaseModel<T, BaseInputAttributes> {}
  
	DynamicModel.init({
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		...attributes,
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
	}, {
		timestamps: true,
		sequelize,
		paranoid: true,
		tableName: name
	});

	return DynamicModel;
}
