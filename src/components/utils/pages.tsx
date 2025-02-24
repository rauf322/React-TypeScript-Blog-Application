export const getPagesCount = (limit:number, totalCount:number) => {
    const arr:number[] = []
    const amount_of_pages=(Math.ceil(totalCount / limit));
    for (let i = 1; i <= amount_of_pages; i++) {
        arr.push(i)
    }
    return arr
}