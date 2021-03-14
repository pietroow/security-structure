CREATE TABLE tb_user (
	id uuid PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(80) NOT NULL
);

CREATE TABLE tb_permission (
	id UUID PRIMARY KEY,
	description VARCHAR(50) NOT NULL
);

CREATE TABLE tb_user_permission (
	user_id UUID NOT NULL,
	permission_id UUID NOT NULL,
	PRIMARY KEY (user_id, permission_id),
	FOREIGN KEY (user_id) REFERENCES tb_user(id),
	FOREIGN KEY (permission_id) REFERENCES tb_permission(id)
);