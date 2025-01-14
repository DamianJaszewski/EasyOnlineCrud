using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EasyOnlineCrud.Server.Migrations
{
    /// <inheritdoc />
    public partial class TaskWithUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "MyTasks",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MyTasks_UserId",
                table: "MyTasks",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_MyTasks_AspNetUsers_UserId",
                table: "MyTasks",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyTasks_AspNetUsers_UserId",
                table: "MyTasks");

            migrationBuilder.DropIndex(
                name: "IX_MyTasks_UserId",
                table: "MyTasks");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "MyTasks");
        }
    }
}
