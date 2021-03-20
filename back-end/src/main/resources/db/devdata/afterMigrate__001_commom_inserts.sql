-- USER INSERTS ===============================================================================================
--all passwords -> 123mudar
INSERT INTO tb_user (id, name, email, password) VALUES
('f9196784-68c2-4c77-925f-697736bfa4be', 'ADMIN', 'ADMIN@SECURITY.COM', '$2a$10$HbkcKvHkftuxfuvufZ/dy.YSrBc2F.aQxmT4VzFD1aE2XPQC6Nviu'),
('db05ff1b-a9f3-4c82-b442-f68a45826c58', 'USER', 'USER@SECURITY.COM', '$2a$10$HbkcKvHkftuxfuvufZ/dy.YSrBc2F.aQxmT4VzFD1aE2XPQC6Nviu')
ON CONFLICT DO NOTHING;

-- AUTHORITY INSERTS ============================================================================================
INSERT INTO tb_authority (id, code, description) VALUES
('a8ac0446-fe74-4007-aeaf-9fd3e8432ca2', 'SECCOL', 'ROLE_CREATE_COLOR'),
('bfa96b84-9499-4fab-8a20-3499ee9010e8', 'SERCOL', 'ROLE_READ_COLOR')
ON CONFLICT DO NOTHING;

INSERT INTO tb_user_authority (user_id, authority_id) VALUES
('f9196784-68c2-4c77-925f-697736bfa4be', 'a8ac0446-fe74-4007-aeaf-9fd3e8432ca2'), -- ROLE_CREATE_COLOR
('f9196784-68c2-4c77-925f-697736bfa4be', 'bfa96b84-9499-4fab-8a20-3499ee9010e8')  -- ROLE_READ_COLOR
ON CONFLICT DO NOTHING;
