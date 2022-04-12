using System.Collections.Generic;

namespace Adra.Domain.Entities
{
    public class Month: BaseEntity
    {
        public string Name { get; set; }

        public virtual IList<Report> Reports { get; set; }
    }
}
