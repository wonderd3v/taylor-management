import { Company } from '../models';
import { CompanyAttributes, CompanyInput } from '../models/company-model';
import { BaseCrudService } from '../services/base-service';
import { createBaseController } from './base-controller';

const companyService = new BaseCrudService<CompanyAttributes, CompanyInput >(Company as any);
const { router, path } = createBaseController<CompanyAttributes, CompanyInput>(companyService, '/companies');

/**
 * @swagger
 * /companies:
 *   post:
 *     summary: Create a new company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompanyInput'
 *     responses:
 *       201:
 *         description: Company created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 */
// Post route - handled by createBaseController

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Get a list of companies
 *     responses:
 *       200:
 *         description: List of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 */
// Get all route - handled by createBaseController

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Get a company by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the company
 *     responses:
 *       200:
 *         description: Company retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: Company not found
 */
// Get by ID route - handled by createBaseController


export default { router, path };
