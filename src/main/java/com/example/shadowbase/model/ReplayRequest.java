package com.example.shadowbase.model;

public class ReplayRequest {
	    private String replayId;
	    private String migrationId;
	    private String schemaName;
	    private String status;

	    public ReplayRequest() {
	    }

	    public ReplayRequest(String replayId, String migrationId,
	                         String schemaName, String status) {
	        this.replayId = replayId;
	        this.migrationId = migrationId;
	        this.schemaName = schemaName;
	        this.status = status;
	    }

	    public String getReplayId() {
	        return replayId;
	    }

	    public void setReplayId(String replayId) {
	        this.replayId = replayId;
	    }

	    public String getMigrationId() {
	        return migrationId;
	    }

	    public void setMigrationId(String migrationId) {
	        this.migrationId = migrationId;
	    }

	    public String getSchemaName() {
	        return schemaName;
	    }

	    public void setSchemaName(String schemaName) {
	        this.schemaName = schemaName;
	    }

	    public String getStatus() {
	        return status;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }
}
