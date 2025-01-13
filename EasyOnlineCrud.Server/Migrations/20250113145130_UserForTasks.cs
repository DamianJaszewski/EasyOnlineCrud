using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EasyOnlineCrud.Server.Migrations
{
    /// <inheritdoc />
    public partial class UserForTasks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MyUserId",
                table: "MyTasks",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "MyTasks",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MyTasks_MyUserId",
                table: "MyTasks",
                column: "MyUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_MyTasks_AspNetUsers_MyUserId",
                table: "MyTasks",
                column: "MyUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyTasks_AspNetUsers_MyUserId",
                table: "MyTasks");

            migrationBuilder.DropIndex(
                name: "IX_MyTasks_MyUserId",
                table: "MyTasks");

            migrationBuilder.DropColumn(
                name: "MyUserId",
                table: "MyTasks");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "MyTasks");
        }
    }
}
