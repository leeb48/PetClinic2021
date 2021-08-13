using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddedPetDataContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pet_PetOwners_PetOwnerId",
                table: "Pet");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Pet",
                table: "Pet");

            migrationBuilder.RenameTable(
                name: "Pet",
                newName: "Pets");

            migrationBuilder.RenameIndex(
                name: "IX_Pet_PetOwnerId",
                table: "Pets",
                newName: "IX_Pets_PetOwnerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Pets",
                table: "Pets",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pets_PetOwners_PetOwnerId",
                table: "Pets",
                column: "PetOwnerId",
                principalTable: "PetOwners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pets_PetOwners_PetOwnerId",
                table: "Pets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Pets",
                table: "Pets");

            migrationBuilder.RenameTable(
                name: "Pets",
                newName: "Pet");

            migrationBuilder.RenameIndex(
                name: "IX_Pets_PetOwnerId",
                table: "Pet",
                newName: "IX_Pet_PetOwnerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Pet",
                table: "Pet",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pet_PetOwners_PetOwnerId",
                table: "Pet",
                column: "PetOwnerId",
                principalTable: "PetOwners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
