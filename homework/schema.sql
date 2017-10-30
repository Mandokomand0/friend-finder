create database friend_finder_db;
	use friend_finder_db;
	create table friends(
		id int(11) auto_increment primary key not null,
        username varchar(255) not null,
        email varchar(255) not null,
        rick_love int(11) not null,
        sanity int(11) not null,
        nerd int(11) not null,
        cosplay int(11) not null,
        avatar int(11) not null,
        quantum int(11) not null,
        astro int(11) not null,
        archaeology int(11) not null,
        alcohol int(11) not null,
        horror int(11) not null
		);
insert into friends (username, email, rick_love, sanity, nerd, cosplay, avatar, quantum, astro, archaeology, alcohol, horror)
values ("PickleRICK", "shwiftyRick@gmail.com", 5, 2, 3, 1, 1, 5, 5, 5, 5, 3);
insert into friends (username, email, rick_love, sanity, nerd, cosplay, avatar, quantum, astro, archaeology, alcohol, horror)
values ("Alucard", "fuckmothervampire@yahoo.com", 1, 1, 1, 1, 1, 1, 1, 1, 5, 5);