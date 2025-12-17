import Arpc from './core/Arpc';
import { cors, errorHandler, ssr } from './core/middlewares';
Arpc('arpc')
    .use(errorHandler)
    .use(cors)
    .use(ssr)
    .listen(3000);
