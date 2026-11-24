CREATE TABLE migration_errors(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    query_text TEXT,
    error_message TEXT,
    error_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE replay_logs(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    query_text TEXT,
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);