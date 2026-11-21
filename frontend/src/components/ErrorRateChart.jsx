import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for successful and failed queries
const errorData = [
  { name: "Successful", value: 97.6 },
  { name: "Failed", value: 2.4 },
];

// Colors for each section
const COLORS = ["#22c55e", "#ef4444"];

function ErrorRateChart() {
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
          Query Success Rate
        </Typography>

        <Typography variant="body2" color="#94a3b8" mb={2}>
          Sample successful vs failed queries
        </Typography>

        <Box sx={{ width: "100%", height: 250, position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={errorData}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={4}
              >
                {errorData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              2.4%
            </Typography>
            <Typography variant="caption" color="#94a3b8">
              Error Rate
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ErrorRateChart;