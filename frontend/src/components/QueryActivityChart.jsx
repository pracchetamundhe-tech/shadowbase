import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample query activity data for the dashboard
const queryData = [
  { time: "09 AM", queries: 120 },
  { time: "10 AM", queries: 180 },
  { time: "11 AM", queries: 150 },
  { time: "12 PM", queries: 240 },
  { time: "01 PM", queries: 210 },
  { time: "02 PM", queries: 300 },
  { time: "03 PM", queries: 270 },
];

function QueryActivityChart() {
  return (
    <Card
      sx={{
        background: "linear-gradient(145deg, #111c2e, #0b1423)",
        border: "1px solid #263850",
        borderRadius: 3,
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Query Activity
        </Typography>

        <Typography variant="body2" color="#94a3b8" mb={3}>
          Sample queries replayed over time
        </Typography>

        <Box sx={{ width: "100%", height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={queryData}>
              <CartesianGrid stroke="#263850" strokeDasharray="3 3" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  background: "#111c2e",
                  border: "1px solid #334760",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="queries"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ r: 4, fill: "#38bdf8" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default QueryActivityChart;