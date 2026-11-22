
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Sample migration stage progress (demo data)
const migrationData = [
  { stage: "Schema Analysis", progress: 100, color: "#22c55e" },
  { stage: "Shadow Setup", progress: 80, color: "#38bdf8" },
  { stage: "Query Replay", progress: 65, color: "#818cf8" },
  { stage: "Validation", progress: 30, color: "#f59e0b" },
  { stage: "Cutover", progress: 0, color: "#64748b" },
];

function MigrationProgressChart() {
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
          Migration Progress
        </Typography>

        <Typography variant="body2" color="#94a3b8" sx={{ mt: 0.5, mb: 2 }}>
          Sample completion by migration stage
        </Typography>

        <Box sx={{ width: "100%", height: 260, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={migrationData}
              layout="vertical"
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                stroke="#263850"
                strokeDasharray="3 3"
                horizontal={false}
              />

              <XAxis
                type="number"
                domain={[0, 100]}
                stroke="#94a3b8"
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                unit="%"
              />

              <YAxis
                type="category"
                dataKey="stage"
                width={100}
                stroke="#94a3b8"
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                formatter={(value) => [`${value}%`, "Progress"]}
                contentStyle={{
                  background: "#111c2e",
                  border: "1px solid #334760",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />

              <Bar
                dataKey="progress"
                barSize={17}
                radius={[0, 6, 6, 0]}
                background={{ fill: "#1e293b", radius: 6 }}
              >
                {migrationData.map((entry) => (
                  <Cell key={entry.stage} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MigrationProgressChart;
