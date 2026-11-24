-- Success vs Failure

SELECT status, COUNT(*) AS count
FROM replay_logs
GROUP BY status;

-- Error Types

SELECT error_message,
COUNT(*) AS count
FROM migration_errors
GROUP BY error_message;

-- Total Errors

SELECT COUNT(*) AS total_errors
FROM migration_errors;