
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
          Query Success Rate
        </Typography>

        <Typography variant="body2" color="#94a3b8" sx={{ mt: 0.5, mb: 2 }}>
          Sample successful vs failed queries
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: 260,
            minWidth: 0,
            position: "relative",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={errorData}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={4}
                stroke="none"
              >
                {errorData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{
                  background: "#111c2e",
                  border: "1px solid #334760",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Error rate displayed in the centre */}
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
            <Typography variant="h5" fontWeight="bold" color="#f87171">
              2.4%
            </Typography>

            <Typography variant="caption" color="#94a3b8">
              Error Rate
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
          {errorData.map((item, index) => (
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
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ErrorRateChart;
