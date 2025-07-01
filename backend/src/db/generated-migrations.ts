// 此文件由 generate-migrations.ts 自动生成
// 请不要手动修改

export interface Migration {
  name: string;
  sql: string;
}

export const MIGRATIONS: Migration[] = [
  {
    name: "0000_romantic_next_avengers.sql",
    sql: `CREATE TABLE IF NOT EXISTS \`agent_metrics_24h\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`agent_id\` integer NOT NULL,
	\`timestamp\` text DEFAULT 'CURRENT_TIMESTAMP',
	\`cpu_usage\` real,
	\`cpu_cores\` integer,
	\`cpu_model\` text,
	\`memory_total\` integer,
	\`memory_used\` integer,
	\`memory_free\` integer,
	\`memory_usage_rate\` real,
	\`load_1\` real,
	\`load_5\` real,
	\`load_15\` real,
	\`disk_metrics\` text,
	\`network_metrics\` text,
	FOREIGN KEY (\`agent_id\`) REFERENCES \`agents\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`agents\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`name\` text NOT NULL,
	\`token\` text NOT NULL,
	\`created_by\` integer NOT NULL,
	\`status\` text DEFAULT 'inactive',
	\`created_at\` text NOT NULL,
	\`updated_at\` text NOT NULL,
	\`hostname\` text,
	\`ip_addresses\` text,
	\`os\` text,
	\`version\` text,
	\`keepalive\` text,
	\`cpu_usage\` real,
	\`memory_total\` integer,
	\`memory_used\` integer,
	\`disk_total\` integer,
	\`disk_used\` integer,
	\`network_rx\` integer,
	\`network_tx\` integer,
	FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS \`agents_token_unique\` ON \`agents\` (\`token\`);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`monitor_daily_stats\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`monitor_id\` integer NOT NULL,
	\`date\` text NOT NULL,
	\`total_checks\` integer DEFAULT 0 NOT NULL,
	\`up_checks\` integer DEFAULT 0 NOT NULL,
	\`down_checks\` integer DEFAULT 0 NOT NULL,
	\`avg_response_time\` integer DEFAULT 0,
	\`min_response_time\` integer DEFAULT 0,
	\`max_response_time\` integer DEFAULT 0,
	\`availability\` real DEFAULT 0,
	\`created_at\` text NOT NULL,
	FOREIGN KEY (\`monitor_id\`) REFERENCES \`monitors\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`monitor_status_history_24h\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`monitor_id\` integer NOT NULL,
	\`status\` text NOT NULL,
	\`timestamp\` text DEFAULT 'CURRENT_TIMESTAMP',
	\`response_time\` integer,
	\`status_code\` integer,
	\`error\` text,
	FOREIGN KEY (\`monitor_id\`) REFERENCES \`monitors\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`monitors\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`name\` text NOT NULL,
	\`url\` text NOT NULL,
	\`method\` text NOT NULL,
	\`interval\` integer NOT NULL,
	\`timeout\` integer NOT NULL,
	\`expected_status\` integer NOT NULL,
	\`headers\` text NOT NULL,
	\`body\` text,
	\`created_by\` integer NOT NULL,
	\`active\` integer NOT NULL,
	\`status\` text DEFAULT 'pending',
	\`response_time\` integer DEFAULT 0,
	\`last_checked\` text,
	\`created_at\` text NOT NULL,
	\`updated_at\` text NOT NULL,
	FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`notification_channels\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`name\` text NOT NULL,
	\`type\` text NOT NULL,
	\`config\` text NOT NULL,
	\`enabled\` integer DEFAULT 1 NOT NULL,
	\`created_by\` integer NOT NULL,
	\`created_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	\`updated_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`notification_history\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`type\` text NOT NULL,
	\`target_id\` integer,
	\`channel_id\` integer NOT NULL,
	\`template_id\` integer NOT NULL,
	\`status\` text NOT NULL,
	\`content\` text NOT NULL,
	\`error\` text,
	\`sent_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (\`channel_id\`) REFERENCES \`notification_channels\`(\`id\`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (\`template_id\`) REFERENCES \`notification_templates\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`notification_settings\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`user_id\` integer NOT NULL,
	\`target_type\` text DEFAULT 'global' NOT NULL,
	\`target_id\` integer,
	\`enabled\` integer DEFAULT 1 NOT NULL,
	\`on_down\` integer DEFAULT 1 NOT NULL,
	\`on_recovery\` integer DEFAULT 1 NOT NULL,
	\`on_offline\` integer DEFAULT 1 NOT NULL,
	\`on_cpu_threshold\` integer DEFAULT 0 NOT NULL,
	\`cpu_threshold\` integer DEFAULT 90 NOT NULL,
	\`on_memory_threshold\` integer DEFAULT 0 NOT NULL,
	\`memory_threshold\` integer DEFAULT 85 NOT NULL,
	\`on_disk_threshold\` integer DEFAULT 0 NOT NULL,
	\`disk_threshold\` integer DEFAULT 90 NOT NULL,
	\`channels\` text DEFAULT '[]',
	\`created_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	\`updated_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`notification_templates\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`name\` text NOT NULL,
	\`type\` text NOT NULL,
	\`subject\` text NOT NULL,
	\`content\` text NOT NULL,
	\`is_default\` integer DEFAULT 0 NOT NULL,
	\`created_by\` integer NOT NULL,
	\`created_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	\`updated_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (\`created_by\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`status_page_agents\` (
	\`config_id\` integer NOT NULL,
	\`agent_id\` integer NOT NULL,
	PRIMARY KEY(\`config_id\`, \`agent_id\`),
	FOREIGN KEY (\`config_id\`) REFERENCES \`status_page_config\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`agent_id\`) REFERENCES \`agents\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`status_page_config\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`user_id\` integer NOT NULL,
	\`title\` text DEFAULT '系统状态' NOT NULL,
	\`description\` text DEFAULT '系统当前运行状态',
	\`logo_url\` text DEFAULT '',
	\`custom_css\` text DEFAULT '',
	\`created_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	\`updated_at\` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`status_page_monitors\` (
	\`config_id\` integer NOT NULL,
	\`monitor_id\` integer NOT NULL,
	PRIMARY KEY(\`config_id\`, \`monitor_id\`),
	FOREIGN KEY (\`config_id\`) REFERENCES \`status_page_config\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`monitor_id\`) REFERENCES \`monitors\`(\`id\`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS \`users\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`username\` text NOT NULL,
	\`password\` text NOT NULL,
	\`email\` text,
	\`role\` text NOT NULL,
	\`created_at\` text NOT NULL,
	\`updated_at\` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS \`users_username_unique\` ON \`users\` (\`username\`);`
  },
  {
    name: "0001_fluffy_pestilence.sql",
    sql: `ALTER TABLE \`agents\` DROP COLUMN \`cpu_usage\`;
--> statement-breakpoint
ALTER TABLE \`agents\` DROP COLUMN \`memory_total\`;
--> statement-breakpoint
ALTER TABLE \`agents\` DROP COLUMN \`memory_used\`;
--> statement-breakpoint
ALTER TABLE \`agents\` DROP COLUMN \`disk_total\`;
--> statement-breakpoint
ALTER TABLE \`agents\` DROP COLUMN \`disk_used\`;
--> statement-breakpoint
ALTER TABLE \`agents\` DROP COLUMN \`network_rx\`;
--> statement-breakpoint
ALTER TABLE \`agents\` DROP COLUMN \`network_tx\`;`
  },
  {
    name: "0002_public_domino.sql",
    sql: `CREATE INDEX IF NOT EXISTS \`agent_metrics_24h_agent_timestamp_idx\` ON \`agent_metrics_24h\` (\`agent_id\`,\`timestamp\`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS \`monitor_daily_stats_monitor_id_date_idx\` ON \`monitor_daily_stats\` (\`monitor_id\`,\`date\`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS \`monitor_status_history_24h_monitor_timestamp_idx\` ON \`monitor_status_history_24h\` (\`monitor_id\`,\`timestamp\`);`
  },
  {
    name: "0003_reflective_random.sql",
    sql: `CREATE INDEX IF NOT EXISTS \`monitor_status_history_24h_timestamp_idx\` ON \`monitor_status_history_24h\` (\`timestamp\`);`
  }
];
