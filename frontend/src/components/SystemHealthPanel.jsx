
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

// Demo health information until backend APIs are connected
const healthItems = [
  {
    name: "Backend API",
    status: "Offline",
    description: "Spring Boot server is not connected",
    color: "error",
  },
  {
    name: "Production Database",
    status: "Not Connected",
    description: "MySQL production connection pending",
    color: "warning",
  },
  {
    name: "Shadow Database",
    status: "Not Created",
    description: "Waiting for sandbox initialization",
    color: "warning",
  },
  {
    name: "CDC Stream",
    status: "Inactive",
    description: "Debezium / Kafka connection pending",
    color: "default",
  },
];

function SystemHealthPanel() {
  return (
    <Box sx={{ width: "100%", mt: 3, mb: 3 }}>
      {/* Health monitoring section */}
      <Typography variant="h5" fontWeight="bold" color="white" sx={{ mb: 0.5 }}>
        System Health
      </Typography>

      <Typography variant="body2" color="#94a3b8" sx={{ mb: 2 }}>
        Connection and service monitoring
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {healthItems.map((item) => (
          <Card
            key={item.name}
            sx={{
              background: "linear-gradient(145deg, #111c2e, #0b1423)",
              border: "1px solid #263850",
              borderRadius: 3,
              color: "white",
            }}
          >
            <CardContent>
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                {item.name}
              </Typography>

              <Chip
                label={item.status}
                color={item.color}
                size="small"
                sx={{ mb: 1.5 }}
              />

              <Typography variant="body2" color="#94a3b8">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Container status section */}
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        sx={{ mt: 4, mb: 0.5 }}
      >
        Container Status
      </Typography>

      <Typography variant="body2" color="#94a3b8" sx={{ mb: 2 }}>
        Shadow database container information
      </Typography>

      <Card
        sx={{
          background: "linear-gradient(145deg, #111c2e, #0b1423)",
          border: "1px solid #263850",
          borderRadius: 3,
          color: "white",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                MySQL Shadow Container
              </Typography>

              <Typography variant="body2" color="#94a3b8" sx={{ mt: 1 }}>
                Database image: MySQL 8.0
              </Typography>

              <Typography variant="body2" color="#94a3b8" sx={{ mt: 0.5 }}>
                Container ID: Not assigned
              </Typography>
            </Box>

            <Chip
              label="Not Created"
              color="warning"
              variant="outlined"
            />
          </Box>

          <Typography variant="body2" color="#94a3b8" sx={{ mt: 2 }}>
            The shadow container will be created when the backend
            Testcontainers integration is available.
          </Typography>

          <Chip
            label="DEMO STATUS"
            size="small"
            sx={{
              mt: 2,
              color: "#38bdf8",
              backgroundColor: "rgba(56,189,248,0.12)",
              fontSize: "0.65rem",
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default SystemHealthPanel;
