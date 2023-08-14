import React, { useState, ChangeEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import headIcon from "../../public/headIcon.png";
import { fetchSearchData } from "../../api";
import Popper from "@mui/material/Popper";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { debounce } from "throttle-debounce";
import { Search, SearchIconWrapper, StyledInputBase } from "./Styled";

/**
 * Компонент "Шапка"
 * Присутствует баг в момент поиска из детальной страницы
 * Баг обрабатывается)
 */
const Header = () => {
  const [search, setSearch] = useState<any[] | null>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleChange = (e: ChangeEvent) => {
    /**
     * Запрос по хорошему отменять и запрашивать слудущий при разных e.currentTarget.value
     * в определенныз интервалах времени, но не успеваю
     */
    setAnchorEl(e.currentTarget as any);
    const searchValue = (e.target as HTMLInputElement).value;
    fetchSearchData(searchValue).then((data) => {
      if (data) {
        const { data: res } = data;
        if (res.count) {
          setSearch(res.results);
        }
      }
    });
  };

  const handleBlur = () => {
    /**
     * Закорыл костылем уход с фокуса
     * Не лучшая практика оказалась в Popper mui складывать результаты. Но переделать тоже не успеваю
     */
    debounce(200, () => {
      setAnchorEl(null);
    })();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ mr: 2 }}>
            <Link to="/">
              {/** Просто закинул Png'шку ) */}
              <img src={headIcon} alt="icon" loading="lazy" />
            </Link>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            STAR WARS
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Popper
              sx={{
                position: "absolute !important",
                top: "80px !important",
                right: 0,
                left: "inherit !important",
                width: 320,
              }}
              open={!!anchorEl}
              anchorEl={anchorEl}
              transition
            >
              <Paper>
                {search &&
                  search.map(({ name, url }) => (
                    <Box
                      key={name}
                      sx={{
                        m: 2,
                        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Link
                        to={url.replace("https://swapi.dev/api/", "")}
                        onClick={() => {
                          setAnchorEl(null);
                        }}
                      >
                        {name}
                      </Link>
                    </Box>
                  ))}
              </Paper>
            </Popper>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
