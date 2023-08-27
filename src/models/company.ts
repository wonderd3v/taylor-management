import { DataTypes } from 'sequelize';
import { initializeModel, BaseInputAttributes, BaseOutputAttributes } from './baseModel';
import sequelizeConnection from '../config/dbContext/dbConnection';

interface CompanySpecificAttributes {
  name: string;
  address: string;
  telephone: string;
  currency: string;
  rnc: string;
}

export type CompanyInput = BaseInputAttributes & Omit<CompanySpecificAttributes, 'name'> & { name: string };
export type CompanyAttributes = CompanySpecificAttributes & BaseOutputAttributes;
export type CompanyOutput = CompanyAttributes;

export const Company = initializeModel<CompanyAttributes, CompanyInput>(
	'Company',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		telephone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		rnc: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	sequelizeConnection 
);
