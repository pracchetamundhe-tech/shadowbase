
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

// Sample query activity data (demo values)
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
        width: "100%",
        height: "100%",
        minWidth: 0,
        background: "linear-gradient(145deg, #111c2e, #0b1423)",
        border: "1px solid #263850",
        borderRadius: 3,
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        transition: "0.3s ease",
        "&:hover": {
          borderColor: "#38bdf8",
          transform: "translateY(-3px)",
        },
      }}
    >
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
        <Typography variant="h6" fontWeight="bold">
          Query Activity
        </Typography>

        <Typography variant="body2" color="#94a3b8" sx={{ mt: 0.5, mb: 2 }}>
          Sample queries replayed over time
        </Typography>

        <Box sx={{ width: "100%", height: 260, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={queryData}
              margin={{ top: 10, right: 8, left: -15, bottom: 5 }}
            >
              <CartesianGrid
                stroke="#263850"
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="time"
                stroke="#94a3b8"
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                stroke="#94a3b8"
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={42}
              />

              <Tooltip
                formatter={(value) => [`${value} queries`, "Replayed"]}
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
                dot={{
                  r: 4,
                  fill: "#38bdf8",
                  stroke: "#111c2e",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 7, fill: "#7dd3fc" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default QueryActivityChart;
