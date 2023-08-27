import { Request, Response, Router } from 'express';
import { BaseCrudService } from '../services/baseService'; 
import { BaseModelAttributes } from '../models/baseModel';

export function createBaseController<T extends BaseModelAttributes, BaseInputAttributes>(
	service: BaseCrudService<T, BaseInputAttributes>,
	path: string
) {
	const router = Router();

	router.post('/', async (req: Request, res: Response) => {
		try {
			const newItem = await service.create(req.body);
			res.status(201).json(newItem);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	});

	router.get('/', async (_req: Request, res: Response) => {
		try {
			const items = await service.getAll();
			res.json(items);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	});

	router.get('/:id', async (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		try {
			const item = await service.getById(id);
			if (item) {
				res.json(item);
			} else {
				res.status(404).json({ message: 'Not found' });
			}
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	});

	router.put('/:id', async (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		try {
			const success = await service.updateById(id, req.body);
			if (success) {
				res.status(204).end();
			} else {
				res.status(404).json({ message: 'Not found' });
			}
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	});

	router.delete('/:id', async (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		try {
			const success = await service.deleteById(id);
			if (success) {
				res.status(204).end();
			} else {
				res.status(404).json({ message: 'Not found' });
			}
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	});

	return { router, path };
}


// Usage:
// const userService = new BaseCrudService<User>(UserModel);
// const { router, path } = createBaseController(userService, '/users');
// app.use(path, router);
