CREATE TABLE tb_user (
	id uuid PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(80) NOT NULL
);

CREATE TABLE tb_authority (
	id UUID PRIMARY KEY,
	code VARCHAR(50),
	description VARCHAR(50) NOT NULL
);

CREATE TABLE tb_user_authority (
	user_id UUID NOT NULL,
	authority_id UUID NOT NULL,
	PRIMARY KEY (user_id, authority_id),
	FOREIGN KEY (user_id) REFERENCES tb_user(id),
	FOREIGN KEY (authority_id) REFERENCES tb_authority(id)
);