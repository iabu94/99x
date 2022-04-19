using Adra.Api.DTOs;
using Adra.Authz.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Adra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJWTAuthenticationManager _jWTAuthenticationManager;

        public AuthController(IJWTAuthenticationManager jWTAuthenticationManager)
        {
            _jWTAuthenticationManager = jWTAuthenticationManager;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            var token = _jWTAuthenticationManager.Authenticate(loginDto.Username, loginDto.Password);

            if (token == null)
                return Unauthorized();

            return Ok(new LoginResponseDto { Token = token});
        }
    }
}
