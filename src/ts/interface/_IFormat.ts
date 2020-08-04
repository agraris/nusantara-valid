/**
 * IFormat class interface
 *
 * @interface
**/
export interface IFormat {
    format: (args: any) => string; // eslint-disable-line @typescript-eslint/no-explicit-any
}