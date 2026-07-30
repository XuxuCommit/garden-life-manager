export interface History<T> {

    undo: T[];

    redo: T[];

}