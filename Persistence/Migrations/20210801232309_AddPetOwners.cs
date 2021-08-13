using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddPetOwners : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PetOwnerId",
                table: "Appointments",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PetOwners",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    OwnerName = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Phone = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PetOwners", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    PetName = table.Column<string>(type: "TEXT", nullable: true),
                    PetType = table.Column<string>(type: "TEXT", nullable: true),
                    PetAge = table.Column<int>(type: "INTEGER", nullable: false),
                    PetOwnerId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pet_PetOwners_PetOwnerId",
                        column: x => x.PetOwnerId,
                        principalTable: "PetOwners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_PetOwnerId",
                table: "Appointments",
                column: "PetOwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Pet_PetOwnerId",
                table: "Pet",
                column: "PetOwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_PetOwners_PetOwnerId",
                table: "Appointments",
                column: "PetOwnerId",
                principalTable: "PetOwners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_PetOwners_PetOwnerId",
                table: "Appointments");

            migrationBuilder.DropTable(
                name: "Pet");

            migrationBuilder.DropTable(
                name: "PetOwners");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_PetOwnerId",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "PetOwnerId",
                table: "Appointments");
        }
    }
}
