using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using scuseme.data;

namespace scuseme.web.Controllers
{
    public class ThreadsController : ApiController
    {
        private scusemeDataModelContainer db = new scusemeDataModelContainer();

        // GET: api/Threads
        public IQueryable<Thread> GetThreads()
        {
            return db.Threads;
        }

        // GET: api/Threads/5
        [ResponseType(typeof(Thread))]
        public async Task<IHttpActionResult> GetThread(int id)
        {
            Thread thread = await db.Threads.FindAsync(id);
            if (thread == null)
            {
                return NotFound();
            }

            return Ok(thread);
        }

        // PUT: api/Threads/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutThread(int id, Thread thread)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != thread.ThreadId)
            {
                return BadRequest();
            }

            db.Entry(thread).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Threads
        [ResponseType(typeof(Thread))]
        public async Task<IHttpActionResult> PostThread(Thread thread)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Threads.Add(thread);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = thread.ThreadId }, thread);
        }

        // DELETE: api/Threads/5
        [ResponseType(typeof(Thread))]
        public async Task<IHttpActionResult> DeleteThread(int id)
        {
            Thread thread = await db.Threads.FindAsync(id);
            if (thread == null)
            {
                return NotFound();
            }

            db.Threads.Remove(thread);
            await db.SaveChangesAsync();

            return Ok(thread);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ThreadExists(int id)
        {
            return db.Threads.Count(e => e.ThreadId == id) > 0;
        }
    }
}