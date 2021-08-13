using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddPetAndOwnerRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pet_PetOwners_PetOwnerId",
                table: "Pet");

            migrationBuilder.AddForeignKey(
                name: "FK_Pet_PetOwners_PetOwnerId",
                table: "Pet",
                column: "PetOwnerId",
                principalTable: "PetOwners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pet_PetOwners_PetOwnerId",
                table: "Pet");

            migrationBuilder.AddForeignKey(
                name: "FK_Pet_PetOwners_PetOwnerId",
                table: "Pet",
                column: "PetOwnerId",
                principalTable: "PetOwners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
