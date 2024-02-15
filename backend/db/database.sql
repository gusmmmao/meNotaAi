create database meNotaAiBdD;
use meNotaAiBdD;

create table funcionarios(
id_funcionario int primary key auto_increment,
nome_usuario varchar(200) not null,
email varchar(200) not null,
cargo varchar(200) not null,
atividade varchar(200) not null,
id_equipe int not null
);

create table equipes(
id_equipe int primary key auto_increment,
nome_equipe varchar(200) not null,
setor varchar(200) not null
);