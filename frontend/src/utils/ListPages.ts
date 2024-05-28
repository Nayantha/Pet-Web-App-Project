export function getCurrentPageNumberFromQueryParameters(metadata: ListMetadata): number {
    const queryParams = new URLSearchParams(location.search);
    let page: number;

    const pageParam = queryParams.get('p');
    if (pageParam !== null && pageParam !== undefined) {
        page = +pageParam || 1;
    } else {
        page = 1;
    }

    // Check if the page is less than or equal to zero, or larger than totalPages
    if (page <= 0 || page > metadata.totalPages) {
        page = 1; // Set page to one if it's invalid
    }
    return page;
}