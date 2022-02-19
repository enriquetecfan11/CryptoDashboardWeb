import { useEffect, useState } from "react";
import {
  Box,
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
      <Box
        style={{
          overflowX: "hidden",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          style={{
            maxHeight: "800px",
            maxWidth: "100%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    variant="h6"
                    color="white"
                    gutterBottom
                    alignText="center"
                  >
                    <b>Rank</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    color="white"
                    gutterBottom
                    alignText="center"
                  >
                    <b>Name</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    color="white"
                    gutterBottom
                    alignText="center"
                  >
                    <b>Price</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    color="white"
                    gutterBottom
                    alignText="center"
                  >
                    <b>Market Cap</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    color="white"
                    gutterBottom
                    alignText="center"
                  >
                    <b>24 Hours Change</b>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>
                    <Typography
                      variant="h6"
                      color="white"
                      gutterBottom
                      alignText="center"
                    >
                      {coin.market_cap_rank}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography
                        variant="h6"
                        color="white"
                        gutterBottom
                        alignText="center"
                      >
                        {coin.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      color="white"
                      gutterBottom
                      alignText="center"
                    >
                      ${coin.current_price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      color="white"
                      gutterBottom
                      alignText="center"
                    >
                      ${coin.market_cap}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      color="white"
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
      </Box>
    </Box>
  );
};

export default Market;
