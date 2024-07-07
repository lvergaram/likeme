DROP TABLE IF EXISTS canciones;

CREATE TABLE canciones (
	id SERIAL PRIMARY KEY, 
	titulo VARCHAR(50), 
	artista VARCHAR(50), 
	tono VARCHAR(10))
;

-- semilla

INSERT INTO canciones(titulo,artista,tono) 
VALUES
('BYE BYE BYE','N SYNC','B7'),
('MOLINOS DE VIENTO','MAGO DE OZ','B8');


SELECT * FROM canciones;