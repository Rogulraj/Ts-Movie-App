import React, { useEffect, useRef, useState } from "react";

import defaultStyle from "./PrimaryHeader.module.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import colorTheme from "@constants/colorTheme";
import routePaths from "@constants/routePaths";
import { BiSearchAlt2 } from "react-icons/bi";
import { useFetchSearchedMoviesQuery } from "@services/movie.service";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { MovieFeatureActions } from "@redux/features/movie.feature";
import { fetchSearchMovies } from "@services/search.service";
import { MovieModel } from "@models/movie.model";

const PrimaryHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  // const { movieData } = useAppSelector((state) => state.movieFeature);

  // const searchHandler = async (): Promise<void> => {
  //   if (searchRef.current?.value !== undefined) {
  //     const fetchData = await fetchSearchMovies({
  //       index: 1,
  //       search: searchRef.current.value,
  //     });

  //     if (fetchData.statusCode === 200) {
  //       dispatch(
  //         MovieFeatureActions.bulkEditMovieList(fetchData.data as MovieModel),
  //         MovieFeatureActions.updateSearchValues({
  //           value: searchRef.current.value,
  //         })
  //       );
  //     }
  //   }
  // };

  const searchPageNavigation = () => {
    if (searchRef.current?.value !== undefined) {
      dispatch(
        MovieFeatureActions.updateSearchValues({
          value: searchRef.current.value,
        })
      );
      navigate(routePaths.searchMovies);
    }
  };

  return (
    <div className={defaultStyle.main_layout}>
      <div className={defaultStyle.sub_layout}>
        <div
          className={defaultStyle.title_card}
          onClick={() => navigate(routePaths.popularMovies)}>
          <h1 className={defaultStyle.main_title}>Movies</h1>
        </div>
        <ul className={defaultStyle.header_list}>
          <li className={defaultStyle.nav_card_layout}>
            <nav className={defaultStyle.nav_card}>
              <NavLink
                to={routePaths.popularMovies}
                className={defaultStyle.nav_link}>
                <p className={defaultStyle.nav_text}>Popular</p>
              </NavLink>
              <NavLink
                to={routePaths.topRatedMovies}
                className={defaultStyle.nav_link}>
                <p className={defaultStyle.nav_text}>Top Rated</p>
              </NavLink>
              <NavLink
                to={routePaths.upcomingMovies}
                className={defaultStyle.nav_link}>
                <p className={defaultStyle.nav_text}>Upcoming</p>
              </NavLink>
            </nav>
          </li>
          <li className={defaultStyle.search_main_card}>
            <input
              placeholder="Search"
              type="text"
              className={defaultStyle.search_input}
              ref={searchRef}
            />
            <BiSearchAlt2
              fill={colorTheme.white}
              size={20}
              onClick={searchPageNavigation}
              className={defaultStyle.search_icon}
            />
          </li>
          <li
            className={defaultStyle.menu_icon_card}
            onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoClose size={20} color={colorTheme.light_black_200} />
            ) : (
              <LuMenu size={20} color={colorTheme.light_black_200} />
            )}
          </li>
          {isMenuOpen && (
            <li className={defaultStyle.menu_icon_items_card}>
              <nav className={defaultStyle.menu_nav_card}>
                <NavLink
                  to={routePaths.popularMovies}
                  className={defaultStyle.nav_link}>
                  <p className={defaultStyle.menu_nav_text}>Popular</p>
                </NavLink>
                <NavLink
                  to={routePaths.topRatedMovies}
                  className={defaultStyle.nav_link}>
                  <p className={defaultStyle.menu_nav_text}>Top Rated</p>
                </NavLink>
                <NavLink
                  to={routePaths.upcomingMovies}
                  className={defaultStyle.nav_link}>
                  <p className={defaultStyle.menu_nav_text}>Upcoming</p>
                </NavLink>
              </nav>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PrimaryHeader;
