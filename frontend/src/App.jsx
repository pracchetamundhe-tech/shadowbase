import Editor from "@monaco-editor/react";
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
        bgcolor: "#0b1120",
        color: "#e2e8f0",
      }}
    >
      {/* Top navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "#111827",
          borderBottom: "1px solid #263247",
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
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
            bgcolor: "#111827",
            color: "#cbd5e1",
            borderRight: "1px solid #263247",
            pt: 9,
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
                mx: 1,
                mb: 0.5,
                borderRadius: 2,
                "&.Mui-selected": {
                  bgcolor: "#1e3a5f",
                  color: "#38bdf8",
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, minWidth: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {activePage}
            </Typography>
            <Typography color="#94a3b8" sx={{ mt: 0.5 }}>
              Monitor and safely test your database migrations.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ bgcolor: "#0284c7", textTransform: "none" }}
          >
            New Environment
          </Button>
        </Box>

        {/* Environment status */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: "#151f30",
                color: "white",
                border: "1px solid #263247",
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
                bgcolor: "#151f30",
                color: "white",
                border: "1px solid #263247",
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
  <Typography variant="h6" color="white">
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
          bgcolor: "#151f30",
          color: "white",
          border: "1px solid #263247",
          transition: "0.3s",
          "&:hover": {
            borderColor: "#3b82f6",
            transform: "translateY(-3px)",
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


        {/* Migration workspace */}
        <Card
          sx={{
            bgcolor: "#151f30",
            color: "white",
            border: "1px solid #263247",
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Code sx={{ color: "#38bdf8" }} />
                <Typography variant="h6">Migration Workspace</Typography>
              </Box>
              <Chip
                label={isModified ? "Unsaved Changes" : "Saved"}
                size="small"
                color={isModified ? "warning" : "success"}
              />{" "}
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
                height="350px"
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
                }}
              >
                Save
              </Button>

              <Button
                variant="contained"
                startIcon={<PlayArrow />}
                sx={{ textTransform: "none" }}
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
                }}
              >
                View Console
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Safety panel */}
        <Card
          sx={{
            bgcolor: "#151f30",
            color: "white",
            border: "1px solid #263247",
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
