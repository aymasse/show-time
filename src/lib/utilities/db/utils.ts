export type PaginationOptions = {
  numberOfItemsPerPage: number;
  pageNumber: number;
};

export function getSupabaseRange(
  options: PaginationOptions
): {
  rangeStart: number;
  rangeEnd: number;
} {
  const pageIndex = options.pageNumber - 1;

  const rangeStart = pageIndex * options.numberOfItemsPerPage;
  const rangeEnd = (pageIndex + 1) * options.numberOfItemsPerPage - 1;

  return {
    rangeStart,
    rangeEnd,
  };
}
