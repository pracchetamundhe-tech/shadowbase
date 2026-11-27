
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example data based on the backend team's expected response
// These are demo values until the backend API is connected
const errorData = [
  { status: "SUCCESS", count: 3 },
  { status: "FAILURE", count: 1 },
];

// Colors for successful and failed queries
const COLORS = ["#22c55e", "#ef4444"];

function ErrorRateChart() {
  // Convert backend-style data into the format required by Recharts
  const chartData = errorData.map((item) => ({
    name: item.status === "SUCCESS" ? "Successful" : "Failed",
    value: item.count,
  }));

  // Calculate the total number of queries
  const totalQueries = chartData.reduce(
    (total, item) => total + item.value,
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
          Success vs Failure
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5, mb: 2 }}>
          <Typography variant="body2" color="#94a3b8">
            Query execution results
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

        <Box sx={{ width: "100%", height: 260, position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={4}
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name) => [`${value} queries`, name]}
                contentStyle={{
                  background: "#111c2e",
                  border: "1px solid #334760",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Display total queries in the centre */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="white">
              {totalQueries}
            </Typography>

            <Typography variant="caption" color="#94a3b8">
              Total Queries
            </Typography>
          </Box>
        </Box>

        {/* Chart legend */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {chartData.map((item, index) => (
            <Box
              key={item.name}
              sx={{ display: "flex", alignItems: "center", gap: 0.7 }}
            >
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: COLORS[index],
                }}
              />

              <Typography variant="caption" color="#94a3b8">
                {item.name}: {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ErrorRateChart;
