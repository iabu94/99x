using System;
using System.Threading.Tasks;

namespace Adra.Domain.Contracts
{
    public interface IUnitOfWork : IDisposable
    {
        Task SaveChangesAsync();
    }
}
