import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const getCoins = () => {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((res) => res.json())
    .then((data) => data);
};

const Market = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then((data) => {
      setCoins(data);
    });
  }, []);

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            style={{
              overflowX: "auto",
              maxHeight: "700px",
              maxWidth: "100%",
              marginleft: "50%",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      <b>Rank</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      <b>Name</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      <b>Price</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      <b>Market Cap</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      <b>24 Hours Change</b>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coins.map((coin) => (
                  <TableRow key={coin.id}>
                    <TableCell>{coin.market_cap_rank}</TableCell>
                    <TableCell>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <img
                          src={coin.image}
                          alt={coin.name}
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "10px",
                          }}
                        />
                        <Typography variant="h6">{coin.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" color="textPrimary">
                        ${coin.current_price}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" color="textPrimary">
                        ${coin.market_cap}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        style={{
                          color:
                            coin.price_change_percentage_24h > 0
                              ? "green"
                              : "red",
                        }}
                      >
                        ${coin.price_change_percentage_24h}%
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Market;
