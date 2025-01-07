using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EasyOnlineCrud.Server.Migrations
{
    /// <inheritdoc />
    public partial class Update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyTasks_Labels_MyLabelId",
                table: "MyTasks");

            migrationBuilder.AlterColumn<int>(
                name: "MyLabelId",
                table: "MyTasks",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_MyTasks_Labels_MyLabelId",
                table: "MyTasks",
                column: "MyLabelId",
                principalTable: "Labels",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyTasks_Labels_MyLabelId",
                table: "MyTasks");

            migrationBuilder.AlterColumn<int>(
                name: "MyLabelId",
                table: "MyTasks",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MyTasks_Labels_MyLabelId",
                table: "MyTasks",
                column: "MyLabelId",
                principalTable: "Labels",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
