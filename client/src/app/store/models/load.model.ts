import { MasterType} from './master.model';

export interface Idea {
    isDraft: Boolean,
    isAccepted: Boolean,
    isDeleted: Boolean,
    isVerified: Boolean,
    submitedByTeamLeader: String,
    title: String,
    description: String,
    smallDesc: String,
    category: MasterType,
    domainId: MasterType,
    statusId: MasterType,
    createdDate: String
    updatedDate: String
}

export interface LoadState {
    ideas : Idea[] | null
    isLoading: Boolean
    isLoaded: Boolean
    hasError:Boolean
    error:any
    msg:String
}