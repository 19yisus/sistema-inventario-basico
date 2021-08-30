CREATE DATABASE sistema_inventario;

CREATE TABLE tmoneda(
    id_moneda SERIAL,
    nombre_moneda character varying(150) NOT NULL,
    nombre_moneda_abreviado character varying(5) NOT NULL,
    estaus_moneda character(1) NOT NULL,
    constraint PK_id_moneda primary key(id_moneda)
);

CREATE TABLE tproducto(
    id_producto SERIAL,
    nombre_producto character varying(150) NOT NULL,
    estatus_producto character(1) NOT NULL,
    constraint PK_id_producto primary key(id_producto)
);

CREATE TABLE tdetalle_producto(
    id_detalle_producto SERIAL,
    id_producto INTEGER NOT NULL,
    nombre_detalle character varying(2000) NOT NULL,
    valor_detalle character varying(2000) NOT NULL,
    estatus_detalle_producto character(1) NOT NULL,
    constraint PK_id_detalle_producto primary key(id_detalle_producto),
    constraint FK_id_producto foreign key(id_producto) references tproducto(id_producto) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE timagen_producto(
    id_imagen_producto SERIAL,
    id_producto INTEGER NOT NULL,
    nombre_imagen_producto character varying(150) NOT NULL,
    extencion_imagen_producto character varying(5) NOT NULL,
    fecha_subida_imagen_producto DATE NOT NULL,
    estatus_imagen_producto character(1) NOT NULL,
    constraint PK_id_imagen_producto primary key(id_imagen_producto),
    constraint FK_id_producto foreign key(id_producto) references tproducto(id_producto) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tmedida(
    id_medida SERIAL,
    nombre_medida character varying(150) NOT NULL,
    nombre_abreviado character varying(5) NOT NULL,
    estatus_medida character(1) NOT NULL,
    constraint PK_id_medida primary key(id_medida)
);

CREATE TABLE tproveedor(
    id_proveedor SERIAL,
    nombre_proveedor character varying(150) NOT NULL,
    telefono_movil_proveedor character varying(20) NULL,
    telefono_local_proveedor character varying(20) NULL,
    estatus_proveedor character(1) NOT NULL,
    constraint PK_id_proveedor primary key(id_proveedor)
);

CREATE TABLE tentrada(
    id_entrada SERIAL,
    id_producto INTEGER NOT NULL,
    id_moneda INTEGER NOT NULL,
    id_medida INTEGER NOT NULL,
    id_proveedor INTEGER NOT NULL,
    precio_compra_entrada FLOAT NOT NULL,
    cantidad_entrada INTEGER NOT NULL,
    fecha_entrada DATE NOT NULL,
    hora_entrada TIME NOT NULL,
    estatus_entrada character(1) NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    constraint PK_id_entrada primary key(id_entrada),
    constraint FK_id_producto foreign key(id_producto) references tproducto(id_producto) ON DELETE CASCADE ON UPDATE CASCADE,
    constraint FK_id_medida foreign key(id_medida) references tmedida(id_medida) ON DELETE CASCADE ON UPDATE CASCADE,
    constraint FK_id_proveedor foreign key(id_proveedor) references tproveedor(id_proveedor) ON DELETE CASCADE ON UPDATE CASCADE,
    constraint FK_id_moneda foreign key(id_moneda) references tmoneda(id_moneda) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tinventario(
    id_inventario SERIAL,
    id_entrada INTEGER NOT NULL,
    cantidad_stock_inventario INTEGER NOT NULL,
    estatus_inventario character(1) NOT NULL,
    constraint PK_id_inventario primary key(id_inventario),
    constraint FK_id_entrada foreign key(id_entrada) references tentrada(id_entrada) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tsalida(
    id_salida SERIAL,
    id_inventario INTEGER NOT NULL,
    id_moneda INTEGER NOT NULL,
    cantidad_retirada INTEGER NOT NULL,
    precio_de_salida FLOAT NOT NULL,
    fecha_salida DATE NOT NULL,
    hora_salida TIME NOT NULL,
    constraint PK_id_salida primary key(id_moneda),
    constraint FK_id_inventario foreign key(id_inventario) references tinventario(id_inventario) ON DELETE CASCADE ON UPDATE CASCADE,
    constraint FK_id_moneda foreign key(id_moneda) references tmoneda(id_moneda) ON DELETE CASCADE ON UPDATE CASCADE
);