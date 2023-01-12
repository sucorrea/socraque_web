import React from "react";
import { Box } from "@mui/material";
import { LazyLoadTypes, Settings } from "react-slick";

export const settings: Settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  lazyLoad: "ondemand",
  infinite: true,
  nextArrow: undefined,
  prevArrow: undefined,
};


export const settings1: Settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: "progressive",
  infinite: true,
  nextArrow: undefined,
  prevArrow: undefined,
};

export const settings2: Settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  lazyLoad: "ondemand",
  infinite: true,
};
