// Read the backend URL from the environment configuration file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export default API_BASE_URL;                   //exporting the URL so that the other frontend files can use it
export const apiRequest = async (endpoint, options = {}) => {             // Reusable function to send HTTP requests to the backend

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);            // Send request to the Spring Boot backend


  if (!response.ok) {                                                        // Check whether the request was successful

    throw new Error(`API Error: ${response.status}`);
  }

  // Convert the backend response into JSON
  return response.json();
};

// Helper function to fetch data from the backend
export const getRequest = (endpoint) => {
  return apiRequest(endpoint, {
    method: "GET",
  });
};

// Helper function to send data to the backend
export const postRequest = (endpoint, data) => {
  return apiRequest(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// Fetch dashboard performance metrics from the backend
export const getMetrics = () => {
  return getRequest("/api/metrics");
};
// Fetch migration execution logs from the backend
export const getMigrationLogs = () => {
  return getRequest("/api/migrations/logs");
};
// Fetch the current migration execution status
export const getMigrationStatus = () => {
  return getRequest("/api/migrations/status");
};
// Send SQL migration queries to the backend for execution
export const executeMigration = (sql) => {
  return postRequest("/api/migrations/execute", { sql });
};