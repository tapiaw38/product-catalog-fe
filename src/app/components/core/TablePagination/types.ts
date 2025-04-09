export interface TablePaginationProps {
    totalRecords: number;
    pageSize: number;
    page: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}
