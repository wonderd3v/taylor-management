import { Company } from '../../models'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
	Company.sync({ alter: isDev })
}
export default dbInit;