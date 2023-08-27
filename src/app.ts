import express from 'express';
import dbInit from './config/dbContext/dbInit';
import companyController from './controllers/company-controller';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger'; // Import the Swagger configuration

const app = express();

dbInit();

app.use(express.json());
const apiRouter = express.Router();

app.use('/api', apiRouter);
apiRouter.use(companyController.path, companyController.router);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
