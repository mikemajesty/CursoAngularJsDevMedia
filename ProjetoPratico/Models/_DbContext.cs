using MySql.Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProjetoPratico.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class _DbContext : DbContext
    {
        public _DbContext()
        {
            DbConfiguration.SetConfiguration(new MySql.Data.Entity.MySqlEFConfiguration());
        }
        public DbSet<Imagem> Imagem { get; set; }
        public DbSet<Noticia> Noticia { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Imagem>().ToTable("Imagem");
            modelBuilder.Entity<Noticia>().ToTable("Noticia");
            base.OnModelCreating(modelBuilder);
        }
    }
}