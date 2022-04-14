using System.Collections.Generic;
using System.Threading.Tasks;

namespace Adra.Domain.Contracts
{
    public interface IRepository<T>
    {
        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<T> GetByIdAsync(int id);
        Task<IList<T>> GetAllAsync();
    }
}
