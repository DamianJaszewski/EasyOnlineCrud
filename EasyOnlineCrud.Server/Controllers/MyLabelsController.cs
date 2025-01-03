using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EasyOnlineCrud.Server;
using EasyOnlineCrud.Server.Models;

namespace EasyOnlineCrud.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyLabelsController : ControllerBase
    {
        private readonly DataContext _context;

        public MyLabelsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/MyLabels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MyLabel>>> GetLabels()
        {
            return await _context.Labels.ToListAsync();
        }

        // GET: api/MyLabels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MyLabel>> GetMyLabel(int id)
        {
            var myLabel = await _context.Labels.FindAsync(id);

            if (myLabel == null)
            {
                return NotFound();
            }

            return myLabel;
        }

        // PUT: api/MyLabels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMyLabel(int id, MyLabel myLabel)
        {
            if (id != myLabel.Id)
            {
                return BadRequest();
            }

            _context.Entry(myLabel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MyLabelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MyLabels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MyLabel>> PostMyLabel(MyLabel myLabel)
        {
            _context.Labels.Add(myLabel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMyLabel", new { id = myLabel.Id }, myLabel);
        }

        // DELETE: api/MyLabels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMyLabel(int id)
        {
            var myLabel = await _context.Labels.FindAsync(id);
            if (myLabel == null)
            {
                return NotFound();
            }

            _context.Labels.Remove(myLabel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MyLabelExists(int id)
        {
            return _context.Labels.Any(e => e.Id == id);
        }
    }
}
