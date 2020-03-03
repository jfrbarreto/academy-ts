export interface HeaderState {
    visible: boolean;
} 

export const CHANGE_HEADER_VISIBILITY = "CHANGE_HEADER_VISIBILITY";

interface updateHeaderVisibility {
    type: typeof CHANGE_HEADER_VISIBILITY,
    payload: boolean
}

export type HeaderActionTypes = updateHeaderVisibility;