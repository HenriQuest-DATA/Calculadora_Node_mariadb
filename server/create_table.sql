CREATE TABLE `calcnode` (
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	`conta` VARCHAR(150) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`resultado` FLOAT NULL DEFAULT NULL,
	`data` DATE NULL DEFAULT NULL,
	`hora` TIME NULL DEFAULT NULL,
	INDEX `ID` (`ID`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=15;