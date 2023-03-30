import React from 'react'

const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    const activeClass = "text-white bg-indigo-500 border-white";

    // console.log(totalPost,postPerPage)
    const pages = []
    console.log(pages)

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)

    }
    return (
        <div className={`flex justify-center gap-6 mt-8 `}>
            {
                pages?.map((page, index) => {
                    return <button className={`w-10 h-10 border border-red-600  ${page == currentPage ? 'activeClass' : ''}`} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination