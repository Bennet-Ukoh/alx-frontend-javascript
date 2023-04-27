import { RowID, RowElement } from './interface';

declare function create(row: RowElement): RowID;
declare function read(id: RowID): RowElement | undefined;
declare function update(id: RowID, row: RowElement): boolean;
declare function deleteRow(id: RowID): boolean;
