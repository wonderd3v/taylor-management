import express from 'express';
import dbInit from './config/dbContext/dbInit';
import companyController from './controllers/companyController';

const app = express();

dbInit();

app.use(express.json());

app.use(companyController.path, companyController.router);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
