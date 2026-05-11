CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `theme` varchar(255) DEFAULT NULL,
  `description` text,
  `details` text,
  `meta` json DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client` varchar(255) NOT NULL COMMENT 'Name of the client',
  `name` varchar(255) NOT NULL COMMENT 'Name of the project',
  `year` int NOT NULL COMMENT 'Year the project was completed or started',
  `companyId` int NOT NULL COMMENT 'Associated company ID',
  `paragraphs` json NOT NULL COMMENT 'Array of paragraph descriptions for the project',
  `metaImage` varchar(255) NOT NULL COMMENT 'Path to meta image for social media',
  `metaDescription` varchar(255) NOT NULL COMMENT 'Meta description for SEO or sharing',
  `videoLink` varchar(255) DEFAULT NULL COMMENT 'Optional video URL',
  `videoTheme` varchar(255) DEFAULT NULL COMMENT 'Optional theme identifier for the video',
  `image` varchar(255) DEFAULT NULL COMMENT 'Optional main image for the project',
  `externalLink` varchar(255) DEFAULT NULL COMMENT 'Optional external project link',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tech` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT 'Name of the technology/tool',
  `icon` varchar(255) NOT NULL COMMENT 'Icon identifier (e.g. material icon name)',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyId` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `dateFrom` date NOT NULL COMMENT 'Start date of the job (defaults to first of the month)',
  `dateTo` date DEFAULT NULL COMMENT 'End date of the job (defaults to first of the month)',
  `description` text NOT NULL,
  `bulletpoints` text NOT NULL,
  `tech` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `companyId` (`companyId`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE
);

CREATE TABLE `testimonials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT 'Name of the person giving the testimonial',
  `companyId` int NOT NULL COMMENT 'Reference to the company ID',
  `position` varchar(255) DEFAULT NULL COMMENT 'Job position of the person',
  `link` varchar(255) DEFAULT NULL COMMENT 'Link to LinkedIn or personal profile',
  `quote` varchar(255) NOT NULL COMMENT 'Short quote or summary of the testimonial',
  `fullText` text NOT NULL COMMENT 'Full testimonial text',
  `media` varchar(255) DEFAULT NULL COMMENT 'Optional media reference (e.g. image or icon name)',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `awards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyId` int NOT NULL COMMENT 'ID of the company that received the award',
  `projectId` int NOT NULL COMMENT 'ID of the project that won the award',
  `prize` varchar(255) NOT NULL COMMENT 'Name of the prize or award',
  `icon` varchar(255) DEFAULT NULL COMMENT 'Icon identifier (e.g. ''star'')',
  `event` varchar(255) NOT NULL COMMENT 'Event where the award was given',
  `year` int NOT NULL COMMENT 'Year the award was received',
  `description` text COMMENT 'Short description of the award',
  `logo` varchar(255) DEFAULT NULL COMMENT 'Logo filename or path for the award',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);
