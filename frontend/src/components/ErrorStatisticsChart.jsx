
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example response based on the backend team's SQL query
// These are demo values until the backend API is connected
const errorData = [
  { error_message: "Unknown column name", count: 1 },
];

function ErrorStatisticsChart() {
  // Calculate the total number of recorded errors
  const totalErrors = errorData.reduce(
    (total, item) => total + item.count,
    0
  );

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
          Error Statistics
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5, mb: 2 }}>
          <Typography variant="body2" color="#94a3b8">
            Migration errors by type
          </Typography>

          <Chip
            label="DEMO DATA"
            size="small"
            sx={{
              height: 20,
              color: "#38bdf8",
              backgroundColor: "rgba(56,189,248,0.12)",
              fontSize: "0.6rem",
            }}
          />
        </Box>

        <Box sx={{ width: "100%", height: 260, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={errorData}
              layout="vertical"
              margin={{ top: 10, right: 15, left: 5, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#263850"
                horizontal={false}
              />

              <XAxis
                type="number"
                allowDecimals={false}
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 11 }}
              />

              <YAxis
                type="category"
                dataKey="error_message"
                width={140}
                stroke="#64748b"
                tick={{ fill: "#cbd5e1", fontSize: 11 }}
              />

              <Tooltip
                formatter={(value) => [`${value} errors`, "Count"]}
                contentStyle={{
                  background: "#111c2e",
                  border: "1px solid #334760",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />

              <Bar
                dataKey="count"
                fill="#f97316"
                radius={[0, 6, 6, 0]}
                barSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Typography variant="body2" color="#94a3b8">
          Total recorded errors:{" "}
          <Box component="span" sx={{ color: "#f97316", fontWeight: "bold" }}>
            {totalErrors}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ErrorStatisticsChart;
