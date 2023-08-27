import { Company, CompanyAttributes, CompanyInput } from '../models/company';
import { BaseCrudService } from './baseService';

export class CompanyService extends BaseCrudService<CompanyAttributes, CompanyInput> {
	constructor() {
		super(Company as any);
	}
}