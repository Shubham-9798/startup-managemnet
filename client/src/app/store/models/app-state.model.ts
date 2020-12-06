import { AuthModel } from './auth.model'
import { CategoryState, DomainState } from './master.model';
import { LoadState} from './load.model';

export interface AppState {
    readonly auth: AuthModel
    readonly Category: CategoryState
    readonly Domain: DomainState
    readonly loadList: LoadState

}