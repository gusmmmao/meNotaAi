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

create table avaliacoes(
    id_avaliacao int primary key auto_increment,
    id_funcionario int not null,
    valor_avaliacao int not null,
    data_criacao date not null 
);

alter table avaliacoes
add constraint fk_avaliacao_funcionario
foreign key avaliacoes(id_funcionario) references funcionarios(id_funcionario);

alter table funcionarios
add constraint fk_funcionario_equipe
foreign key funcionarios(id_equipe) references equipes(id_equipe);

select * from equipes;