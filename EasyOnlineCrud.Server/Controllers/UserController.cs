using EasyOnlineCrud.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EasyOnlineCrud.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<MyUser> _userManager;

        public UserController( UserManager<MyUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new MyUser
            {
                UserName = userDto.UserName,
                Email = userDto.Email,
                PhoneNumber = userDto.PhoneNumber,
            };

            var result = await _userManager.CreateAsync(user, userDto.Password);

            if (result.Succeeded)
            {
                return Ok(new { message = "User registered successfully!" });
            }

            // Zwróć błędy w przypadku niepowodzenia
            return BadRequest(result.Errors);
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            MyUser user = new MyUser() {
                UserName = User.FindFirstValue(ClaimTypes.Name) 
            };

            return Ok(user);
        }
    }
}
