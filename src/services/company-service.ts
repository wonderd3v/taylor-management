import { Company, CompanyAttributes, CompanyInput } from '../models/company-model';
import { BaseCrudService } from './base-service';

export class CompanyService extends BaseCrudService<CompanyAttributes, CompanyInput> {
	constructor() {
		super(Company as any);
	}
}