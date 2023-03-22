import {
  getNumPages,
  getPageArrayIndex,
  sliceArrayByLimit,
} from "../../utils/pageUtil";

export interface IPaginationProps {
  total: number;
  page: string;
  setPage: (value: string) => void;
}

const Pagination = ({ total, page, setPage }: IPaginationProps) => {
  const pageArray = sliceArrayByLimit(getNumPages(total));
  const pageArrayIndex = getPageArrayIndex(page);
  const pages =
    pageArray[pageArrayIndex > pageArray.length - 1 ? 0 : pageArrayIndex];

  return (
    <>
      {total > 0 ? (
        <nav className="flex justify-center items-center gap-1 m-4">
          <button
            className="border-none rounded-lg p-2 m-0  text-black text-base disabled:cursor-not-allowed "
            onClick={() =>
              setPage(
                String(
                  pageArray[pageArrayIndex === 0 ? 0 : pageArrayIndex - 1][0],
                ),
              )
            }
            disabled={pageArrayIndex === 0}
            data-testid="test-left-button"
          >
            &lt;&lt;
          </button>
          <button
            className="border-none rounded-lg p-2 m-0  text-black text-base disabled:cursor-not-allowed "
            onClick={() => setPage(String(Number(page) - 2))}
            disabled={page === "1"}
            data-testid="test-left-button"
          >
            &lt;
          </button>
          {pages?.map((n) => (
            <button
              className="border-none rounded-3xl p-2 m-0  text-black text-base hover:bg-orange-100 aria-selected:bg-orange-100 "
              key={page + (n + 1)}
              onClick={() => setPage(n + "")}
              aria-selected={page == String(n + 1) ? true : false}
            >
              {n + 1}
            </button>
          ))}
          <button
            className="border-none rounded-lg p-2 m-0  text-black text-base  disabled:cursor-not-allowed"
            onClick={() => setPage(page)}
            disabled={pageArrayIndex === pageArray.length - 1}
            data-testid="test-right-button"
          >
            &gt;
          </button>
          <button
            className="border-none rounded-lg p-2 m-0  text-black text-base  disabled:cursor-not-allowed"
            onClick={() =>
              setPage(
                String(
                  pageArray[
                    pageArrayIndex === pageArray.length - 1
                      ? pageArrayIndex
                      : pageArrayIndex + 1
                  ][0],
                ),
              )
            }
            disabled={pageArrayIndex === pageArray.length - 1}
            data-testid="test-right-button"
          >
            &gt;&gt;
          </button>
        </nav>
      ) : null}
    </>
  );
};
export default Pagination;