// packages
import React, { useEffect, useMemo } from "react";

// redux
import { MovieFeatureActions } from "@redux/features/movie.feature";
import { useAppDispatch, useAppSelector } from "@redux/store";

// react-icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

// css
import defaultStyle from "./Pagination.module.css";

// color theme
import colorTheme from "@constants/colorTheme";

// interfaces
interface PaginationProps {
  totalPage: number;
}

// react component
const Pagination = ({ totalPage = 0 }: PaginationProps): React.ReactElement => {
  const { currentPageIndex } = useAppSelector((state) => state.movieFeature);

  const dispatch = useAppDispatch();
  console.log(totalPage);

  const paginationRange = useMemo(() => {
    return Array.from(
      { length: totalPage - currentPageIndex + 1 },
      (_, index) => index + 1
    );
  }, [currentPageIndex]);

  useEffect(() => {
    console.log(paginationRange);
  }, [paginationRange]);

  return (
    <div className={defaultStyle.button_card}>
      <button
        className={defaultStyle.prev_button}
        type="button"
        disabled={currentPageIndex <= 1}
        onClick={() => dispatch(MovieFeatureActions.decrementCurrentPage())}>
        <IoIosArrowRoundBack fill={colorTheme.black} size={25} /> Prev
      </button>
      <button
        className={defaultStyle.next_button}
        type="button"
        disabled={currentPageIndex >= totalPage}
        onClick={() => dispatch(MovieFeatureActions.incrementCurrentPage())}>
        Next <IoIosArrowRoundForward fill={colorTheme.white} size={25} />
      </button>
    </div>
  );
};

export default Pagination;
