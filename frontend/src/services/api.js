
// Read the backend URL from the environment configuration file
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export default API_BASE_URL;

// Reusable function to send HTTP requests to the backend
export const apiRequest = async (endpoint, options = {}) => {
  // Check whether the backend URL is configured
  if (!API_BASE_URL) {
    throw new Error(
      "Backend URL is not configured. Please check your .env file."
    );
  }

  let response;

  try {
    // Send the request to the Spring Boot backend
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        Accept: "application/json",
        ...options.headers,
      },
    });
  } catch (error) {
    // Handle connection failures when the backend is unavailable
    if (error.name === "AbortError") {
      throw error;
    }

    throw new Error(
      "Unable to connect to the backend. Please check whether the server is running."
    );
  }

  // Handle unsuccessful HTTP responses
  if (!response.ok) {
    let errorMessage = `Request failed with status ${response.status}`;

    try {
      const errorBody = await response.json();

      errorMessage =
        errorBody.message || errorBody.error || errorMessage;
    } catch {
      // Keep the default error message if the response is not JSON
    }

    throw new Error(errorMessage);
  }

  // Handle successful responses with no content
  if (response.status === 204) {
    return null;
  }

  // Check the response format before parsing
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
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
