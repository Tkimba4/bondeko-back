create table services (
    id int PRIMARY key auto_increment,
    name varchar(255) not null,
    description (255),
    medecin_id int not null,
    create_at datetime not null default now(),
    update_at datetime not null default now()
);

create table users (
    id int primary key auto_increment,
    email varchar(255) not null unique,
    password varchar(255) not null,
    name varchar(255) not null,
    role enum('reception', "medecin") not null,
    service_id int default null,
    Foreign Key (service_id) REFERENCES services (id)
) engine = innodb;

create table reseravations (
    id int PRIMARY key auto_increment,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    sex char(1),
    birthday date not null,
    email varchar(255) not null,
    tel varchar(255),
    day_date date not null default now(),
    day_time enum("beforenoon", "afternoon") default "beforenoon",
    service_id int not null,
    reson text,
    state enum(
        "waiting",
        "confirmed",
        "canceled"
    ),
    medecin_id int default null,
    created_at datetime not null default now(),
    update_at datetime not null default now(),
    Foreign Key (service_id) REFERENCES services (id),
    Foreign Key (medecin_id) REFERENCES users (id)
) engine = innodb;