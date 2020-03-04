export interface HeaderState {
    visible: boolean;
    title: string;
    subtitle: string;
    details: string;
} 

export const CHANGE_HEADER_VISIBILITY = "CHANGE_HEADER_VISIBILITY";
export const HEADER_NAVIGATE = "HEADER_NAVIGATE";

interface updateHeaderVisibility {
    type: typeof CHANGE_HEADER_VISIBILITY,
    payload: boolean
}

export type Routes = "home" | "list" | "todo" | "users";

interface headerNavigate {
    type: typeof HEADER_NAVIGATE,
    route: Routes
}

export type HeaderActionTypes = updateHeaderVisibility | headerNavigate;