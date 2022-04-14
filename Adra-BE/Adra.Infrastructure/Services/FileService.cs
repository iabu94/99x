using Adra.Infrastructure.Contracts;
using Adra.Infrastructure.Models;
using CsvHelper;
using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;

namespace Adra.Infrastructure.Services
{
    public class FileService : IFileService
    {
        public IList<BalanceInfo> ReadCsv(Stream stream)
        {
            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = false,
            };
            var records = new List<BalanceInfo>();
            using (var reader = new StreamReader(stream))
            using (var csv = new CsvReader(reader, config))
            {
                var readRecords = csv.GetRecords<dynamic>();
                foreach (var record in readRecords)
                {
                    var exp = record as IDictionary<string, object>;
                    records.Add(new BalanceInfo { Name = exp["Field1"].ToString(), Amount = Convert.ToDouble(exp["Field2"]) });
                }
            }
            return records;
        }
    }
}
