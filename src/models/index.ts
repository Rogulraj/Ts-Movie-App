export interface PaginationIndex {
  index: number;
}

export interface SearchWithPagination extends PaginationIndex {
  search: string;
}
