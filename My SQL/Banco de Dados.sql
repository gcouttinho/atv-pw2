 ### CRIANDO BANCO DE DADOS
CREATE DATABASE atv_pw2;

 ### USANDO BANCO DE DADOS CRIADO
USE atv_pw2;

 ### CRIANDO TABELA DE PRODUTOS
CREATE TABLE tbl_produto(
	codigo_produto INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    codigo_categoria INT UNSIGNED NOT NULL,
    nome_produto VARCHAR(255) NOT NULL,
    valor_produto DECIMAL(10,2) NOT NULL,
    imagem_produto VARCHAR(500) NOT NULL,
    descricao_produto TEXT NOT NULL
);

 ### CRIANDO TABELA DE CATEGORIAS
CREATE TABLE tbl_categoria(
	codigo_categoria INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL,
    observacoes_categoria TEXT NOT NULL
);

 ### ALTERANDO O CODIGO DA CATEGORIA PARA UMA FOREIGN KEY
ALTER TABLE tbl_produto ADD CONSTRAINT fk_tbl_categoria
FOREIGN KEY (codigo_categoria)
REFERENCES tbl_categoria(codigo_categoria)