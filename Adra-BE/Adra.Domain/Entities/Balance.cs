namespace Adra.Domain.Entities
{
    public class Balance: BaseEntity
    {
        public string AccountName { get; set; }
        public double Amount { get; set; }
        public int ReportId { get; set; }

        public virtual Report Report { get; set; }
    }
}
