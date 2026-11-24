package com.example.shadowbase.model;

public class MigrationEvent {
	    private String migrationId;
	    private String schemaName;
	    private String oldVersion;
	    private String newVersion;
	    private String status;

	    public MigrationEvent() {
	    }

	    public MigrationEvent(String migrationId, String schemaName,
	                         String oldVersion, String newVersion,
	                         String status) {
	        this.migrationId = migrationId;
	        this.schemaName = schemaName;
	        this.oldVersion = oldVersion;
	        this.newVersion = newVersion;
	        this.status = status;
	    }

	    public String getMigrationId() {
	        return migrationId;
	    }

	    public String getSchemaName() {
	        return schemaName;
	    }

	    public String getOldVersion() {
	        return oldVersion;
	    }

	    public String getNewVersion() {
	        return newVersion;
	    }

	    public String getStatus() {
	        return status;
	    }

	    public void setMigrationId(String migrationId) {
	        this.migrationId = migrationId;
	    }

	    public void setSchemaName(String schemaName) {
	        this.schemaName = schemaName;
	    }

	    public void setOldVersion(String oldVersion) {
	        this.oldVersion = oldVersion;
	    }

	    public void setNewVersion(String newVersion) {
	        this.newVersion = newVersion;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }
	}
