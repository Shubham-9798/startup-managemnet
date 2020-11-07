export interface MasterType {
    type: string,
    _id: string
}


export interface StoreState {
    category: CategoryState
    domain: DomainState;
}


export interface CategoryState {
     ids: number[];
     entities: {[key:number]: MasterType};
     isloading: boolean
     hasError: boolean
     error: any
} 

export interface DomainState {
     ids: number[];
     entities: {[key:number]: MasterType};
     isloading: boolean
     hasError: boolean
     error: any
} 