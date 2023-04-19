export interface PagedList {
  items: any[]
  pageCount : number,
  pageSize : number,
  page : number,
  totalCount : number,
  hasNextPage :boolean,
  hasPreviousPage : boolean
}
