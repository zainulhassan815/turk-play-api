import * as dotenv from 'dotenv';
import app from './config/express.config';

dotenv.config();

const port = Number.parseInt(process.env.PORT);
app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
