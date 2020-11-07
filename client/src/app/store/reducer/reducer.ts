
import { AuthReducer } from './auth.reducer';
import { LoadReducer } from './load.reducer';
import { MasterReducer } from './master.reducer';

var reducer = { auth: AuthReducer, master: MasterReducer, load: LoadReducer }
export { reducer }