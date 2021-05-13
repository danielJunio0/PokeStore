export function Pagination(offset,page) {
    return {
        type: '@pagination/PAGINATION',
        payload:{offset,page}
    }
}
export function PaginationReset() {
    return {
        type: '@pagination/PAGINATION_RESET',
    }
}
