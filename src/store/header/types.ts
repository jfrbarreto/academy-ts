export interface HeaderState {
    visible: boolean;
    title: string;
    subtitle: string;
    details: string;
    filterValue: string;
} 

export const CHANGE_HEADER_VISIBILITY = "CHANGE_HEADER_VISIBILITY";
export const HEADER_NAVIGATE = "HEADER_NAVIGATE";
export const UPDATE_FILTER_VALUE = "UPDATE_FILTER_VALUE"

interface updateHeaderVisibility {
    type: typeof CHANGE_HEADER_VISIBILITY,
    payload: boolean
}

interface headerNavigate {
    type: typeof HEADER_NAVIGATE,
    route: Routes
}

interface updateFilterValue {
    type: typeof UPDATE_FILTER_VALUE,
    value: string
}

export type Routes = "home" | "list" | "list-details" | "todo" | "users";
export type HeaderActionTypes = updateHeaderVisibility | headerNavigate | updateFilterValue;