import React, { useState, MouseEvent } from "react";
import { useQuery } from "@tanstack/react-query";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Skeleton from "@mui/material/Skeleton";

import { buscarCourts } from "../../api";
import { CoutsValues } from "../../../Types";

type SelecaoQuadraProps = {
  onSelectedCourt: (selectedCourt: CoutsValues) => void;
};

const SelecaoQuadra = ({ onSelectedCourt }: SelecaoQuadraProps) => {
  const [alignment, setAlignment] = useState("Quadra Areia 1");

  const { data, isLoading } = useQuery(["corts"], () => buscarCourts(), {
    onSuccess: (dataSucesso) => {
      setAlignment(dataSucesso.data[0].name);
    },
  });

  const handleClickToggleButton = (
    _e: MouseEvent<HTMLElement>,
    value: CoutsValues
  ) => {
    onSelectedCourt(value);
  };

  const handleChangeToggle = (
    _e: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        sx={{
          width: { xs: 400, md: 430, sm: 470, lg: 500, xl: 530 },
          height: 65,
        }}
      />
    );
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChangeToggle}
      sx={{ pl: { xs: 4, md: 0 } }}
    >
      {data?.data.map((item: CoutsValues) => {
        return (
          <ToggleButton
            key={item.id}
            onClick={handleClickToggleButton}
            value={item}
            sx={{ p: { xs: 0.5, md: 2, sm: 2, lg: 2, xl: 3 } }}
          >
            {item.name}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default SelecaoQuadra;
