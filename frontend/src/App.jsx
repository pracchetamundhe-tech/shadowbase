import Editor from "@monaco-editor/react";
import QueryActivityChart from "./components/QueryActivityChart";
import ErrorRateChart from "./components/ErrorRateChart";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  Grid,
} from "@mui/material";

import {
  Dashboard,
  Code,
  Storage,
  Refresh,
  History,
  Settings,
  PlayArrow,
  Add,
  Terminal,
  Shield,
  Cloud,
} from "@mui/icons-material";

const drawerWidth = 240;

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sqlCode, setSqlCode] = useState(`-- Write your migration SQL here

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`);
  const [isModified, setIsModified] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Dashboard /> },
    { name: "Migration Editor", icon: <Code /> },
    { name: "Environments", icon: <Storage /> },
    { name: "Migration History", icon: <History /> },
    { name: "Settings", icon: <Settings /> },
  ];

  const [metrics, setMetrics] = useState([
    {
      title: "Queries Replayed",
      value: "1,250",
      detail: "Total queries processed",
    },
    {
      title: "Error Rate",
      value: "2.4%",
      detail: "30 failed queries",
    },
    {
      title: "Successful Queries",
      value: "1,220",
      detail: "Queries executed successfully",
    },
  ]);

  const handleRefreshMetrics = () => {
    setMetrics([
      {
        title: "Queries Replayed",
        value: "1,300",
        detail: "Total queries processed",
      },
      {
        title: "Error Rate",
        value: "2.3%",
        detail: "30 failed queries",
      },
      {
        title: "Successful Queries",
        value: "1,270",
        detail: "Queries executed successfully",
      },
    ]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #080d18 0%, #101b2d 55%, #0b1220 100%)",
        color: "#e2e8f0",
      }}
    >
      {/* Top navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(15, 23, 42, 0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #263b55",
          zIndex: 1201,
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "72px",
            px: 3,
            background: "linear-gradient(90deg, #111c2e, #131f33)",
          }}
        >
          {" "}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Shield sx={{ color: "#38bdf8", fontSize: 30 }} />
            <Typography variant="h6" fontWeight="bold">
              ShadowBase
            </Typography>
            <Chip
              label="MIGRATION SANDBOX"
              size="small"
              sx={{ color: "#38bdf8", bgcolor: "#172c43" }}
            />
          </Box>
          <Chip
            icon={<Cloud />}
            label="Sandbox Offline"
            sx={{ color: "#fbbf24", bgcolor: "#302718" }}
          />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #111c2e 0%, #0c1422 100%)",
            color: "#cbd5e1",
            borderRight: "1px solid #263b55",
            pt: 10,
            boxShadow: "8px 0 30px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box sx={{ px: 2, py: 2 }}>
          <Typography variant="caption" color="#64748b">
            WORKSPACE
          </Typography>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.name}
              selected={activePage === item.name}
              onClick={() => setActivePage(item.name)}
              sx={{
                mx: 1.5,
                mb: 1,
                py: 1.3,
                borderRadius: 2,
                color: "#94a3b8",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "rgba(56, 189, 248, 0.08)",
                  color: "#e0f2fe",
                  transform: "translateX(3px)",
                },
                "&.Mui-selected": {
                  background:
                    "linear-gradient(90deg, rgba(14,165,233,0.22), rgba(14,165,233,0.04))",
                  color: "#38bdf8",
                  borderLeft: "3px solid #38bdf8",
                },
                "&.Mui-selected:hover": {
                  bgcolor: "rgba(56, 189, 248, 0.16)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: "auto", p: 2 }}>
          <Divider sx={{ borderColor: "#263247", mb: 2 }} />
          <Typography variant="caption" color="#64748b">
            SHADOWBASE
          </Typography>
          <Typography variant="body2" color="#94a3b8">
            Zero-Downtime Schema Migration
          </Typography>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          mt: 9,
          minWidth: 0,
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.7rem", md: "2rem" },
                letterSpacing: "-0.8px",
                background: "linear-gradient(90deg, #ffffff, #93c5fd)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {activePage}
            </Typography>
            <Typography color="#94a3b8" sx={{ mt: 0.5 }}>
              Monitor and safely test your database migrations.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              background: "linear-gradient(90deg, #0284c7, #2563eb)",
              color: "#ffffff",
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              py: 1,
              boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
              "&:hover": {
                background: "linear-gradient(90deg, #0369a1, #1d4ed8)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 18px rgba(37,99,235,0.35)",
              },
            }}
          >
            New Environment
          </Button>
        </Box>
        {/* Environment status */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "linear-gradient(145deg, #19263a, #111c2e)",
                color: "white",
                border: "1px solid #293b55",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#38bdf8",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                <Typography color="#94a3b8" variant="body2">
                  PRODUCTION DATABASE
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                >
                  <Storage sx={{ color: "#38bdf8" }} />
                  <Typography variant="h6">MySQL</Typography>
                  <Chip label="Not connected" size="small" color="warning" />
                </Box>
                <Typography variant="caption" color="#64748b">
                  Source database environment
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "linear-gradient(145deg, #19263a, #111c2e)",
                color: "white",
                border: "1px solid #293b55",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#38bdf8",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                <Typography color="#94a3b8" variant="body2">
                  SHADOW DATABASE
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                >
                  <Storage sx={{ color: "#a78bfa" }} />
                  <Typography variant="h6">MySQL Sandbox</Typography>
                  <Chip label="Not created" size="small" color="warning" />
                </Box>
                <Typography variant="caption" color="#64748b">
                  Isolated migration testing environment
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Metrics */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "#e2e8f0",
              letterSpacing: "0.3px",
            }}
          >
            Performance Metrics
          </Typography>

          <Button
            variant="outlined"
            size="small"
            startIcon={<Refresh />}
            onClick={handleRefreshMetrics}
            sx={{
              color: "#60a5fa",
              borderColor: "#3b82f6",
            }}
          >
            Refresh Metrics
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={4} key={metric.title}>
              <Card
                sx={{
                  background: "linear-gradient(145deg, #19263a, #111c2e)",
                  color: "white",
                  border: "1px solid #293b55",
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#38bdf8",
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 30px rgba(56,189,248,0.10)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography color="#94a3b8" variant="body2">
                      {metric.title}
                    </Typography>

                    <Box
                      sx={{
                        color: ["#60a5fa", "#f87171", "#4ade80"][index],
                        fontSize: "22px",
                      }}
                    >
                      {["↻", "⚠", "✓"][index]}
                    </Box>
                  </Box>

                  <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
                    {metric.value}
                  </Typography>

                  <Typography variant="caption" color="#64748b">
                    {metric.detail}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Query activity visualization */}
        <QueryActivityChart />
        {/* Query success and failure visualization */}
<ErrorRateChart />
        {/* Migration workspace */}
        <Card
          sx={{
            background: "linear-gradient(145deg, #19263a, #111c2e)",
            color: "white",
            border: "1px solid #293b55",
            borderRadius: 3,
            boxShadow: "0 10px 28px rgba(0,0,0,0.2)",
            mb: 3,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Code sx={{ color: "#38bdf8" }} />
                <Typography variant="h6" fontWeight="bold">
                  Migration Workspace
                </Typography>
              </Box>

              <Chip
                label={isModified ? "Unsaved Changes" : "Saved"}
                size="small"
                color={isModified ? "warning" : "success"}
              />
            </Box>
            <Box
              sx={{
                bgcolor: "#0b1120",
                border: "1px solid #263247",
                borderRadius: 2,
                p: 3,
                minHeight: 180,
              }}
            >
              <Editor
                height="280px"
                defaultLanguage="sql"
                theme="vs-dark"
                value={sqlCode}
                onChange={(value) => {
                  setSqlCode(value || "");
                  setIsModified(true);
                }}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => {
                  setSqlCode(`-- Write your migration SQL here

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`);
                  setIsModified(false);
                }}
                sx={{
                  color: "#cbd5e1",
                  borderColor: "#475569",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    borderColor: "#38bdf8",
                    background: "rgba(56,189,248,0.08)",
                  },
                }}
              >
                Reset
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  const blob = new Blob([sqlCode], { type: "text/sql" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "migration.sql";
                  link.click();
                  setIsModified(false);
                  URL.revokeObjectURL(url);
                }}
                sx={{
                  color: "#cbd5e1",
                  borderColor: "#475569",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    borderColor: "#38bdf8",
                    background: "rgba(56,189,248,0.08)",
                  },
                }}
              >
                Save
              </Button>

              <Button
                variant="contained"
                startIcon={<PlayArrow />}
                sx={{
                  background: "linear-gradient(90deg, #0284c7, #2563eb)",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.2)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0369a1, #1d4ed8)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Run Migration
              </Button>

              <Button
                variant="outlined"
                startIcon={<Terminal />}
                sx={{
                  color: "#cbd5e1",
                  borderColor: "#475569",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    borderColor: "#38bdf8",
                    background: "rgba(56,189,248,0.08)",
                  },
                }}
              >
                View Console
              </Button>
            </Box>
          </CardContent>
        </Card>
        {/* Migration Execution Status */}
        <Card
          sx={{
            background: "linear-gradient(145deg, #19263a, #111c2e)",
            color: "white",
            border: "1px solid #293b55",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            mb: 3,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6">Migration Execution Status</Typography>
              <Chip label="Not Started" color="warning" size="small" />
            </Box>

            <Typography color="#94a3b8" variant="body2">
              Latest Migration
            </Typography>

            <Typography sx={{ mt: 1 }}>
              Schema Migration – users table
            </Typography>

            <Typography variant="caption" color="#64748b">
              Waiting for migration execution
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
                mt: 3,
              }}
            >
              <Box>
                <Typography variant="caption" color="#94a3b8">
                  Execution Time
                </Typography>
                <Typography color="white">Not available</Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="#94a3b8">
                  Last Updated
                </Typography>
                <Typography color="white">Not available</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        {/* Migration Logs */}
        <Card
          sx={{
            background: "linear-gradient(145deg, #19263a, #111c2e)",
            color: "white",
            border: "1px solid #293b55",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            mb: 3,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6">Migration Logs</Typography>
              <Chip label="Sample Logs" size="small" color="info" />
            </Box>

            <Box
              sx={{
                bgcolor: "#0b1220",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography color="#64748b" variant="caption" display="block">
                10:30:01 AM
              </Typography>
              <Typography color="#4ade80" variant="body2" sx={{ mb: 1 }}>
                [INFO] ShadowBase dashboard initialized
              </Typography>

              <Typography color="#64748b" variant="caption" display="block">
                10:30:05 AM
              </Typography>
              <Typography color="#4ade80" variant="body2" sx={{ mb: 1 }}>
                [INFO] SQL editor is ready
              </Typography>

              <Typography color="#64748b" variant="caption" display="block">
                10:30:10 AM
              </Typography>
              <Typography color="#fbbf24" variant="body2">
                [WAITING] Awaiting migration execution
              </Typography>
            </Box>
          </CardContent>
        </Card>
        {/* Safety panel */}
        <Card
          sx={{
            background: "linear-gradient(145deg, #19263a, #111c2e)",
            color: "white",
            border: "1px solid #293b55",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Shield sx={{ color: "#38bdf8" }} />
              <Typography variant="h6">Migration Safety</Typography>
            </Box>
            <Typography color="#94a3b8" sx={{ mt: 1 }}>
              Safety analysis will be available after migration testing.
            </Typography>
            <Typography variant="caption" color="#64748b">
              No safety score available yet – waiting for actual test results.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default App;
