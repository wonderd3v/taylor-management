import { BaseModel, BaseModelAttributes } from './../models/baseModel';

interface CRUDOptions {
  excludeFields?: string[];
}

export class BaseCrudService<
  T extends BaseModelAttributes,
BaseInputAttributes
> {
	private model: typeof BaseModel;

	constructor(model: typeof BaseModel) {
		this.model = model;
	}

	async create(payload: BaseInputAttributes): Promise<T> {
		const record = await this.model.create(payload);
		return record.get() as T;
	}

	async getById(id: number, options?: CRUDOptions): Promise<T | null> {
		const record = await this.model.findByPk(id, {
			attributes: {
				exclude: options?.excludeFields || [],
			},
		});

		return record ? (record.get() as T) : null;
	}

	async updateById(id: number, payload: Partial<BaseInputAttributes>): Promise<boolean> {
		const [updatedCount] = await this.model.update(payload, { where: { id } });
		return updatedCount > 0;
	}

	async deleteById(id: number): Promise<boolean> {
		const deletedCount = await this.model.destroy({ where: { id } });
		return deletedCount > 0;
	}

	async getAll(
		conditions: Partial<T> = {},
		options?: CRUDOptions
	): Promise<T[]> {
		const records = await this.model.findAll({
			where: conditions,
			attributes: {
				exclude: options?.excludeFields || [],
			},
		});

		return records.map((record) => record.get() as T);
	}
}
