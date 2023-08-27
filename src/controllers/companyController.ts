import { Company } from '../models';
import { CompanyAttributes, CompanyInput } from '../models/company';
import { BaseCrudService } from '../services/baseService';
import { createBaseController } from './baseController';

const companyService = new BaseCrudService<CompanyAttributes, CompanyInput >(Company as any);
const { router, path } = createBaseController<CompanyAttributes, CompanyInput>(companyService, '/users');

export default { router, path };
