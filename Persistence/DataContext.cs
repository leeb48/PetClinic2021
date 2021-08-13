using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<PetOwner> PetOwners { get; set; }
        public DbSet<Pet> Pets { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Pet>()
                .HasOne(p => p.PetOwner)
                .WithMany(o => o.Pets)
                .OnDelete(DeleteBehavior.Cascade);
        }

    }
}