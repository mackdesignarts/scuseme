﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace scuseme.data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class scusemeDataModelContainer : DbContext
    {
        public scusemeDataModelContainer()
            : base("name=scusemeDataModelContainer")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }

        public object Query<T>(string v)
        {
            throw new NotImplementedException();
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Community> Communities { get; set; }
        public virtual DbSet<Thread> Threads { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
    }
}
