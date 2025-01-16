const Pagination = ({
    postsPerPage,
    totalPosts,
    setCurrentPage,
    currentPage,
  }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const paginate = (pageNumber, e) => {
      e.preventDefault();
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0)
    };
  
    return (
        <div>
            <nav>
            <ul className="flex justify-center mb-20 list-none gap-x-1">
                {pageNumbers.map((number) => (
                <a
                    key={number}
                    class={(currentPage == number) ?
                         "border border-2 border-black py-1 px-2 bg-white hover:bg-gray-200 no-underline text-black font-bold"
                         :
                         "border border-2 border-black py-1 px-2 bg-white hover:bg-gray-200 no-underline text-black"
                        }
                    onClick={(e) => paginate(number, e)}
                    href="!#"
                    >
                    {number}
                </a>
                ))}
            </ul>
            </nav>
        </div>
    );
  };

  export default Pagination