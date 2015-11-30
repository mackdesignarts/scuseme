
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/29/2015 18:09:30
-- Generated from EDMX file: C:\scuseme\New folder\New folder\scuseme\scuseme.data\scusemeDataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [scuseme_db];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_CommunityThreads]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Threads] DROP CONSTRAINT [FK_CommunityThreads];
GO
IF OBJECT_ID(N'[dbo].[FK_CommunityUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_CommunityUser];
GO
IF OBJECT_ID(N'[dbo].[FK_CommunityAdmin]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Communities] DROP CONSTRAINT [FK_CommunityAdmin];
GO
IF OBJECT_ID(N'[dbo].[FK_ThreadUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_ThreadUser];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[dbo].[Communities]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Communities];
GO
IF OBJECT_ID(N'[dbo].[Threads]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Threads];
GO
IF OBJECT_ID(N'[dbo].[Admins]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Admins];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Username] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [Email] nvarchar(max)  NULL,
    [DateCreated] datetime  NULL,
    [CommunityCommunityId] int  NULL,
    [ThreadThreadId] int  NULL
);
GO

-- Creating table 'Communities'
CREATE TABLE [dbo].[Communities] (
    [CommunityId] int IDENTITY(1,1) NOT NULL,
    [Title] nvarchar(max)  NULL,
    [Tags] nvarchar(max)  NULL,
    [OperatorType] tinyint  NULL,
    [Owner] nvarchar(max)  NULL,
    [Description] nvarchar(max)  NULL,
    [Admin_AdminId] int  NULL
);
GO

-- Creating table 'Threads'
CREATE TABLE [dbo].[Threads] (
    [ThreadId] int IDENTITY(1,1) NOT NULL,
    [Title] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Content] nvarchar(max)  NULL,
    [DateCreated] datetime  NULL,
    [CommunityCommunityId] int  NULL
);
GO

-- Creating table 'Admins'
CREATE TABLE [dbo].[Admins] (
    [AdminId] int IDENTITY(1,1) NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [Log] nvarchar(max)  NULL,
    [Type] tinyint  NOT NULL,
    [Username] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [CommunityId] in table 'Communities'
ALTER TABLE [dbo].[Communities]
ADD CONSTRAINT [PK_Communities]
    PRIMARY KEY CLUSTERED ([CommunityId] ASC);
GO

-- Creating primary key on [ThreadId] in table 'Threads'
ALTER TABLE [dbo].[Threads]
ADD CONSTRAINT [PK_Threads]
    PRIMARY KEY CLUSTERED ([ThreadId] ASC);
GO

-- Creating primary key on [AdminId] in table 'Admins'
ALTER TABLE [dbo].[Admins]
ADD CONSTRAINT [PK_Admins]
    PRIMARY KEY CLUSTERED ([AdminId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [CommunityCommunityId] in table 'Threads'
ALTER TABLE [dbo].[Threads]
ADD CONSTRAINT [FK_CommunityThreads]
    FOREIGN KEY ([CommunityCommunityId])
    REFERENCES [dbo].[Communities]
        ([CommunityId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CommunityThreads'
CREATE INDEX [IX_FK_CommunityThreads]
ON [dbo].[Threads]
    ([CommunityCommunityId]);
GO

-- Creating foreign key on [CommunityCommunityId] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [FK_CommunityUser]
    FOREIGN KEY ([CommunityCommunityId])
    REFERENCES [dbo].[Communities]
        ([CommunityId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CommunityUser'
CREATE INDEX [IX_FK_CommunityUser]
ON [dbo].[Users]
    ([CommunityCommunityId]);
GO

-- Creating foreign key on [Admin_AdminId] in table 'Communities'
ALTER TABLE [dbo].[Communities]
ADD CONSTRAINT [FK_CommunityAdmin]
    FOREIGN KEY ([Admin_AdminId])
    REFERENCES [dbo].[Admins]
        ([AdminId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CommunityAdmin'
CREATE INDEX [IX_FK_CommunityAdmin]
ON [dbo].[Communities]
    ([Admin_AdminId]);
GO

-- Creating foreign key on [ThreadThreadId] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [FK_ThreadUser]
    FOREIGN KEY ([ThreadThreadId])
    REFERENCES [dbo].[Threads]
        ([ThreadId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ThreadUser'
CREATE INDEX [IX_FK_ThreadUser]
ON [dbo].[Users]
    ([ThreadThreadId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------