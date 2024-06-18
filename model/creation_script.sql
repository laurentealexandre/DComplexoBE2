CREATE TABLE `desafio`.`clientes` (
    `ID` INT(10) NULL AUTO_INCREMENT,
    `Nome` VARCHAR(255) NOT NULL,
    `Sobrenome` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Idade` INT(3) NOT NULL,
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

CREATE TABLE `desafio`.`produtos` (
    `ID` INT(10) NULL AUTO_INCREMENT,
    `Nome` VARCHAR(255) NOT NULL,
    `Descricao` VARCHAR(255) NOT NULL,
    `preco` DECIMAL(10) NOT NULL,
    `data_atualizado` DATETIME NOT NULL,
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
