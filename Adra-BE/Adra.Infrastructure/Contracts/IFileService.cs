using Adra.Infrastructure.Models;
using System.Collections.Generic;
using System.IO;

namespace Adra.Infrastructure.Contracts
{
    public interface IFileService
    {
        IList<BalanceInfo> ReadCsv(Stream stream);
    }
}
