using System;

namespace Adra.Domain.Entities
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
